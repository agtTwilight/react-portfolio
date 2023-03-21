import { React, useState, useEffect } from 'react'
import './style.css'

export const DemoFooter = (props) => {
    const [footer, setFooter] = useState([])

    useEffect(() => {
        setFooter(makeDemoFooter())
    }, [])

    function makeDemoFooter() {
        const arr = []
        for (let i = 0; i < props.num; i++) {
            if (i === 0) {
                arr.push(<p className='demo-progress-bar progress-on' id={`project${props.index}-${i}`}></p>)
            } else {
                arr.push(<p className='demo-progress-bar' id={`project${props.index}-${i}`}></p>)
            }
        }
        return arr
    }
    return (
        <div className='demoFooter'>
                <p className='demoArrow'>←</p>
                {footer}
                <p className='demoArrow'>→</p>
            </div>
    )
}

export default DemoFooter