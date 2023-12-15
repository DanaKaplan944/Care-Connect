import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm.jsx";
import logoimg from "../utils/caretogether.png";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="loginMainContainer">
      <img className="logo" src={logoimg} />
      <LoginForm />
      <button className="createAccountBtn" onClick={() => navigate("/signup")}>
        Create An Account
      </button>
    </div>
  );
};

export default LoginPage;
