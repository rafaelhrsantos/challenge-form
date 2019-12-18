import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { CustomInputForm } from "./CustomInputForm";
import { Field, Formik } from "formik";
import { FormFeedback, Input, InputProps } from "reactstrap";
import { act } from "react-dom/test-utils";

describe('App test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(
      <Formik initialValues={{ "email": ""}} onSubmit={jest.fn()}>
        <Field name="email" type={'email'} component={CustomInputForm} />
      </Formik>
    );
  });

  const updateFormikField = async (
    nativeFieldWrapper: ReactWrapper<InputProps, any, React.Component<{}, {}, any>>,
    targetName: string,
    value: any,
  ) => {
    // updates values and errors
    await act(async () => {
      nativeFieldWrapper.simulate(
        'change',
        { target: { name: targetName, value } }
      );
    });
    // updates touched
    await act(async () => {
      nativeFieldWrapper.simulate(
        'blur',
        { target: { name: targetName } }
      );
    });
  };

  it('should render CustomInputForm', () => {
    const customInput = wrapper.find(CustomInputForm);
    expect(customInput.length).toEqual(1);

    const input = wrapper.find(Input);
    expect(input.length).toEqual(1);
  });

  it('should update', async () => {
    const noFeedback = wrapper.find(FormFeedback);
    expect(noFeedback.length).toEqual(0);

    const input = wrapper.find(Input).first();
    await updateFormikField(input, "email", "test@wrong.");

    const newInput = wrapper.find(Input);
    expect(newInput.props().value).toEqual("test@wrong.");
  });
});
