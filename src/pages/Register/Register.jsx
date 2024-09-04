import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Register = ({session}) => {

  const [error, setError] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  if (session?.status === "loading") {
    return (
      <div className="loader__container">
        <span>AI</span>
      </div>
    );
  }


  const handleSubmit = async (e) => {};

  return (
   
        <div className={"register__container"}>
          <h1 className={"register__title"}>Create an Account</h1>
          <h2 className={"register__subtitle"}>
            Please sign up to see the dashboard.
          </h2>
          <form onSubmit={handleSubmit} className={"register__form"}>
            <div className="inputcontainer">
              <input
                type="text"
                placeholder="Username"
                required
                className={"register__input"}
              />
            </div>
            <div className="inputcontainer">
              <input
                type="text"
                placeholder="Email"
                required
                className={"register__input"}
              />
            </div>
            <div className="inputcontainer">
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
                required
                className={"register__input"}
              />
              {isPasswordVisible ? (
                <FaRegEyeSlash
                  onClick={togglePasswordVisibility}
                  className="toggle__password"
                />
              ) : (
                <FaRegEye
                  onClick={togglePasswordVisibility}
                  className="toggle__password"
                />
              )}
            </div>
            <div className="inputcontainer">
              <button className={"register__button"}>Register</button>
            </div>

            {error && "Something went wrong!"}
          </form>
          <div className="register__signin">
            <span>Have an account? </span>
            <a className={"register__link"} href="/login">
              Sign In
            </a>
          </div>
        </div>

  );
};

export default Register;
