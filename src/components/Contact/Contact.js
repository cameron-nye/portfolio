import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import "typeface-ubuntu";

//STYLE
import "./Contact.css";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      sent: false
    };
  }

  inputHandler(e, property) {
    this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit() {
    let { name, email, message } = this.state;
    axios
      .post("/email", { name, email, message })
      .then(() => {
        this.setState({
          name: "",
          email: "",
          message: "",
          sent: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleSent() {
    this.setState({
      sent: false
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="contact">
        {this.state.sent ? (
          <div className="thanksWrapper">
            <div className="thanksCont">
              <h2 className='thanks'>Thank You!</h2>
              <h5 className='thanks'>I will respond shortly</h5>
            </div>
            <div className="button toggle" onClick={() => this.toggleSent()}>
                Send Another Message
              </div>
          </div>
        ) : (
          <div className="contactContainer">
            <h1 className="row1">
              Let's <span style={{ color: "lightgray" }}>get in</span> touch
            </h1>
            <div className="row2">
              <div className="name">
                <TextField
                  style={{ width: 200 }}
                  id="name"
                  label="What is your name?"
                  value={this.state.name}
                  onChange={e => {
                    this.inputHandler(e, "name");
                  }}
                  margin="normal"
                />
              </div>
              <div className="email">
                <TextField
                  style={{
                    width: 200
                  }}
                  id="email"
                  label="Your email"
                  value={this.state.email}
                  onChange={e => {
                    this.inputHandler(e, "email");
                  }}
                  margin="normal"
                />
              </div>
            </div>
            <div className="row3">
              <TextField
                // style={{ width: 500 }}
                fullWidth  
                id="message"
                label="How can I help you?"
                value={this.state.message}
                onChange={e => {
                  this.inputHandler(e, "message");
                }}
                margin="normal"
              />
            </div>
            <div className="row4">
              <div className="button" onClick={() => this.handleSubmit()}>
                Send
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
