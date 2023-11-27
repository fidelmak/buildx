import React from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Routes,
} from "react-router-dom";
import { Box } from "@mui/material";

import Exercise from "./components/Exercise";
import DisplayAll from "./components/project/DisplayAll";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
