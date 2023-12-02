// import useState hook from react
import React from "react";
// used styled-component to style elements import styles for Login Component
import { SignInBodyContainer, SignInContainer } from "../css/LoginCss";
// sign in with email and password - import signInWithEmailAndPassword from firebase
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
// import useNavigate to navigate to a specific route using react router dom
import { useNavigate } from "react-router-dom";
// using link tag it can redirect to a route on Click works as a Link
import { Link } from "react-router-dom";
// import toster function
// import { createToast } from "../tosterMessages/static_tosterMsg";
import { useDispatch } from "react-redux";

// login to user account
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // handle submit when user tries to submit the login form
  async function handleSubmit(e) {
    e.preventDefault();
    // get entered email and password
    const email = e.target[0].value;
    const password = e.target[1].value;

    // Authenticate user Account using email and password
    try {
      const auth = getAuth();

      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch({ type: "SET_USER", payload: user });
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } catch (error) {
      //   createToast("error", error.code);
    }
  }

  return (
    <>
      {/* usig styled componet styling for login page */}
      <SignInBodyContainer>
        <SignInContainer>
          <h2>LOG IN</h2>
          {/* login form to login to user account */}
          <form onSubmit={handleSubmit}>
            {/* enter email */}
            <div>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            {/* enter password to login */}
            <div>
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <button type="submit">Login In</button>
            </div>
          </form>
          {/* if not register sign up */}
          <p>
            Not Register ?
            <span>
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </SignInContainer>
      </SignInBodyContainer>
    </>
  );
}

export default Login;
