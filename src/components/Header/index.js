import { React, useState, useEffect } from 'react'
import "./style.css"
import resume from "./assets/resume.pdf"
import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"

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
                <section id='smallSocials'>
                    <a href='https://github.com/agtTwilight' target="_blank" rel="noreferrer"><img src={github} alt="The github icon" class="footer-icon"></img></a>
                    <a href="https://www.linkedin.com/in/lukas-macmillen-03b2681b2/" target="_blank" rel="noreferrer"><img src={linkedin} alt="The linkedin icon" class="footer-icon"></img></a>
                </section>
            </nav>
        </header>
    )
}

export default Header