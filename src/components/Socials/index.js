import React from 'react'
import linkedin from './assets/linkedin.svg'
import github from '/assests/github.svg'

export const Socials = (props) => {
  return (
    <div>
        <a href={props.href} target="_blank" rel="noreferrer"><img src={github} alt="The github icon"></img></a>
        <a href={props.href} target="_blank" rel="noreferrer"><img src={linkedin} alt="The linkedin icon"></img></a>
    </div>
  )
}

export default Socials
