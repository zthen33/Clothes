import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (state === "Sign Up" ) {
      setErrorMessage("Please enter your username.");
      return false;
    }
    if (!email) {
      setErrorMessage("Please enter your email.");
      return false;
    }
    if (!password) {
      setErrorMessage("Please enter your password.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
  };

  const signup = async () => {
    console.log("SignUp Function Executed", formData);
    if (!validateForm()) return;
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (response.ok && responseData.success) {
        alert("SignUp Successful");
        setFormData({ email: "", password: "" });
        window.location.replace("/");
      } else {
        if (
          responseData.error === "Existing user with the same email address"
        ) {
          setErrorMessage(
            "An account with this email already exists. Please use a different email or log in."
          );
        } else {
          setErrorMessage(
            "SignUp Failed: " + (responseData.error || "Unknown error")
          );
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    if (state === "Login") {
      await login();
    } else {
      await signup();
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <>
              <input
                name="username"
                value={formData.username}
                onChange={changeHandler}
                type="text"
                placeholder="Your Name"
              />
              {errorMessage && !formData.username && (
                <p className="error">{errorMessage}</p>
              )}
            </>
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          {errorMessage && !formData.email && (
            <p className="error">{errorMessage}</p>
          )}
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
          {errorMessage && !formData.password && (
            <p className="error">{errorMessage}</p>
          )}
        </div>
        <button onClick={handleSubmit}>Continue</button>
        {errorMessage && state === "Sign Up" && (
          <p className="error">{errorMessage}</p>
        )}
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
