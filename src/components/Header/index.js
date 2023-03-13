import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

export const Header = () => {
  return (
        <header id='header'>
                <h3>LUKAS MACMILLEN</h3>
                <div>
                        <a id='contactLink' href='/contact'>Contact Me!</a>
                </div>
        </header>
  )
}

export default Header