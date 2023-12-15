import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIService from "../api/api";
import context from "../ctx/ctx";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(context);

  const goToHomePage = async () => {
    try {
      const res = await APIService.loginUser(username, password);
      console.log(res);
      if (res) {
        const { careRecipient, user, tasks, email } = res;
        ctx.setUserData(user);
        ctx.setCareRecipientData(careRecipient);
        ctx.setTaskData(tasks);
        ctx.setEmail(email);
        navigate("/home");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <div className="loginFormContainer">
      <p>Welcome Back!</p>
      <label htmlFor="username">
        <b>Username: </b>
      </label>
      <input
        className="loginInputs"
        type="text"
        placeholder="Enter Username"
        name="username"
        onChange={(event) => setUsername(event.target.value)}
      />

      <label htmlFor="password">
        <b>Password: </b>
      </label>
      <input
        className="loginInputs"
        type="password"
        placeholder="Enter Password"
        name="password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button className="button " onClick={goToHomePage} type="submit">
        {" "}
        Login{" "}
      </button>
    </div>
  );
};

export default LoginForm;
