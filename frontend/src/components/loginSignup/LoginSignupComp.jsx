import { useState } from "react";
import "./loginSignup.css";
import { Link, useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Cookies from "js-cookie";

const LoginSignupComp = () => {
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState({
    login: false,
    signup: false,
    confirmPassword: false,
  });
  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
  function loginHandleChange(e) {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  }
  function signupHandleChange(e) {
    const { name, value } = e.target;
    setSignupData((prevData) => ({ ...prevData, [name]: value }));
  }

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };
  function loginUser(e) {
    e.preventDefaul();
    fetch("http://localhost:3000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("response data:", data);

        if (data.status === "User created successfully" && data.token) {
          Cookies.set("token", data.token, { expires: 2 / 24 });
          alert("Login Successfully");
          navigate("/");
        } else {
          alert(data.message || "Login Failed Please Try Again");
        }
      })
      .catch((err) => {
        console.log("Fetch ERROR:", err);
        alert("Fetch Eror: Login Failed");
      });
  }
  function registerUser(e) {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response Data:", data);
        alert(data.message);
        if (data.message === "User created successfully" && data.token) {
          Cookies.set("token", data.token, { expires: 2 / 24 });
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }
  return (
    <div className="container">
      <section
        className={`container7 forms ${showSignup ? "show-signup" : ""}`}
      >
        <div className="form login">
          <div className="form-content">
            <header className="header-css">Login</header>
            <form action="#" className="form-css" onSubmit={loginUser}>
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={loginHandleChange}
                  name="loginEmail"
                  className="input"
                />
              </div>
              <div className="field input-field">
                <input
                  type={showPassword.login ? "text" : "password"}
                  placeholder="Password"
                  className="password"
                  onChange={loginHandleChange}
                  name="loginPassword"
                />
                <i  onClick={() => togglePasswordVisibility("login")}>
                  
                  {showPassword.login ? (
                    <RemoveRedEyeIcon className="eye-icon" />
                  ) : (
                    <VisibilityOffIcon className="eye-icon" />
                  )}
                </i>
              </div>
              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>
              <div className="field button-field">
                <button>Login</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <Link to="#" className="link signup-link" onClick={toggleForm}>
                  Signup
                </Link>
              </span>
            </div>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <a href="#" className="field google">
              <img src="/google.png" alt="" className="google-img" />
              <span>Login with Google</span>
            </a>
          </div>
        </div>

        <div className="form signup">
          <div className="form-content">
            <header className="header-css">Signup</header>
            <form action="#" className="form-css" onSubmit={registerUser}>
              <div className="field input-field">
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={signupHandleChange}
                  name="name"
                  className="input"
                />
              </div>
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={signupHandleChange}
                  name="email"
                  className="input"
                />
              </div>
              <div className="field input-field">
                <input
                  type={showPassword.signup ? "text" : "password"}
                  placeholder="Create password"
                  className="password"
                  name="password"
                  onChange={signupHandleChange}
                />
                  <i onClick={() => togglePasswordVisibility("signup")}>
                  
                  {showPassword.login ? (
                    <RemoveRedEyeIcon  className="eye-icon"/>
                  ) : (
                    <VisibilityOffIcon className="eye-icon" />
                  )}
                </i>
              </div>
              <div className="field input-field">
                <input
                  type={showPassword.confirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="password"
                  name="cPassword"
                  onChange={signupHandleChange}
                />
                <i onClick={() => togglePasswordVisibility("confirmPassword")}>
                  
                  {showPassword.login ? (
                    <RemoveRedEyeIcon className="eye-icon" />
                  ) : (
                    <VisibilityOffIcon className="eye-icon" />
                  )}
                </i>
              </div>
              <div className="field button-field">
                <button>Signup</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Already have an account?{" "}
                <Link to="#" className="link login-link" onClick={toggleForm}>
                  Login
                </Link>
              </span>
            </div>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <a href="#" className="field google">
              <img src="google.png" alt="" className="google-img" />
              <span>Signup with Google</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginSignupComp;
