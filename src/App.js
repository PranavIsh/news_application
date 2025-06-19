import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News />} />
        </Routes>
      </div>
    );
  }
}
