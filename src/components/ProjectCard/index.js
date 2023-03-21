import React from 'react'
import "./style.css"
import ProjectDemo from '../ProjectDemo'

export const Project = (props) => {
        return (
                <section className='projectWrap' key={props.key}>
                        <section className='projectCard'>
                                <section className='projectBrief'>
                                        <div className='projectHeader'>
                                                <img className='projectImg' src={props.src}></img>
                                                <h2 className='projectName'>{props.title}</h2>
                                        </div>
                                        <p className='projectAbout'>{props.about}</p>
                                        <div className='projectFooter'>
                                                <hr></hr>
                                                <p className='projectUtils'>{props.utils}</p>
                                        </div>
                                </section>
                                <section className='projectDemo'>
                                        <ProjectDemo
                                        demoData = {props.demoData}
                                        numSlides = {props.demoData.length}
                                        />
                                </section>
                        </section>
                </section>
        )
}

export default Project
