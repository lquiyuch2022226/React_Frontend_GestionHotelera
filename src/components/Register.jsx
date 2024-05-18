/* eslint-disable react/prop-types */
import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import {
  emailValidationMessage,
  passwordValidationMessage,
  passwordConfirmationMessage,
  validatePasswordConfir,
  validateEmail,
  validatePassword,
  validateLastName,
  validateLastNameMessage,
  validateName,
  validateNameMessage
} from "../shared/validators";
import { useRegister } from "../shared/hooks";

export const Register = ({ switchAuthHandler }) => {
  const { register, isLoading } = useRegister();

  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    passwordConfir: {
      value: "",
      isValid: false,
      showError: false,
    },
    name: {
      value: "",
      isValid: false,
      showError: false,
    },
    lastName: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "passwordConfir":
        isValid = validatePasswordConfir(formState.password.value, value);
        break;
      case "name":
        isValid = validateName(value);
        break;
      case "lastName":
        isValid = validateLastName(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(formState)
    register(
      formState.email.value,
      formState.password.value,
      formState.name.value,
      formState.lastName.value
    );
  };

  const isSubmitButtonDisabled =
    isLoading ||
    !formState.password.isValid ||
    !formState.email.isValid ||
    !formState.name.isValid ||
    !formState.lastName.isValid;

  return (
    <div className="register-container">
      <Logo text={"Register to Kinal Cast"} />
      <form className="auth-form">
        <Input
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        />
        <Input
          field="password"
          label="Password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
        />
        <Input
          field="passwordConfir"
          label="Password Confirmation"
          value={formState.passwordConfir.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.passwordConfir.showError}
          validationMessage={passwordConfirmationMessage}
        />
        <Input
          field="name"
          label="Name"
          value={formState.name.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.name.showError}
          validationMessage={validateNameMessage}
        />
        <Input
          field="lastName"
          label="LastName"
          value={formState.lastName.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.lastName.showError}
          validationMessage={validateLastNameMessage}
        />
        <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
          Register
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        ¿Ya tienes una cuenta? ¡Inicia sesión acá...!
      </span>
    </div>
  );
};