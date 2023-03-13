import React from 'react'
import "./style.css"

export const Project = (props) => {
        return (
                <div className='col-md-4 col-sm-6'>
                        <section class="projectCard hoverGlow">
                                <img className='projectImg' src={props.src} alt=""/>
                                <h3 className='cardTitle'>{props.title}</h3>
                        </section>
                </div>
        )
}

export default Project
