/* eslint-disable react/prop-types */
import "../pages/auth/register.css";
import { useState } from "react";
import logo from "../assets/img/kha.jpeg";
import { Input } from "./Input";
import { Link } from "react-router-dom";
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
  validateNameMessage,
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
    console.log(formState);
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
    <div className="page-container">
      <div className="page-container__border">
        <div className="page-container__half page-container__half--left"></div>
        <div className="page-container__half page-container__half--right">
          <div className="page-container__content">
            <div className="page-container__logo">
              <img className="page-container__logo-img" src={logo} alt="logo" />
            </div>
            <h2 className="page-container__title">REGISTER</h2>
            <div className="page-container__section">
              <h3 className="page-container__subtitle">Datos Personales</h3>
              <div className="page-container__inputs-group">
                <CustomInput
                  onChange={(e) => {
                    handleInputValueChange(e.target.value, "name");
                  }}
                  onBlur={handleInputValidationOnBlur}
                  value={formState.name.value}
                  className="page-container__input"
                  showErrorMessage={formState.name.showError}
                  validationMessage={validateNameMessage}
                  placeholder="Nombre"
                  type="text"
                />
                <CustomInput
                  onChange={(e) => {
                    handleInputValueChange(e.target.value, "lastName");
                  }}
                  onBlur={handleInputValidationOnBlur}
                  value={formState.lastName.value}
                  className="page-container__input"
                  showErrorMessage={formState.lastName.showError}
                  validationMessage={validateLastNameMessage}
                  placeholder="Apellido"
                  type="text"
                />
              </div>
            </div>
            <div className="page-container__section">
              <h3 className="page-container__subtitle">Datos de Cuenta</h3>
              <CustomInput
                onChange={(e) => {
                  handleInputValueChange(e.target.value, "email");
                }}
                onBlur={handleInputValidationOnBlur}
                value={formState.email.value}
                className="page-container__input--full"
                showErrorMessage={formState.email.showError}
                validationMessage={emailValidationMessage}
                placeholder="Email"
                type="text"
              />
              <div className="page-container__inputs-group">
                <CustomInput
                  onChange={(e) => {
                    handleInputValueChange(e.target.value, "password");
                  }}
                  onBlur={handleInputValidationOnBlur}
                  value={formState.password.value}
                  className="page-container__input"
                  showErrorMessage={formState.password.showError}
                  validationMessage={passwordValidationMessage}
                  placeholder="Password"
                  type="password"
                />
                <CustomInput
                  onChange={(e) => {
                    handleInputValueChange(e.target.value, "passwordConfir");
                  }}
                  onBlur={handleInputValidationOnBlur}
                  value={formState.passwordConfir.value}
                  className="page-container__input"
                  showErrorMessage={formState.passwordConfir.showError}
                  validationMessage={passwordConfirmationMessage}
                  placeholder="Password Confirm"
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="page-container__actions">
            <button className="page-container__button">Enviar</button>
            <a
              className="page-container__link"
              to={"/auth"}
              onClick={(e) => {
                e.preventDefault();
                switchAuthHandler();
              }}
            >
              Si ya tienes cuenta da clic aqui...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function CustomInput({
  type,
  onChange,
  onBlur,
  value,
  placeholder,
  className,
  showErrorMessage,
  validationMessage,
}) {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <input
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        className={className}
      />
      <span className="auth-form-validations-message">
        {showErrorMessage && validationMessage}
      </span>
    </div>
  );
}
