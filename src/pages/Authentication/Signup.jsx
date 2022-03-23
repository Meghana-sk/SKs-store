import "./auth.css";

const Signup = () => {
    return (
        <>
            <section className="auth-container">
                <div className="auth-content">
                    <header className="auth-header">
                        <h1>Sign up</h1>
                        <a href="../../index.html"><i className="fas fa-times"></i></a>
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
                    <a href="./login.html" className="login-hint">
                        <span>Already have an account ?</span>
                        <button className="btn btn-secondary-text text-s fw-600">Login</button>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Signup;