import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIService from "../api/api";
import context from "../ctx/ctx";
const SignUpForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [carePerson, setCarePerson] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobile, setMobile] = useState(false);
  const [hearing, setHearing] = useState("");
  const [allergies, setAllergies] = useState("");
  const ctx = useContext(context);
  const goToHomePage = async () => {
    try {
      const res = await APIService.signupUser({
        username,
        password,
        firstName,
        lastName,
        email,
        carePerson,
        dateOfBirth,
        mobile,
        hearing,
        allergies,
      });
      if (res) {
        ctx.setUserData(res);
        navigate("/task");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <div>
      <p>
        <b>Welcome to Care Connect, Please Sign Up:</b>{" "}
      </p>
      <div className="signupFormContainer">
        <label htmlFor="username">
          <b>Choose a Username: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          className="signupInput"
          onChange={(event) => setUsername(event.target.value)}
        />

        <label htmlFor="password">
          <b>Choose a Password: </b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          className="signupInput"
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="firstName">
          <b>What is your first name: </b>
        </label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          className="signupInput"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label htmlFor="lastName">
          <b>What is your last name: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lasttName"
          className="signupInput"
          onChange={(event) => setLasttName(event.target.value)}
        />
        <label htmlFor="email">
          <b>What is your email: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          className="signupInput"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="carePerson">
          <b>Who are we caring for: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Loved One's Name"
          className="signupInput"
          onChange={(event) => setCarePerson(event.target.value)}
        />
        <label>
          <b>What is their date of birth?</b>
        </label>
        <input
          type="text"
          placeholder="01/01/1950"
          className="signupInput"
          onChange={(event) => setDateOfBirth(event.target.value)}
        />
        <label htmlFor="mobile">
          <b>Are they mobile?</b>
        </label>
        <input
          type="checkbox"
          id="mobile"
          name="mobile"
          checked={mobile}
          onChange={(event) => {
            setMobile(!mobile);
          }}
        />
        <label htmlFor="hearing">
          <b>Are they hard of hearing?</b>
        </label>
        <input
          type="checkbox"
          id="hearing"
          name="hearing"
          checked={hearing}
          onChange={(event) => setHearing(!hearing)}
        />
        <label htmlFor="allergies">
          <b>Any allergies:</b>
        </label>
        <input
          type="text"
          name="allergies "
          className="signupInput"
          placeholder="Enter allergies or N/A"
          onChange={(event) => setAllergies(event.target.value)}
        />
        <button className="button" onClick={goToHomePage}>
          {" "}
          Sign Up{" "}
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
