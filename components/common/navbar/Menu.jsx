import React from "react";
import styles from "../../styles";
import { Link, NavLink } from "react-router-dom";
import Category from "../Ad/Category";

export default function Menu() {
  return (
    <div className={`flex-col ${styles.flexCenter} my-5`}>
      <div className={`${styles.boxWidth} `}>
        <div className="flex items-center gap-10 text-lg font-medium text-color2 h-16 px-4 rounded-md border bg-color1">
          <NavLink to="/dashboard" className="px-4 py-1  hover:text-blue-700">
            Dashboard
          </NavLink>
          <NavLink to="/create" className="px-4 py-1  hover:text-blue-700">
            Create
          </NavLink>
        </div>
      </div>
    </div>
  );
}
