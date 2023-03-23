import { React, useState, useEffect } from 'react'
import "./style.css"
import resume from "./assets/resume.pdf"

export const Header = () => {
    const [location, setLocation] = useState("")

    useEffect(() => {
        const hrefStr = window.location.href.split("/")[3]
        if (hrefStr) {
            setLocation(hrefStr[0].toUpperCase() + hrefStr.slice(1))
        }
    }, [window.location.href])

    function displaySmallNav() {
        const nav = document.querySelector("#smallNav")
        nav.setAttribute("style", "transform: translateX(0);")
    }
    function hideSmallNav() {
        const nav = document.querySelector("#smallNav")
        nav.setAttribute("style", "transform: translateX(100%);")
    }

    return (
        <header id='header'>
            <p>{location}</p>
            <nav className='largeFeature' id='largeNav'>
                <a id='contactLink' href='/'><span className='header-span'>01:</span> About</a>
                <a id='contactLink' href='/portfolio'><span className='header-span'>02:</span> Portfolio</a>
                <a id='contactLink' href='/contact'><span className='header-span'>03:</span> Connect</a>
                <a id='contactLink' className='resumeBtn' href={resume} target='_blank' rel='noreferrer'>Resume</a>
            </nav>
            <button id='navBtn' className='smallFeature' onClick={displaySmallNav}>=</button>
            <nav className='smallFeature' id='smallNav'>
                <button onClick={hideSmallNav}>X</button>
                <a className='forestgreen' id='contactLink' href='/'><span className='header-span'>01:</span> About</a>
                <a className='forestgreen' id='contactLink' href='/portfolio'><span className='header-span'>02:</span> Portfolio</a>
                <a className='forestgreen' id='contactLink' href='/contact'><span className='header-span'>03:</span> Connect</a>
                <a id='contactLink' className='resumeBtn' href={resume} target='_blank' rel='noreferrer'>Resume</a>
            </nav>
        </header>
    )
}

export default Header