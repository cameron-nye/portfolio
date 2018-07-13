import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import "./reset.css";
import "./App.css";

//Components
// import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Tech from "./components/Tech/Tech";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from './components/Contact/Contact'
//Media
import githublogo from "../src/pictures/github.png";
import linkedinlogo from "../src/pictures/linkedin.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: true
    };
  }
  toggleMenuFn() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  scrollToHome() {
    let scrollHome = document.getElementById("scrollhome");
    scrollHome.scrollIntoView()
    this.toggleMenuFn();
  }
  scrollToHome1() {
    let scrollHome = document.getElementById("scrollhome");
    scrollHome.scrollIntoView()
  }
  scrollToTechnologies() {
    let scrollTech = document.getElementById("scrolltech");
    scrollTech.scrollIntoView();
    this.toggleMenuFn();
  }
  scrollToProjects() {
    let scrollProjects = document.getElementById("scrollprojects");
    scrollProjects.scrollIntoView();
    this.toggleMenuFn();
  }
  scrollToAbout() {
    let scrollAbout = document.getElementById("scrollabout");
    scrollAbout.scrollIntoView();
    this.toggleMenuFn();
  }
  scrollToContact() {
    let scrollContact = document.getElementById("scrollcontact");
    scrollContact.scrollIntoView();
    this.toggleMenuFn();
  }

  render() {
    library.add(faAngleDown)
      return (
        <div className="App" >
          <div className="navMain">
            <div className="leftnav">
              <h3 onClick={() => this.scrollToHome1()}>csn</h3>
            </div>
            <div className="rightnav">
              <div className="hamMenu" onClick={() => this.toggleMenuFn()}>
                <span
                  className={
                    this.state.toggleMenu ? "line line01" : "line line01closed"
                  }
                />
                <span
                  className={
                    this.state.toggleMenu ? "line line02" : "line line03closed"
                  }
                />
                <span
                  className={
                    this.state.toggleMenu ? "line line03" : "line line03closed"
                  }
                />
              </div>
              <div
                className={!this.state.toggleMenu ? "dropdown" : "hideDropdown"}
              >
                <ul>
                  <li onClick={() => this.scrollToHome()} className="li1">
                    Home
                  </li>
                  <li
                    onClick={() => this.scrollToTechnologies()} className="li2">
                    Technologies
                  </li>
                  <li onClick={() => this.scrollToProjects()} className="li3">
                    Projects
                  </li>
                  <li onClick={() => this.scrollToAbout()} className="li4">
                    About Me
                  </li>
                  <li onClick={() => this.scrollToContact()} className='li5'>
                    Contact
                  </li>
                  <div>
                    <a href="https://github.com/csnye86">
                      <img className="social" src={githublogo} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/cameronnye/">
                      <img className="social" src={linkedinlogo} alt="" />
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className={this.state.toggleMenu ? "body" : "hide"}>
            <div id="scrollhome">
              <Home />
            </div>
            <div id="scrolltech">
              <Tech />
            </div>
            <div id="scrollprojects">
              <Projects />
            </div>
            <div id="scrollabout">
              <About />
            </div>
            <div id='scrollcontact'>
              <Contact />
            </div>
          </div>
        </div>
      );
    }
  }


export default App;
