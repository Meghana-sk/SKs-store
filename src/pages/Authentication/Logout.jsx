import "./auth.css";

const Logout = () => {
    return (
        <>
            <section className="auth-container">
                <div className="auth-content">
                    <div className="text-center"><i className="fa fa-check-circle fa-2x"></i></div>
                    <p>You have been logged out. Click below to login</p>
                    <a href="../authentication/login.html">
                        <button className="btn btn-primary text-s">Login</button>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Logout;