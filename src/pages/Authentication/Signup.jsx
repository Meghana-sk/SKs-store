import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { SIGNUP } from "../../shared/types";

const Signup = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    if (
      userCredentials.password.length > 8 &&
      userCredentials.password === userCredentials.confirmPassword
    ) {
      try {
        const response = await axios.post("/api/auth/signup", {
          email: userCredentials.email,
          password: userCredentials.password,
          firstName: userCredentials.firstName,
          lastName: userCredentials.lastName,
        });
        if (response.status === 201) {
          localStorage.setItem("userAuthToken", response.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.createdUser)
          );
          authDispatch({
            type: SIGNUP,
            payload: {
              user: response.data.createdUser,
              token: response.data.encodedToken,
            },
          });
          navigate("/");
        }
      } catch (error) {
        alert("Could not create account");
      }
    } else if (
      userCredentials.password.length < 8 &&
      userCredentials.confirmPassword.length < 8
    ) {
      alert("Password should be more than 8 characters");
    } else {
      alert("Password and confirm password do not match");
    }
  };

  return (
    <>
      <section className="auth-container">
        <div className="auth-content">
          <header className="auth-header">
            <h1>Sign up</h1>
            <Link to="/">
              <i className="fas fa-times"></i>
            </Link>
          </header>
          <form onSubmit={signupHandler}>
            <div className="input-box">
              <label className="input-label fw-600" for="first-name">
                First name
              </label>
              <input
                className="input-text"
                type="text"
                id="first-name"
                name="first-name"
                required
                value={userCredentials.firstName}
                onChange={(event) =>
                  setUserCredentials({
                    ...userCredentials,
                    firstName: event.target.value,
                  })
                }
              />
            </div>
            <div className="input-box">
              <label className="input-label fw-600" for="last-name">
                Last name
              </label>
              <input
                className="input-text"
                type="text"
                name="last-name"
                id="last-name"
                required
                value={userCredentials.lastName}
                onChange={(event) =>
                  setUserCredentials({
                    ...userCredentials,
                    lastName: event.target.value,
                  })
                }
              />
            </div>
            <div className="input-box">
              <label className="input-label fw-600" for="email">
                Email
              </label>
              <input
                className="input-text"
                type="email"
                name="email"
                id="email"
                required
                value={userCredentials.email}
                onChange={(event) =>
                  setUserCredentials({
                    ...userCredentials,
                    email: event.target.value,
                  })
                }
              />
            </div>
            <div className="input-box">
              <label className="input-label fw-600" for="password">
                Password
              </label>
              <input
                className="input-text"
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={userCredentials.password}
                onChange={(event) => {
                  setUserCredentials({
                    ...userCredentials,
                    password: event.target.value,
                  });
                }}
              />
              <i
                className={`fa ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                } eye-icon`}
                onClick={() => setShowPassword((show) => !show)}
              ></i>
            </div>
            <div className="input-box">
              <label className="input-label fw-600" for="confirm-password">
                Confirm Password
              </label>
              <input
                className="input-text"
                name="confirm-password"
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={userCredentials.confirmPassword}
                onChange={(event) => {
                  setUserCredentials({
                    ...userCredentials,
                    confirmPassword: event.target.value,
                  });
                }}
              />
              <i
                className={`fa ${
                  showConfirmPassword ? "fa-eye" : "fa-eye-slash"
                } eye-icon`}
                onClick={() => setShowConfirmPassword((show) => !show)}
              ></i>
            </div>
            <button className="btn btn-primary text-s">Create account</button>
          </form>
          <Link to="/login" className="login-hint">
            <span>Already have an account ?</span>
            <button className="btn btn-secondary-text text-s fw-600">
              Login
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export { Signup };
