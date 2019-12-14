import { useTranslation } from 'react-i18next';
import React, { useState } from "react";
import { Alert, Button, Collapse, Container, Form, FormGroup, Label } from "reactstrap";
import { Field, Formik } from "formik";
import * as Yup from 'yup';
import { CustomInputForm } from "./CustomInputForm";
import { submitUserFrom } from "./api";

export const RegistrationForm = () => {
  const [t, i18n] = useTranslation();

  const [showAgeDisclaimer, setShowAgeDisclaimer] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const toggleAgeDisclaimer = () => setShowAgeDisclaimer(!showAgeDisclaimer);
  const dismissAlert = () => setShowAlert(false);

  const showGenderSelection = !i18n.language.toLowerCase().includes("de");
  const showNewsletter = !i18n.language.toLowerCase().includes("en");

  const FormSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("invalidEmail"))
      .min(3)
      .required(t("required")),
    age: Yup.boolean()
      .required(t("required"))
      .oneOf([true], t("invalidAgeCheck")),
    gender: Yup.string()
      .notRequired(),
    newsletter: Yup.boolean()
      .notRequired(),
  });

  const runSubmit = async (values: any) => {
    console.log(values);

    const { result } = await submitUserFrom(values);

    setShowAlert(result === "OK");
  };

  interface MyFormValues {
    email: string;
    age: boolean;
    gender: string;
    newsletter: boolean;
  }

  const initialValues: MyFormValues = {
    email: '',
    age: false,
    gender: '',
    newsletter: false
  };

  return (
    <Container className={"py-4"}>
      {showAlert &&
        <Alert color="success" toggle={dismissAlert}>
          {t("formSubmitted")}
        </Alert>
      }

      <Formik<MyFormValues>
        initialValues={initialValues}
        validationSchema={FormSchema}
        validate={() => {}}
        onSubmit={runSubmit}
      >
        {formikBag =>
          <Form onSubmit={formikBag.handleSubmit}>
            <FormGroup>
              <Label for="email">{`${t("emailAddress")} *`}</Label>
              <Field name="email" type={'email'} component={CustomInputForm}/>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="age" type={'checkbox'} component={CustomInputForm}/>
                {` ${t("ageCheck")} *`}
              </Label>
              <Button className={"ml-3"} outline={true} size="sm" onClick={toggleAgeDisclaimer}>?</Button>
              <Collapse isOpen={showAgeDisclaimer}>
              <div className={"p-3"}>
                {t("ageDisclaimer")}
              </div>
            </Collapse>
            </FormGroup>
            {showGenderSelection &&
            <FormGroup tag="fieldset" className={"pt-2"}>
              <Label>{t("genderSelect")}</Label>
              <FormGroup check>
                <Label check>
                  <Field type="radio" name="gender" value={"male"} component={CustomInputForm}/>
                  {` ${t("male")}`}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Field type="radio" name="gender" value={"female"} component={CustomInputForm}/>
                  {` ${t("female")}`}
                </Label>
              </FormGroup>
              </FormGroup>
            }
            {showNewsletter &&
            <FormGroup check>
              <Label check>
                <Field name="newsletter" type={'checkbox'} component={CustomInputForm}/>
                {' ' + t("subscribeNewsletter")}
              </Label>
            </FormGroup>
            }
            <FormGroup className={"py-4"}>
              <Button className={"w-25"} type="submit" disabled={formikBag.isSubmitting}>
                {!formikBag.isSubmitting
                  ? t("submit")
                  : <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                }
              </Button>
            </FormGroup>
          </Form>
        }
      </Formik>
    </Container>
  );
};