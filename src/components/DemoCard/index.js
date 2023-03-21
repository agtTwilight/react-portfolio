import { React, useState, useEffect } from 'react'
import './style.css'

export const DemoCard = (props) => {
    const { demo, setDemo } = useState(null)
    const { display, setDisplay } = useState("display")
    const { displayNone, setDisplayNone } = useState("displayNone")

    useEffect(() => {
        setDemo(makeDemoCard())
    }, [])

    function makeDemoCard() {
        if (props.index === 0) {
            return <section className={display} key={props.key} id={`${props.title}-${props.key}`}>
                <img className='demoImg' src={props.src}></img>
                <div className='demoBody'>
                    <h2 className='demoTitle'>{props.title}</h2>
                    <p className='demoAbout'>{props.about}</p>
                </div>
            </section>
        } else {
            return <section className={displayNone} key={props.key} id={`${props.title}-${props.index}`}>
                <img className='demoImg' src={props.src}></img>
                <div className='demoBody'>
                    <h2 className='demoTitle'>{props.title}</h2>
                    <p className='demoAbout'>{props.about}</p>
                </div>
            </section>
        }
    }

    return (
        {demo}
        )
}

export default DemoCard
