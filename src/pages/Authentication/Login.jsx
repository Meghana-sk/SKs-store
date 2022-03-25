import "./auth.css"
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <>
            <section className="auth-container">
                <div className="auth-content">
                    <header className="auth-header">
                        <h1>Login</h1>
                        <Link to="/">
                            <i className="fas fa-times"></i>
                        </Link>
                    </header>
                    <form action="" className="form-section">
                        <div className="input-box">
                            <label className="input-label fw-600">Email</label>
                            <input className="input-text" type="email" required />
                        </div>
                        <div className="input-box">
                            <label className="input-label fw-600">Password</label>
                            <input className="input-text" type="password" required />
                        </div>
                        <button className="btn btn-primary text-s">Login</button>
                    </form>
                    <span className="login-hint">Don't have an account ?</span>
                    <Link to="/signup">
                        <button className="btn btn-secondary-text text-s fw-600">Signup</button>
                    </Link>
                </div>
            </section>
        </>
    );
}

export { Login };