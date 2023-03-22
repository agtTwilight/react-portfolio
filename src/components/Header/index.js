import {React, useState, useEffect} from 'react'
import "./style.css"
import resume from "./assets/resume.pdf"

export const Header = () => {
        const [location, setLocation] = useState("")

        useEffect(() => {
                const hrefStr = window.location.href.split("/")[3]
                if(hrefStr) {
                        setLocation(hrefStr[0].toUpperCase() + hrefStr.slice(1))
                }
        }, [window.location.href])
  return (
        <header id='header'>
                <p>{location}</p>
                <div>
                        <a id='contactLink' href='/'><span className='header-span'>01:</span> About</a>
                        <a id='contactLink' href='/portfolio'><span className='header-span'>02:</span> Portfolio</a>
                        <a id='contactLink' href='/contact'><span className='header-span'>03:</span> Connect</a>
                        <a id='contactLink' className='resumeBtn' href={resume} target='_blank'>Resume</a>
                </div>
        </header>
  )
}

export default Header