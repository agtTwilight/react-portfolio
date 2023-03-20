import React from 'react'
import "./style.css"
import ProjectDemo from '../ProjectDemo'

export const Project = (props) => {
        return (
                <section className='projectWrap'>
                        <section className='projectCard'>
                                <section className='projectBrief'>
                                        <div className='projectHeader'>
                                                <img className='projectImg' src={props.src}></img>
                                                <h2 className='projectName'>{props.title}</h2>
                                        </div>
                                        <p className='projectAbout'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                        <div className='projectFooter'>
                                                <hr></hr>
                                                <p className='projectUtils'>react.js | html | css | demo</p>
                                        </div>
                                </section>
                                <section className='projectDemo'>
                                        <ProjectDemo/>
                                </section>
                        </section>
                </section>
        )
}

export default Project
