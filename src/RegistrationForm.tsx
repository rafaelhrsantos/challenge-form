import { useTranslation } from 'react-i18next';
import React from "react";
import { Button, Container, Form, FormFeedback, FormGroup, FormText, Input, Label } from "reactstrap";

export const RegistrationForm = () => {
  let lang = "";

  const [t, i18n] = useTranslation();

  const handleClick = () => {
    lang =  i18n.language;

    console.log("ll:", i18n.language);
  };

  const changeToEN = () => {
    i18n.changeLanguage('en');
  };

  const changeToDE = () => {
    i18n.changeLanguage('de');
  };

  const runSubmit = () => {

  };

  const showGenderSelection = !i18n.language.toLowerCase().includes("de");
  const showNewsletter = !i18n.language.toLowerCase().includes("en");

  return (
    <Container className={"py-4"}>
      <button onClick={changeToEN}>EN</button>
      <button onClick={changeToDE}>DE</button>
      <div onClick={handleClick}>{"Current lang is:" + i18n.language}</div>

      <Form>
        <FormGroup>
          <Label for="emailInput">{`${t("emailAddress")} *`}</Label>
          <Input id={"emailInput"} valid />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Valid input</Label>
          <Input valid />
          <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Invalid input</Label>
          <Input invalid />
          <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="genderSelect">{t("genderSelect")}</Label>
          <Input type="select" name="select" id="genderSelect">
            <option selected>{`-- ${t("selectOption")} --`}</option>
            <option>{t("male")}</option>
            <option>{t("female")}</option>
          </Input>
        </FormGroup>
        {showGenderSelection &&
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />
              {' ' + t("ageDisclaimer")}
            </Label>
          </FormGroup>
        }
        {showNewsletter &&
          <FormGroup check>
            <Label check>
              <Input type="checkbox"/>
              {' ' + t("subscribeNewsletter")}
            </Label>
          </FormGroup>
        }
        <FormGroup className={"py-4"}>
          <Button onClick={runSubmit}>{t("submit")}</Button>
        </FormGroup>
      </Form>
    </Container>
  );
};