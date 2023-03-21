import {React, useState, useEffect} from 'react'
import "./style.css"
import DemoCard from '../DemoCard'
import DemoFooter from '../DemoFooter'

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
                    <section className='demoContainer'>
                        {props.demoData.map((demo, index) => (
                            <DemoCard
                                key={index}
                                index={index}
                                src={demo.src}
                                title={demo.title}
                                about={demo.about}
                            />
                        ))}
                        <DemoFooter
                            num={props.demoData.length}
                            title={props.title}
                        />
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Project
