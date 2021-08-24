import React from "react";
import { Link } from "react-router-dom";

import SelectOrder from "./SelectOrder";

const Navbar = ({ onOrderChange }) => (
  <nav className="nav">
    <div>
      <Link to="/">Home</Link>
    </div>
    <SelectOrder/>
  </nav>
);

export default Navbar;
