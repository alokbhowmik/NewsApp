import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import News from "./News";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News />}></Route>
          <Route
            path="business"
            element={<News catagory="business" key="business" />}
            exact
          />
          <Route
            path="entertainment"
            element={<News catagory="entertainment" key="entertainment" />}
            exact
          />
          <Route
            path="general"
            element={<News catagory="general" key="general" />}
            exact
          />
          <Route
            path="health"
            element={<News catagory="health" key="health" />}
            exact
          />
          <Route
            path="science"
            element={<News catagory="science" key="science" />}
            exact
          />
          <Route
            path="sports"
            element={<News catagory="sports" key="sports" />}
            exact
          />
          <Route
            path="technology"
            element={<News catagory="technology" key="technology" />}
            exact
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
