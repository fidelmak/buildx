import React from "react";

import {
  Link,
  outlet,
  Route,
  Routes,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import DisplayAll from "../components/project/DisplayAll";

function Navbar() {
  return (
    <div className="nav">
      {/* <Link path="/display" element={<DisplayAll />}>
        <h1>project</h1>
      </Link> */}

      <h1> Blog </h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <h1>Project</h1>

      <outlet />
    </div>
  );
}
export default Navbar;
