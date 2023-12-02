import React from "react";
import { NavbarConent } from "../css/NavbarCss";
import { getAuth, signOut } from "firebase/auth";
// import useNavigate to navigate to a specific route using react router dom
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.data?.data);
  console.log("userData", userData);
  const handleSignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <NavbarConent>
        <h2>NewsRinging</h2>
        <div>
          <p onClick={handleSignOut}>LogOut</p>
          <p>{userData != undefined ? userData : "Akshay Pawle"}</p>
        </div>
      </NavbarConent>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
