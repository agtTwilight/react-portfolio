import React from 'react'
import {useParams} from 'react-router-dom'
import './style.css'

export const PortfolioProject = () => {
    const routeParams = useParams();
  return (
    <div className='wrap singleProjectWrap'>
        <h1>{routeParams.project}</h1>
    </div>
  )
}

export default PortfolioProject
