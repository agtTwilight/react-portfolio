import React from 'react'
import "./style.css"

export const About = () => {
  return (
    <div className='wrap about'>
      <p className='pistachio'>Hello, my name is</p>
      <h1>Lukas MacMillen</h1>
      <h2>I build API surfaces & data driven user experiences.</h2>
      <p className='aboutP'>I am a Seattle-based software engineer specializing in building detail-oriented user experiences with data driven design, and the API surfaces that bring function to my applications. I'm currently focused on the MERN stack, but have previous experience with MySQL, MATLAB, Python, and R. I am <strong>open to work</strong> in any layer of the tech stack, but would prefer a team rich with mentorship and following agile development practices.
      </p>
      <a id='portfolio-anchor' href='/portfolio'>See my work →</a>
    </div>
  )
}

export default About