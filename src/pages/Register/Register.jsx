import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Register = ({ session }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  if (session?.status === "loading") {
    return (
      <div className="loader__container">
        <span>Loading...</span>
      </div>
    );
  }

  const validateForm = () => {
    const errors = { username: "", email: "", password: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.username) {
      errors.username = "Username is required.";
    }

    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (!formData.password) {
      errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    setFormErrors(errors);
    return !errors.username && !errors.email && !errors.password; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // If validation fails, do not proceed with form submission
    }

    // Proceed with form submission (e.g., API call)
    console.log("Form submitted successfully!", formData);
    
    // Optionally reset the form
    setFormData({ username: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error for the field being modified
    }));
  };

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
            name="username"
            placeholder="Username"
            required
            className={"register__input"}
            value={formData.username}
            onChange={handleChange}
          />
          {formErrors.username && <span className="error">{formErrors.username}</span>}
        </div>
        <div className="inputcontainer">
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            className={"register__input"}
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div className="inputcontainer">
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            className={"register__input"}
            value={formData.password}
            onChange={handleChange}
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
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>
        <div className="inputcontainer">
          <button className={"register__button"}>Register</button>
        </div>

        {error && <span className="error">Something went wrong!</span>}
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
