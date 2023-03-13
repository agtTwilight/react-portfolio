import React from 'react'
import "./style.css"
import github from "./assests/github-hover.png"
import linkedin from "./assests/linkedin-hover.png"
import email from "./assests/mail-hover.png"

export const Footer = () => {
        return (
                <footer>
                        <a href='https://github.com/agtTwilight' target="_blank" rel="noreferrer"><img src={github} alt="The github icon" class="footer-icon"></img></a>
                        <a href="https://www.linkedin.com/in/lukas-macmillen-03b2681b2/" target="_blank" rel="noreferrer"><img src={linkedin} alt="The linkedin icon" class="footer-icon"></img></a>
                </footer>
        )
}

export default Footer