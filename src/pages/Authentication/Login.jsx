import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LOGIN } from "../../shared/types";
import { useAuth } from "../../context/auth-context";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const {authDispatch} = useAuth();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login",{
        email: userInfo.email,
        password: userInfo.password,
      })
      switch(response.status) {
        case 200:
          localStorage.setItem("userAuthToken", response.data.encodedToken);
          localStorage.setItem("user", JSON.stringify(response.data.foundUser));
          authDispatch({
            type: LOGIN,
            payload: {
              user: response.data.foundUser,
              token: response.data.encodedToken,
            },
          });
          navigate("/");
          break;
        case 404:
          alert("Email not found");
          break;
        case 401:
          alert("Wrong Password");
          break;
        case 500:
          alert("Server Error");
          break;
        default:
      }
    } catch(e) {
      alert("User not found. Signup now!")
    }
  }

  return (
    <>
      <section className="auth-container">
        <div className="auth-content">
          <header className="auth-header">
            <h1>Login</h1>
            <Link to="/">
              <i className="fas fa-times"></i>
            </Link>
          </header>
          <form
            action="submit"
            className="form-section"
            onSubmit={loginHandler}
          >
            <div className="input-box">
              <label className="input-label fw-600">Email</label>
              <input
                className="input-text"
                type="email"
                required
                value={setUserInfo.email}
                onChange={(event) =>
                  setUserInfo({ ...userInfo, email: event.target.value })
                }
              />
            </div>
            <div className="input-box">
              <label className="input-label fw-600">Password</label>
              <input
                className="input-text"
                type="password"
                required
                value={setUserInfo.password}
                onChange={(event) =>
                  setUserInfo({ ...userInfo, password: event.target.value })
                }
              />
            </div>
            <button className="btn btn-primary text-s">Login</button>
          </form>
          <span className="login-hint">Don't have an account ?</span>
          <Link to="/signup">
            <button className="btn btn-secondary-text text-s fw-600">
              Signup
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export { Login };
