import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import styles from "../../styles";
import Dropdown from "../Dropdown";
import Menu from "./Menu";

export default function Navbar() {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const loggedIn = auth.user !== null && auth.token !== "" && auth.refreshToken !== "";
  const logout = () => {
    setAuth({ user: null, token: "", refreshToken: "" });
    localStorage.removeItem("auth");
    navigate("/");
  };
  return (
    <nav>
      <div className={`${styles.flexCenter} py-4 border-b-2`}>
        <div
          className={`md:py-3 py-2 px-2 mx-4 ${styles.boxWidth} flex items-center justify-between`}>
          <Link to={"/"}>
            <img className="h-12 flex items-center justify-center" src="/icon-rev.png" alt="" />
          </Link>
          <div className={`${styles.flexCenter} gap-4 font-medium text-color2 text-lg`}>
            <NavLink className={`px-4 py-1 hover:underline`} to="/">
              Home
            </NavLink>
            <NavLink className={`px-4 py-1 hover:underline`} to="/profile">
              Profile
            </NavLink>
            {!loggedIn ? (
              <Link
                to={"/login"}
                className={`relative ${styles.flexCenter} outline-none text-base shadow-md text-color1 bg-gray-700 py-1 px-6 rounded-md hover:shadow-xl hover:underline`}>
                Login
              </Link>
            ) : (
              <Dropdown loggedIn={loggedIn} logout={logout} />
            )}
          </div>
        </div>
      </div>
      {!loggedIn ? "" : <Menu />}
    </nav>
  );
}
