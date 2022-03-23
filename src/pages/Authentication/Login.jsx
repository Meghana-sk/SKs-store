import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import "./auth.css"

const Login = () => {
    return(
        <>
            <section className="auth-container">
                <div className="auth-content">
                    <header className="auth-header">
                        <h1>Login</h1>
                        <a href="../../index.html"><i className="fas fa-times"></i></a>
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
                    <a href="./signup.html">
                        <button className="btn btn-secondary-text text-s fw-600">Signup</button>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Login;