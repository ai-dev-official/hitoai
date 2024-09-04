import React, { useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";


const Login = ({session, url }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const error = queryParams.get("error");
    if (error) {
      setError(error);
      setShowModal(true);
    }
  }, []);


  if (session?.status === "loading") {
    return (
      <div className="loader__container">
        <span>Loading..</span>
      </div>
    );
  }

  if (session?.status === "authenticated") {
    router?.push("/");
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      router.push("/");
    } catch (error) {
      setError("Connection failed!");
      setShowModal(true);
    }
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
                placeholder="Email"
                required
                className={"login__input"}
              />
            </div>
            <div className="inputcontainer">
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
                required
                className={"login__input"}
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

            <button className={"login__button btn"}>Sign In</button>

            {/* {error && error} */}
          </form>
          {error && showModal && (
            <div className="login__modal">
              <div className="login__modal__content">
                <span>{error && error}</span>
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
