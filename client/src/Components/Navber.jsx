import React from "react";
import { NavLink } from "react-router-dom";

export default function Navber() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{
                frontweight: "bold",
                color: "green",
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/ShowData"
              activeStyle={{
                frontweight: "bold",
                color: "green",
              }}
            >
              ShowData
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
