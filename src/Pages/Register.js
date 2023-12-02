import React from "react";
// used styled-component to style elements import styles for Login Component
import { SignUpBodyContainer, SignUpConatiner } from "../css/RegisterCss";
// sign up entering email and password - import createUserWithEmailAndPassword and updateProfile from firebase
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
// import useNavigate to navigate to a specific route using react router dom
import { useNavigate } from "react-router-dom";
// using link tag it can redirect to a route on Click works as a Link
import { Link } from "react-router-dom";
// import toster function
// import { createToast } from "../tosterMessages/static_tosterMsg";
// import "../loader/loader.css";
// Sign up and setup new user Account
function Register() {
  const navigate = useNavigate();

  // function hideLoader() {
  //   document.getElementById("loader_Container").style.display = "none";
  // }

  // handle submit when user tries to submit the login form
  async function handleSubmit(e) {
    e.preventDefault();
    // document.getElementById("loader_Container").style.display = "block";
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log(displayName, email, password);

    try {
      const auth = getAuth();

      await createUserWithEmailAndPassword(auth, email, password).then(
        async (userCredential) => {
          // update profile with name and photo URL
          await updateProfile(userCredential.user, {
            displayName,
          });

          // CREATE NEW USER DOCUMENT
          await setDoc(doc(db, "users", userCredential.user.uid), {
            uid: userCredential.user.uid,
            displayName,
            email,
          });

          console.log(userCredential.user);
          navigate("/");
        }
      );
    } catch (error) {
      console.log("error.code", error.code);
      if (error.code === "auth/email-already-in-use") {
        // createToast("error", "user aready exist with this email id");
        navigate("/login");
      }
      // else {
      //   // createToast("error", error.code);
      // }
    }
  }

  return (
    <>
      <div style={{ display: "none" }} id="loader_Container">
        <div id="loader"></div>
      </div>
      {/* <div style={{ display: "none" }} id="myDiv" className="animate-bottom"> */}
      <SignUpBodyContainer>
        <SignUpConatiner>
          <h2>SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            {/* enter name */}
            <div>
              <div>
                <label htmlFor="name">Name</label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* enter email */}
            <div>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="abc@email.com"
                required
              />
            </div>
            {/* enter password */}
            <div>
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <input type="password" id="password" name="password" required />
            </div>
            <div>
              <button type="submit">Sign up</button>
            </div>
            {/* if register login in */}
            <p>
              Registered ?
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </form>
        </SignUpConatiner>
      </SignUpBodyContainer>
      {/* </div> */}
    </>
  );
}

export default Register;
