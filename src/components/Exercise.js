import React, { Component } from "react";
import img from "../assets/images/img.jpeg";
import Button from "./Button";
import Scroll from "./scrol";

class Exercise extends Component {
  render() {
    return (
      <div>
        <div>
          <center>
            <img src={img} width="200px" alt="img" />
            <h1>
              <Scroll />
            </h1>
            <p> check out what i am building </p>
            <Button name={"show"} />
          </center>
        </div>
      </div>
    );
  }
}

export default Exercise;
