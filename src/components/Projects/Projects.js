import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import Project from "./Project/Project";
//Media
import image1 from "./FitnessPics/Image1.png";
import image2 from "./FitnessPics/Image2.png";
import image3 from "./FitnessPics/Image3.png";
import image4 from "./FitnessPics/Image4.png";
import med1 from "./FitnessPics/med1.png";
import med2 from "./FitnessPics/med2.png";
import med3 from "./FitnessPics/med3.png";
import med4 from "./FitnessPics/med4.png";
//Style
import "./Projects.css";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          images: [med1, med2, med3, med4],
          title: "MedTel: Medical Charting",
          desc: "",
          link: "https://medtel.devmtn-projects.com/#/",
          github: 'https://github.com/CARSDev/MedTel'
        },
        {
          images: [image1, image2, image3, image4],
          title: "Athena Fitness",
          desc: "",
          link: "http://athenafitness.devmtn-projects.com/#/",
          github: 'https://github.com/csnye86/fitness-app'
        }
      ]
    };
  }

  render() {
    let projectList = this.state.projects.map((project, i) => {
      // console.log(project)
      return (
        <div key={project + i} className="projectCont">
          <Project
            title={project.title}
            desc={project.desc}
            image1={project.images[0]}
            image2={project.images[1]}
            image3={project.images[2]}
            image4={project.images[3]}
            link={project.link}
            github={project.github}
          />
          <FontAwesomeIcon icon="angle-down" id="arrowDown" />
        </div>
      );
    });

    return (
      <div className="projects">
        <div className="projectsHeader">Projects</div>
        <div className="projectsWrapper">{projectList}</div>
      </div>
    );
  }
}
