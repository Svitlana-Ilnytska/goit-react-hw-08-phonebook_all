import React from "react";
import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.main_nav}>
      <NavLink
        exact
        to="/"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/register"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Log In
      </NavLink>
    </nav>
  );
}