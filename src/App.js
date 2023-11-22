import React, { Component } from "react";
import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Box } from "@mui/material";

import Exercise from "./components/Exercise";

import DisplayAll from "./components/project/DisplayAll";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" Component={Exercise} />
        <Route path="/display" Component={DisplayAll} />
      </div>
    </Router>
  );
};

export default App;
