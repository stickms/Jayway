import React from 'react';

import 'animate.css';
import './team.css';

export default function Team() {
  return (
    <div>
      <div className='teamheader' data-aos='fade-up' data-aos-once='true'>
        <header className='teamheader'>
          Core Team
        </header>
        <p className='teamheader'>
          The Jayway Project
        </p>
      </div>
      <div className='team' data-aos='fade-up' data-aos-once='true'>
        <div className='member'>
          <img className='member' src='images/logo.png' alt='drake'></img>
          <h1 className='name'>Ahmad Tabbara</h1> 
          <h2 className='role'>CEO</h2>
          <div className='socials'>
            <a href='https://github.com/stickms'><i className='bi-github socials'></i></a>
            <a href='https://github.com/stickms'><i className='bi-linkedin socials'></i></a>
          </div>
        </div>
        <div className='member'>
          <img className='member' src='images/logo.png' alt='drake'></img>
          <h1 className='name'>Pranav Gadiraju</h1> 
          <h2 className='role'>COO</h2>
          <div className='socials'>
            <a href='https://github.com/stickms'><i className='bi-github socials'></i></a>
            <a href='https://github.com/stickms'><i className='bi-linkedin socials'></i></a>
          </div>
        </div>
        <div className='member'>
          <img className='member' src='images/logo.png' alt='drake'></img>
          <h1 className='name'>Mahmoud Said</h1> 
          <h2 className='role'>CTO</h2>
          <div className='socials'>
            <a href='https://github.com/stickms'><i className='bi-github socials'></i></a>
            <a href='https://github.com/stickms'><i className='bi-linkedin socials'></i></a>
          </div>
        </div>
        <div className='member'>
          <img className='member' src='images/logo.png' alt='drake'></img>
          <h1 className='name'>Mohamad Siam</h1> 
          <h2 className='role'>CIO</h2>
          <div className='socials'>
            <a href='https://github.com/stickms'><i className='bi-github socials'></i></a>
            <a href='https://github.com/stickms'><i className='bi-linkedin socials'></i></a>
          </div>
        </div>
        <div className='member'>
          <img className='member' src='images/logo.png' alt='drake'></img>
          <h1 className='name'>Tarik Metin</h1> 
          <h2 className='role'>CPO</h2>
          <div className='socials'>
            <a href='https://github.com/stickms'><i className='bi-github socials'></i></a>
            <a href='https://github.com/stickms'><i className='bi-linkedin socials'></i></a>
          </div>
        </div>
      </div>

      {/* Section for additional helpers */}
      <div className='teamheader' data-aos='fade-up' data-aos-once='true'>
        <header className='teamheader'>
          Our Help
        </header>
        <p className='teamheader'>
          Making Jayway Better
        </p>
      </div>
      <div className='team' data-aos='fade-up' data-aos-once='true'>
        <div className='member'>
          <img className='member' src='images/logo.png' alt='drake'></img>
          <h1 className='name'>helper guy</h1> 
          <h2 className='role'>Backend</h2>
          <div className='socials'>
            <a href='https://github.com/stickms'><i className='bi-github socials'></i></a>
            <a href='https://github.com/stickms'><i className='bi-linkedin socials'></i></a>
          </div>
        </div>
      </div>

      {/* Join us */}

      <div className='teamheader' data-aos='fade-up' data-aos-once='true'>
        <header className='teamheader'>
          Join Jayway
        </header>
        <p className='teamheader'>
          Contact us at <a className='email' href='mailto:jaywayjhu@gmail.com?Subject=Jayway%20Project%20Interest'>jaywayjhu@gmail.com</a>
        </p>
      </div>
    </div>
  )
}