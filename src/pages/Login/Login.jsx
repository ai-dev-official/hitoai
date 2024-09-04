import React, { useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    // You can handle query parameters or other effects here if necessary
  }, []);

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

  const validateForm = () => {
    const errors = { email: "", password: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (!formData.password) {
      errors.password = "Password is required.";
    }

    setFormErrors(errors);
    return !errors.email && !errors.password; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowModal(true); // Show modal if there are validation errors
      return;
    }

  
    // Call your sign-in function here
    console.log("Form submitted successfully!");
    // Reset form
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="login__wrapper">
      <div className={"login__container"}>
        <h1 className={"login__title"}>{success ? success : " "}</h1>
        <h2 className={"login__subtitle"}>Sign in</h2>

        <form onSubmit={handleSubmit} className={"login__form"}>
          <div className="inputcontainer">
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              className={"login__input"}
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
              className={"login__input"}
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

          <button className={"login__button btn"}>Sign In</button>
        </form>

        {error && showModal && (
          <div className="login__modal">
            <div className="login__modal__content">
              <span>{error}</span>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
        <div className="login__signup">
          <span>Need an account? </span>
          <a className="login__link" href="/register">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
