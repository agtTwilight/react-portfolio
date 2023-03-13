import React from 'react'
import Project from "../../components/Project"
import "./style.css"
import placeholder from "./assests/placeholder.png"

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1>Projects:</h1>
      <hr></hr>
      <section id='cardContainer'>
        <Project
          src={placeholder}
          title={"test title"}
        />
        <Project
          src={placeholder}
          title={"snickerdoodle"}
        />
        <Project
          src={placeholder}
          title={"cat dad"}
        />
        <Project
          src={placeholder}
          title={"cat dad"}
        />
        <Project
          src={placeholder}
          title={"cat dad"}
        />
        <Project
          src={placeholder}
          title={"cat dad"}
        />
      </section>
      <a id='about-anchor' href='/'>{"<-- About Me"}</a>
    </section>
  )
}

export default Portfolio
