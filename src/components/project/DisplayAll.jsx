import React from "react";
//import Navbar from "../../Navbar";
import Project from "./project";
import img from "./images/img.jpeg";
import Button from "../Button";

function DisplayAll() {
  return (
    <div>
      <div className="display">
        <Project
          image1={<img src={img} width="200px" alt="img" />}
          image2={<img src={img} width="200px" alt="img" />}
          projectName={"DartInterview App "}
          githubLink={"just this for now"}
          btn={<Button name={"view"} />}
        />
        <Project
          image1={<img src={img} width="200px" alt="img" />}
          image2={<img src={img} width="200px" alt="img" />}
          projectName={"DartInterview App "}
          githubLink={"just this for now"}
          btn={<Button name={"view"} />}
        />
      </div>
    </div>
  );
}

export default DisplayAll;
