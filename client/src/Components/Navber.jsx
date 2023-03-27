import React from "react";
import { Link } from "react-router-dom";

export default function Navber() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ShowData">ShowData</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
