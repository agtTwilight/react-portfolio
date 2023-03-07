import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

export const Header = () => {
  return (
        <header id='header'>
                <h3>Lukas MacMillen</h3>
                <div>
                        <a href='/'>Let's Connect</a>
                </div>
        </header>
  )
}

export default Header