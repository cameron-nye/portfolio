import React, { Component } from 'react'
//Style
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="about">
          <div className="aboutHeader">
            About Me
          </div>
          <div className="aboutCont">
            {/* <div className="background"> */}
              <div className='aboutPic'></div>
              <div className='aboutPic'></div>
              <div className='aboutPic'></div>
              <div className='aboutPic'></div>
              <div className="aboutText">
                I am a registered Computed Tomography Technologist transitioning into a career in full-stack software engineering. My passion for technology and helping others carried me into a 10-year career in healthcare where I worked hands-on with cutting-edge technology and made a difference in thousands of lives. I now aspire to work in technology with a new lens - software development. 

                Beyond my strong development skillset, my experience in healthcare has armed me with effective leadership and communication skills and the ability to adapt and quickly learn new skills in an ever-changing work environment. 
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    )
  }
}
