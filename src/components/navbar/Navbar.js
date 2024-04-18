import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../../context/themeSlice";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function Navbar() {
  const users = useSelector((s) => s.users.value);
  const dispatch = useDispatch();
  let theme = useSelector((s) => s.theme.value);

  return (
    <div className="navbar">
      <h2>Redux Toolkit</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create user</NavLink>
      <NavLink to={"/all-users"}>
        All users <sup>{users.length}</sup>
      </NavLink>
      <button className="mode" onClick={() => dispatch(toggleMode())}>
        {theme ? (
          <IoSunnyOutline className="light__icon" />
        ) : (
          <IoMoonOutline className="dark__icon" />
        )}
      </button>
    </div>
  );
}

export default Navbar;
