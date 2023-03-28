import React from 'react'
import {useParams} from 'react-router-dom'
import './style.css'

export const PortfolioProject = () => {
    const routeParams = useParams();
  return (
    <div className='wrap singleProjectWrap'>
        <h1>{routeParams.project}</h1>
        <h2>Coming Soon! (commented on: 03/28/22)</h2>
        <p>I am currently working on a react component that will detail the development process for each of my projects. I'm an open book, and happy to discuss anything about my development style...connect with me <a href='/contact'>here</a> to setup a meeting, or to be notified when these components have been finalized!</p>
        <p>Cheers,</p>
        <p>     Lukas</p>
    </div>
  )
}

export default PortfolioProject
