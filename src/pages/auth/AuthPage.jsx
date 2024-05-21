import { useState } from "react";
import { Login } from "../../components/Login";
import { Register } from "../../components/Register";

import './authPage.css';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="auth-container">
      {/* Fondo de la imagen con transparencia */}
      <div className="auth-background"></div>
      <div className="auth-form-container">
        {isLogin ? (
          <Login switchAuthHandler={handleAuthPageToggle} />
        ) : (
          <Register switchAuthHandler={handleAuthPageToggle} />
        )}
      </div>
    </div>

  );
};
