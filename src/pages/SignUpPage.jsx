import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm.jsx";
import logoimg from "../utils/caretogether.png";

const SignUpPage = () => {
  return (
    <div className="signupMainContainer">
      <SignUpForm className="signupContainer" />
      <img className="taskPageLogo" src={logoimg} />
    </div>
  );
};

export default SignUpPage;
