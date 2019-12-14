import { FormFeedback, Input } from "reactstrap";
import React from "react";
import { FieldProps } from "formik/dist/Field";

type CustomInputFormProps = FieldProps;

/*
 * Custom input field that feeds from formik <Field> props
 * Generalizes rendering <Input> component and showing an error state
 */
export const CustomInputForm = ({
  field,
  form: { touched, errors },
  ...props
}: CustomInputFormProps) => (
  <div>
    <Input
      invalid={!!(touched[field.name] && errors[field.name])}
      {...field}
      {...props} />
    {touched[field.name] && errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback>}
  </div>
);