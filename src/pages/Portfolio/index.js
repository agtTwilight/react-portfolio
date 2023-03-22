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
          index={index}
          src = {project.src}
          title = {project.title}
          role = {project.role}
          about = {project.about}
          highlight = {project.highlight}
          utils = {project.utils}
          demoData={project.demo}
          />
        ))}
      </section>
    </section>
  )
}

export default Portfolio
