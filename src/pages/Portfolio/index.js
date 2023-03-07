import React from 'react'
import Project from "../../components/Project"
import "./style.css"
import gitgood from "./assests/gitgood.png"
import wow from "./assests/wow.png"

export const Portfolio = () => {
  return (
    <div id='projects'>
    <Project
    image = {wow}
    title = "World of Wordcraft"
    description = "A text based adventure game using a mysql database"
    view = "https://world-of-wordcraft.herokuapp.com/"
    repo = "https://github.com/agtTwilight/project-2"
    />
        <Project
    image = {gitgood}
    title = "GitGood"
    description = "A strategy lane based card game"
    view = "https://sprocketcreations.github.io/git-good/arena/"
    repo = "https://github.com/agtTwilight/git-good"
    />
    </div>
  )
}

export default Portfolio
