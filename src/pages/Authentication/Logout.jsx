import "./auth.css";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <>
      <section className="auth-container">
        <div className="auth-content">
          <div className="text-center">
            <i className="fa fa-check-circle fa-2x"></i>
          </div>
          <p>You have been logged out. Click below to login</p>
          <Link to="/login">
            <button className="btn btn-primary text-s">Login</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export { Logout };
