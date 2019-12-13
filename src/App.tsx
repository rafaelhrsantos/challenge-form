import React, { Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { RegistrationForm } from "./RegistrationForm";
import { Navbar, NavbarBrand } from "reactstrap";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const [ t ] = useTranslation();

  return (
    <div className="App">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">{t("registrationForm")}</NavbarBrand>
      </Navbar>
      <Suspense fallback={null}>
        <RegistrationForm />
      </Suspense>
    </div>
  );
};

export default App;
