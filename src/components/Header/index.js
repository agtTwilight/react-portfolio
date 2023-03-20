import {React, useState, useEffect} from 'react'
import "./style.css"

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
                        <a id='contactLink' href='/resume'><span className='header-span'>03:</span> Resume</a>
                        <a id='contactLink' href='/contact'><span className='header-span'>04:</span> Connect</a>
                </div>
        </header>
  )
}

export default Header