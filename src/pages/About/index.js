import React from 'react'
import "./style.css"

export const About = () => {
  return (
    <div className='wrap'>
      <p className='pistachio'>{"Hello, my name is"}</p>
      <h1>{"Lukas MacMillen"}</h1>
      <h1>{"I Develop Interactive UX & Their Databases"}</h1>
      <p>{"I am a Seattle-based software developer open to work with any layer of the tech stack. I prefer working in teams following an agile development process, and my ideal position would have me working as a full-stack developer with an emphasis on the back-end. Currently I am most profecient with JavaScript (inlcuding React.js & Node.js), MongoDb, and mySQL databases, but I have previous experience with MATLAB, Python and R, and I am confident in my abilities to learn new tools and contribute to any team!"}
      </p>
      <a id='portfolio-anchor' href='/projects'>{"See my work -->"}</a>
    </div>
  )
}

export default About