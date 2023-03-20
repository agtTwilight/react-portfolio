import React from 'react'
import Project from "../../components/ProjectCard"
import "./style.css"
import placeholder from "./assests/placeholder.png"
import wow from "./assests/wow.png"
import gitgood from "./assests/gitgood.png"

export const Portfolio = () => {
  return (
    <section id='portfolio' className='wrap'>
      <hr></hr>
      <section id='cardContainer'>
        <Project
          src={placeholder}
          title={"Project 3..."}
        />
        <Project
          src={gitgood}
          title={"Git Good"}
          href = {"https://github.com/agtTwilight/git-good"}
        />
        <Project
          src={wow}
          title={"WOW"}
          href="https://github.com/agtTwilight/project-2"
        />
        <Project
          src={placeholder}
          title={"placholder"}
        />
        <Project
          src={placeholder}
          title={"placholder"}
        />
        <Project
          src={placeholder}
          title={"placholder"}
        />
      </section>
    </section>
  )
}

export default Portfolio
