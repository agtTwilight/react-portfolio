import React from 'react'
import "./style.css"

export const About = () => {
  return (
    <div className='wrap about'>
      <p className='pistachio'>{"Hello, my name is"}</p>
      <h1>{"Lukas MacMillen"}</h1>
      <h2>{"I build interactive user experiences"}</h2>
      <p className='aboutP'>I am a Seattle-based software engineer specializing in building user experiences and databases. I'm currently focused on the MERN stack, but have previous experience with MySQL, MATLAB, Python, and R. I am <u>open to work</u> in any layer of the tech stack, but would prefer a team rich with mentorship and following agile development practices.
      </p>
      <a id='portfolio-anchor' href='/portfolio'>See my work →</a>
    </div>
  )
}

export default About