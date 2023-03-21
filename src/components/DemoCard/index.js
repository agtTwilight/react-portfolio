import { React, useState, useEffect } from 'react'
import './style.css'

export const DemoCard = (props) => {
    // const { demo, setDemo } = useState(<></>)
    // const { display, setDisplay } = useState("display")
    // const { displayNone, setDisplayNone } = useState("displayNone")

    // useEffect(() => {
    //     setDemo(makeDemoCard())
    // }, [])

    function makeDemoCard(prop) {
        if (prop.demoIndex === 0) {
            return <section className='display' id={`project${prop.projectIndex}-${prop.demoIndex}`} key={props.demoindex}>
                <img className='demoImg' src={prop.src}></img>
                <div className='demoBody'>
                    <h2 className='demoTitle'>{prop.title}</h2>
                    <p className='demoAbout'>{prop.about}</p>
                </div>
            </section>
        } else {
            return <section className='displayNone' id={`project${prop.projectIndex}-${prop.demoIndex}`} key={props.demoindex}>
                <img className='demoImg' src={prop.src}></img>
                <div className='demoBody'>
                    <h2 className='demoTitle'>{prop.title}</h2>
                    <p className='demoAbout'>{prop.about}</p>
                </div>
            </section>
        }
    }

    return (
        <>
            {makeDemoCard(props)}
        </>
    )
}

export default DemoCard
