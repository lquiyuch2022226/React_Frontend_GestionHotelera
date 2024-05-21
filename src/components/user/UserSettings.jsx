/* eslint-disable react/prop-types */
import { useState } from "react";
import {
    emailValidationMessage,
    validateEmail,
    validateLastName,
    validateLastNameMessage,
    validateName,
    validateNameMessage
} from "../../shared/validators/index.js";
import { Input } from "../Input.jsx";

const inputs = [
  {
    field: "name",
    label: "Name",
    validationMessage: validateNameMessage,
    type: "text",
  },
  {
    field: "lastName",
    label: "LastName",
    validationMessage: validateLastNameMessage,
    type: "text",
  },
  {
    field: "email",
    label: "Email",
    validationMessage: emailValidationMessage,
    type: "text",
  }
];
export const UserSettings = ({ settings, saveSettings }) => {
  const [formState, setFormState] = useState({
    name: {
      isValid: validateName(settings.name),
      showError: false,
      value: settings.name,
    },
    lastName: {
      isValid: validateLastName(settings.lastName),
      showError: false,
      value: settings.lastName,
    },
    email: {
      isValid: validateEmail(settings.email),
      showError: false,
      value: settings.email,
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
      case "name":
        isValid = validateName(value);
        break;
      case "lastName":
        isValid = validateLastName(value);
        break;
      case "email":
        isValid = validateEmail(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
        ...prevState,
        [field]:{
            ...prevState[field],
            isValid,
            showError: !isValid
        }
    }))
  };

  const handleFormSubmit = (event) =>{
    event.preventDefault()

    saveSettings({
        id: localStorage.getItem("IdUser").replace(/\"/g, ''),
        email: formState.email.value,
        name: formState.name.value,
        lastName: formState.lastName.value,
    })
  }

  const isSubmitButtonDisabled = !formState.name.isValid ||
                                 !formState.lastName.isValid ||
                                 !formState.email.isValid

  return(
    <form className="settings-form">
        {inputs.map((input) => (
            <Input 
                key={input.field}
                field={input.field}
                label={input.label}
                value={formState[input.field].value}
                onChangeHandler={handleInputValueChange}
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState[input.field].showError}
                validationMessage={input.validationMessage}
                type={input.type}
                textarea={input.textarea}
            />
        ))}
        <button onClick={handleFormSubmit} disabled={isSubmitButtonDisabled}>
            Guardar
        </button>
    </form>
  )
};