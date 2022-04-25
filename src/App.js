import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import CatagoryList from "./components/CatagoryList";
import Router from "./components/Router";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}
