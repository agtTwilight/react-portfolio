import { React, useState, useEffect } from 'react'
import './style.css'

export const DemoFooter = (props) => {
    const [footer, setFooter] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setFooter(makeDemoFooter())
    }, [])

    function makeDemoFooter() {
        const arr = []
        for (let i = 0; i < props.num; i++) {
            if (i === 0) {
                arr.push(<p className='demo-progress-bar progress-on' id={`projectFooter${props.index}-${i}`} key={i} onClick={jumpToSelected}></p>)
            } else {
                arr.push(<p className='demo-progress-bar' id={`projectFooter${props.index}-${i}`} key={i} onClick={jumpToSelected}></p>)
            }
        }
        return arr
    }

    function fillFooter(num) {
        for (let i = 1; i < num + 1; i++) {
            document.querySelector(`#projectFooter${props.index}-${i}`).classList.add("progress-on")
        }
    }

    function removeFooterFill() {
        document.querySelector(`#projectFooter${props.index}-${currentIndex}`).classList.remove("progress-on")
    }

    function showNext(e) {
        if (currentIndex !== props.num - 1) {
            const currentDisplay = document.querySelector(`#project${props.index}-${currentIndex}`)
            const nextDisplay = document.querySelector(`#project${props.index}-${currentIndex + 1}`)

            currentDisplay.classList.remove("display");
            currentDisplay.classList.add("displayNone")
            nextDisplay.classList.remove("displayNone");
            nextDisplay.classList.add("display")

            setCurrentIndex(currentIndex + 1)
            fillFooter(currentIndex + 1)
        }
    }

    function showPrevious(e) {
        if (currentIndex !== 0) {
            const currentDisplay = document.querySelector(`#project${props.index}-${currentIndex}`)
            const previousDisplay = document.querySelector(`#project${props.index}-${currentIndex - 1}`)

            currentDisplay.classList.remove("display");
            currentDisplay.classList.add("displayNone")
            previousDisplay.classList.remove("displayNone");
            previousDisplay.classList.add("display")

            removeFooterFill();
            setCurrentIndex(currentIndex - 1)
        }
    }

    function jumpToSelected(e) {
        const indexTo =  e.target.id.split("-")[1]

        const currentDisplay = document.querySelector(`#project${props.index}-${currentIndex}`)
        const displayTo = document.querySelector(`#project${props.index}-${indexTo}`)

        // currentDisplay.classList.remove("display");
        // currentDisplay.classList.add("displayNone");
        // displayTo.classList.remove("displayNone");
        // displayTo.classList.add("display");
    }

    return (
        <div className='demoFooter'>
            <p className='demoArrow' onClick={showPrevious}>←</p>
            {footer}
            <p className='demoArrow' onClick={showNext}>→</p>
        </div>
    )
}

export default DemoFooter