import React, { Component } from "react";

export default class Title extends Component {
  render() {
    let { title } = this.props;

    return <h2 className="h5">{title}</h2>;
  }
}
