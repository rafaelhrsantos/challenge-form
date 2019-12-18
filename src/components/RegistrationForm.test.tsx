import React from 'react';
import { mount, ReactWrapper } from "enzyme";
import { RegistrationForm } from "./RegistrationForm";
import { Container } from "reactstrap";

describe('RegistrationForm test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(<RegistrationForm />);
  });

  it('should render RegistrationForm', () => {
    const container = wrapper.find(Container);
    expect(container.length).toEqual(1);
  });

  it('should display form fields in EN', () => {
    const email = wrapper.find("#email").hostNodes();
    expect(email.length).toEqual(1);

    const ageCheck = wrapper.find("#ageCheck").hostNodes();
    expect(ageCheck.length).toEqual(1);

    const gender = wrapper.find("#gender").hostNodes();
    expect(gender.length).toEqual(1);

    const newsletter = wrapper.find("#newsletter").hostNodes();
    expect(newsletter.length).toEqual(0);
  });

  it('should render submit', () => {
    const submit = wrapper.find("#submit").hostNodes();
    expect(submit.length).toEqual(1);
  });
});
