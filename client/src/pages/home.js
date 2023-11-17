import React from 'react';
import { NavLink } from 'react-router-dom';

import Shapes from '../components/shapes.js';
import './home.css';

export default function Home() {
  return (
    <div>
      <div className='main' data-aos='fade-up'>
        <Shapes />
        <div className='left'>
          <h1 className='title'>Jayway</h1>
          <h2 className='title'>Your automated course compass</h2>
          <NavLink to='/app'>
            <button className='app'>Start</button>
          </NavLink>
        </div>
        <img className='logo' src='images/logo.png' alt='logo'></img>
      </div>
      <div className='featurelist'>
        <div className='feature' data-aos='fade-left'>
          <i className='bi-pencil-square feature'></i>
          <h1 className='feature'>Describe your ideal course</h1>
          <p className='feature'>
          Using generative AI, our model will automatically iterate through thousands of JHU courses to find your match
          </p>
        </div>
        <div className='feature' data-aos='fade-up'>
          <i className='bi-sort-up-alt feature'></i>
          <h1 className='feature'>Filter through your interests</h1>
          <p className='feature'>
            Narrow your options based on a variety of factors, such as reputation, difficulty, workload, and year
          </p>
        </div>
        <div className='feature' data-aos='fade-right'>
          <i className='bi-check-circle feature'></i>
          <h1 className='feature'>Get your new schedule</h1>
          <p className='feature'>
            No more time wasted sifting through countless course descriptions and professor evaluations
          </p>
        </div>
      </div>
    </div>
  )
}