/* eslint-disable react/prop-types */
import "../pages/auth/register.css";
import { useState } from "react";
import logo from "../assets/img/kha.jpeg";
import { Input } from "./Input";
import {
  emailValidationMessage,
  passwordValidationMessage,
  validateEmail,
  validateNameMessage,
  validatePassword,
} from "../shared/validators";
import { useLogin } from "../shared/hooks";

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin();

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
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid
      }
    }))
  };

  const handleLogin = (event) => {
    event.preventDefault()

    login(formState.email.value, formState.password.value)
  }

  const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid
  return (
    <div className="page-container">
      <div className="page-container__border">
        <div className="page-container__half page-container__half--left"></div>
        <div className="page-container__half page-container__half--right">
          <div className="page-container__content">
            <div className="page-container__logo">
              <img className="page-container__logo-img" src={logo} alt="logo" />
            </div>
            <h2 className="page-container__title">LOGIN</h2>
            <div className="page-container__section">
              <h3 className="page-container__subtitle">Datos de Usuario</h3>
              <div className="page-container__inputs-group">
                <CustomInput 
                  className="page-container__input"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div>
              <CustomInput 
                className="page-container__input"
                placeholder="Password"
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
              Si todavia no tiene una cuenta de clic aqui...
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