import React, { Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { RegistrationForm } from "./RegistrationForm";
import { DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarBrand, UncontrolledDropdown } from "reactstrap";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const [ t, i18n ] = useTranslation();

  const changeToEN = () => {
    i18n.changeLanguage('en-EN');
  };

  const changeToDE = () => {
    i18n.changeLanguage('de-DE');
  };

  return (
    <div className="App">
      <Navbar color="dark" dark expand="md" className={"justify-content-between"}>
        <NavbarBrand href="/">{t("registrationForm")}</NavbarBrand>
        <UncontrolledDropdown>
          <DropdownToggle caret>
            {i18n.language}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={changeToEN}>en-EN</DropdownItem>
            <DropdownItem onClick={changeToDE}>de-DE</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Navbar>
      <Suspense fallback={null}>
        <RegistrationForm />
      </Suspense>
    </div>
  );
};

export default App;
