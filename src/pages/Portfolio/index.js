import React from 'react'
import Project from "../../components/ProjectCard"
import "./style.css"
import projectData from "./projectData"

export const Portfolio = () => {
  return (
    <section id='portfolio' className='wrap'>
      <hr></hr>
      <section id='cardContainer'>
        {projectData.map((project, index) => (
          <Project
          key={index}
          src = {project.src}
          title = {project.title}
          about = {project.about}
          utils = {project.utils}
          demoData = {project.demo}
          />
        ))}
      </section>
    </section>
  )
}

export default Portfolio
