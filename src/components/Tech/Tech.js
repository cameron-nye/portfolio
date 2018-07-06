import React, { Component } from "react";
//pictures
import js from '../../pictures/javascript.svg'
import react from '../../pictures/react.svg'
import redux from '../../pictures/redux.svg'
import node from '../../pictures/nodejs.png'
import sql from '../../pictures/postgresql.svg'
import express from '../../pictures/express.png'
import html from '../../pictures/html5.svg'
import css from '../../pictures/css.svg'
import api from '../../pictures/api.svg'
import auth from '../../pictures/auth.png'
import git from '../../pictures/git.svg'
import jest from '../../pictures/jest.svg'
//style
import './Tech.css'

export default class Tech extends Component {
  render() {
    return (
      <div className="page2">
        <div className="page2cont">
          <section>
            <h2>Technologies</h2>
            <div className="techstack">
              <div className="square"><img className='techimg'src={js} alt=""/><h5>Javascript ES6</h5></div>
              <div className="square"><img className='techimg' src={react} alt=""/><h5>React</h5></div>
              <div className="square"><img className='techimg' src={redux} alt=""/><h5>Redux</h5></div>
              <div className="square"><img  className='techimg' src={node} alt=""/><h5>NodeJS</h5></div>
              <div className="square"><img className='techimg' src={express} alt=""/><h5>Express</h5></div>
              <div className="square"><img className='techimg' src={sql} alt=""/><h5>PostgreSQL</h5></div>
              <div className="square"><img className='techimg' src={html} alt=""/><h5>HTML5</h5></div>
              <div className="square"><img className='techimg' src={css} alt=""/><h5>CSS3</h5></div>
              <div className="square"><img className='techimg' src={api} alt=""/><h5>RESTful API</h5></div>
              <div className="square"><img className='techimg' src={auth} alt=""/><h5>Auth0</h5></div>
              <div className="square"><img className='techimg' src={git} alt=""/><h5>Git</h5></div>
              <div className="square"><img className='techimg' src={jest} alt=""/><h5>Jest</h5></div>
            </div>
          </section>
        </div>  
      </div>
    );
  }
}
