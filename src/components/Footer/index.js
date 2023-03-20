import { React, useEffect } from 'react'
import "./style.css"
import github from "./assests/github-hover.png"
import linkedin from "./assests/linkedin-hover.png"

export const Footer = () => {
        function fillFooter(num){
                for (let i=1; i < num+1; i ++) {
                        document.querySelector(`#marker-${i}`).setAttribute("style", "background-color: var(--lighttan);")
                }
        }
        
        useEffect(() => {
                if (window.location.href.includes("portfolio")) {
                        fillFooter(2);
                } else if (window.location.href.includes("resume")) {
                        fillFooter(3);
                } else if (window.location.href.includes("contact")) {
                        fillFooter(4);
                } else {
                        fillFooter(1);
                }
        }, [])
        return (
                <>
                        <footer>
                                <a href='/'><p id='marker-1' className='progress-bar'></p></a>
                                <a href='/portfolio'><p id='marker-2' className='progress-bar'></p></a>
                                <a href='/resume'><p id='marker-3' className='progress-bar'></p></a>
                                <a href='/contact'><p id='marker-4' className='progress-bar'></p></a>
                        </footer>
                        <section id='footer-icons'>
                                <a href='https://github.com/agtTwilight' target="_blank" rel="noreferrer"><img src={github} alt="The github icon" class="footer-icon"></img></a>
                                <a href="https://www.linkedin.com/in/lukas-macmillen-03b2681b2/" target="_blank" rel="noreferrer"><img src={linkedin} alt="The linkedin icon" class="footer-icon"></img></a>
                        </section>
                </>
        )
}

export default Footer