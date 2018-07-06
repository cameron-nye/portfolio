import React, { Component } from 'react'


export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      toggleMenu: true
    };
  }
  toggleMenuFn() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }
  render() {
    return (
      <div>
        <div className="navMain">
          <div className="leftnav">
            <h3>csn</h3>
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
            <div className={ !this.state.toggleMenu ? "dropdown": 'hideDropdown'}>
              <ul>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About Me</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
