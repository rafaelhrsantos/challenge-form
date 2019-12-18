import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import App from './App';
import { Navbar } from "reactstrap";
import { RegistrationForm } from "./RegistrationForm";

describe('App test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it('should render App', () => {
    const navbar = wrapper.find(Navbar);
    const form = wrapper.find(RegistrationForm);

    expect(navbar.length).toEqual(1);
    expect(form.length).toEqual(1);
  });
});
