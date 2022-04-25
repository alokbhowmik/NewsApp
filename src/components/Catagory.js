import React, { Component } from "react";

export default class Catagory extends Component {
  render() {
    return (
      <div className="container my-4">
        <div className="hstack gap-3">
          <div className="bg-light border  border-primary rounded-pill px-3">
            general
          </div>
          <div className="bg-light border rounded-pill px-3">business</div>
          <div className="bg-light border rounded-pill px-3">entertainment</div>
          <div className="bg-light border rounded-pill px-3">health</div>
          <div className="bg-light border rounded-pill px-3">science</div>
          <div className="bg-light border rounded-pill px-3">sports</div>
          <div className="bg-light border rounded-pill px-3">technology</div>
        </div>
      </div>
    );
  }
}
