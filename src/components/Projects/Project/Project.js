import React, { Component } from "react";
// import Coverflow from "react-coverflow";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

//Style
import "./Project.css";

//Material Carousel

const styles = theme => ({
  root: {
    maxWidth: 900,
    flexGrow: 1,
    margin: "auto"
  },
  img: {
    height: 550,
    maxWidth: 900,
    overflow: "hidden",
    width: "100%"
  }
});

class Project extends Component {
  constructor() {
    super();
    this.state = {
      toggleCarousel: false,
      activeStep: 0
    };
  }

  toggleFn() {
    this.setState({
      toggleCarousel: !this.state.toggleCarousel
    });
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const pics = [
      {
        // label: "MedTel Login",
        imgPath: this.props.image1
      },
      {
        // label: "Patient Dashboard",
        imgPath: this.props.image2
      },
      {
        // label: "Patient Dashboard",
        imgPath: this.props.image3
      },
      {
        // label: "3. Travel everytime that you have a chance",
        imgPath: this.props.image4
      }
    ];
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = pics.length;
    return (
      <div className="project">
        {this.state.toggleCarousel ? (
          <div className="carouselWrapper">
            {/* <div className="carousel"> */}
            {/* <div className="closeB" onClick={() => {this.toggleFn()}}><HighlightOff style={{height: 35, width: 35}}/></div> */}
            <div className={classes.root}>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={this.state.activeStep}
                onChangeIndex={this.handleStepChange}
                enableMouseEvents
              >
                {pics.map(step => (
                  <img
                    key={step.label}
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ))}
              </SwipeableViews>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                className={classes.mobileStepper}
                nextButton={
                  <Button
                    size="small"
                    onClick={this.handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={this.handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
              <div
                className="closeB"
                onClick={() => {
                  this.toggleFn();
                }}
              >
                Close
              </div>
            </div>
          </div>
        ) : (
          <div className="projOverview">
            <img src={this.props.image1} className="img" alt=''/>
            <div className="projTitle">
              <h2>{this.props.title}</h2>
              <h4>{this.props.desc}</h4>
            </div>
            <div className="hidden">
              <a href={this.props.link} className={this.props.underConstruction === true ? 'hideLinks' : null}>
                <h2 >Live Site</h2>
              </a>
              <div className="github">
              {this.props.underConstruction === true ? 
                  <div className='construction'>Currently in Development</div>
                :
                  <a href={this.props.github}>Github</a>
              }
              </div>
              <h2 onClick={() => {this.toggleFn()}} className={this.props.underConstruction === true ? 'hideLinks' : null}>
                Images
              </h2>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Project);
