import React from 'react'
import "./style.css"

export const Project = (props) => {
        return (
                <>
                        <article class="card">
                                <img src={props.image} alt="A placeholder image for future projects to populate. The placeholder image is another avatar for Lukas. Here it is him in a home garden with a cat."></img>
                                        <div class="card-details">
                                                <h3>{props.title}</h3>
                                                <p>{props.description}</p>
                                                <div class="card-buttons">
                                                        <a href={props.view} target="_blank" rel="noreferrer"><button type="button">View</button></a>
                                                        <a href={props.repo} target="_blank" rel="noreferrer"><button type="button">REPO</button></a>
                                                </div>
                                        </div>
                        </article>
                </>
        )
}

export default Project
