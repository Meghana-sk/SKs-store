import "./auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Signup = () => {
  useEffect(() => {
    (async () => {
      try {
        const userCredentials = await axios.post("/api/auth/signup", {
          email: "sk@gmail.com",
          password: "test@123",
        });
        if (userCredentials.status === 201) {
          localStorage.setItem(
            "userAuthToken",
            userCredentials.data.encodedToken
          );
          localStorage.setItem(
            "user",
            JSON.stringify(userCredentials.data.createdUser)
          );
        }
        console.log("respfrom server", userCredentials);
      } catch (error) {
        console.error(error);
      }
    })();
  });
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
          <form action="">
            <div className="input-box">
              <label className="input-label fw-600">First name</label>
              <input className="input-text" type="text" required />
            </div>
            <div className="input-box">
              <label className="input-label fw-600">Last name</label>
              <input className="input-text" type="text" required />
            </div>
            <div className="input-box">
              <label className="input-label fw-600">Email</label>
              <input className="input-text" type="email" required />
            </div>
            <div className="input-box">
              <label className="input-label fw-600">Password</label>
              <input className="input-text" type="password" required />
            </div>
            <div className="input-box">
              <label className="input-label fw-600">Confirm Password</label>
              <input className="input-text" type="password" required />
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
