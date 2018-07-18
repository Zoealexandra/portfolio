import React from 'react'

let avatarImage = require('/images/avatar.png')

const Intro = () => (
  <div className='intro'>
    <div className=''>
    <h3>About Me</h3>
      <div className='avatar'>
        <img src={avatarImage} alt='avatar image'/>
      </div>
      <div className='intro-text'>
        <p>Initially I trained with a background in Information Systems and Accounting, and chose to retrain as a developer, to immerse myself in an industry that provided better challenges and growth. I’ve practically applied my knowledge during my time retraining at Enspiral Dev Academy, through a number of group projects, including a final project with a real-life application that has a positive social impact. People would describe me as driven and resilient, as well as hard-working and reliable.</p>
      </div>
    </div>
  </div>
)


export default Intro