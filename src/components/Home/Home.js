import React, { Component } from "react";

//Media
import guitar from "../../pictures/prsbw.png";
//Style
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="page1">
        <div className="page1cont">
          <h1>Cameron Nye</h1>
          <h4>Software Engineer</h4>
        </div>
        <img className="guitar" src={guitar} alt="" />
      </div>
    );
  }
}
