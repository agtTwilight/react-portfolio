import { React, useState, useEffect } from 'react'
import "./style.css"
import DemoCard from '../DemoCard'
import DemoFooter from '../DemoFooter'

export const Project = (props) => {
    return (
        <section className='projectWrap' key={props.index}>
            <section className='projectCard'>
                <section className='projectBrief'>
                    <div className='projectHeader'>
                        <img className='projectImg' src={props.src}></img>
                        <div className='projectNameRole'>
                            <h2 className='projectName'>{props.title}</h2>
                            <h3 className='projectRole'>{props.role}</h3>
                        </div>
                    </div>
                    <p className='projectAbout'>{props.about}</p>
                    <p className='projectHighlight'>{props.highlight}</p>
                    <div className='projectFooter'>
                        <hr></hr>
                        <p className='projectUtils'>{props.utils}</p>
                    </div>
                </section>
                <section className='projectDemo' id={`project${props.index}`}>
                    <section className='demoContainer'>
                        {props.demoData.map((demo, index) => (
                            <DemoCard
                                key={index}
                                demoIndex={index}
                                projectIndex={props.index}
                                src={demo.src}
                                title={demo.title}
                                about={demo.about}
                            />
                        ))}
                        <DemoFooter
                            key={props.index}
                            num={props.demoData.length}
                            index={props.index}
                        />
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Project
