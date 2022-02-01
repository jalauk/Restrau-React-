import React, { useState } from "react";
import { auth } from "./firebase";
import Alert from "@mui/material/Alert";
import { useHistory, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [Semail, setSEmail] = useState("");
  const [Spassword, setSPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      window.alert(`Welcome ${res.user.email}`);

      history.push("/");
    } catch (err) {
      window.alert("fill the fields correctly");
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(Semail);
    console.log(Spassword);
    try {
      const res = await auth.createUserWithEmailAndPassword(Semail, Spassword);
      window.alert(`welcome ${res.user.email}`);
      history.push("/");
    } catch (err) {
      window.alert("fill the fields correctly");
    }
  };
  return (
    <>
      <div className="bd">
        <div className="main_div">
          <div className="title">SignIn Here</div>
          <div className="social_icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i> <span>Facebook</span>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
          </div>
          <form action="#">
             
            <div className="input_box">
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="icon">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="input_box">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="icon">
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="option_div">
              <div className="check_box">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <div className="forget_div">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div className="input_box button">
              <input type="submit" value="Login" onClick={handleLogin} />
            </div>
            <div className="sign_up">
              Not a member?{" "}
              <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Signup now
              </a>
              <div
                class="modal fade mod"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog ">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title " id="exampleModalLabel">
                        SignUp Now
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="input_box">
                        <input
                          type="email"
                          placeholder="Email"
                          required
                          onChange={(e) => setSEmail(e.target.value)}
                        />
                        <div className="icon">
                          <i className="fas fa-user"></i>
                        </div>
                      </div>
                      <div className="input_box">
                        <input
                          type="password"
                          placeholder="Password"
                          required
                          onChange={(e) => setSPassword(e.target.value)}
                        />
                        <div className="icon">
                          <i className="fas fa-lock"></i>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <div className="input_box button">
                        <input
                          type="submit"
                          value="SignUp"
                          onClick={handleSignUp}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
