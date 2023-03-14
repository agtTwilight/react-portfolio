import React from 'react'
import "./style.css"

export const Project = (props) => {
        return (
                <a className='' href={props.href} target="_blank">
                        <section class="projectCard hoverGlow">
                                <img className='projectImg' src={props.src} alt=""/>
                                <h3 className='cardTitle'>{props.title}</h3>
                        </section>
                </a>
        )
}

export default Project
