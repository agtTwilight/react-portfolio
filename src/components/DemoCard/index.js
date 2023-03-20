import React from 'react'
import img from './assests/test.png'
import './style.css'

export const DemoCard = () => {
        return (
                <>
                        <img className='demoImg' src={img}></img>
                        <div className='demoBody'>
                                <h2 className='demoTitle'>TESTING TITLE:</h2>
                                <p className='demoBrief'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        </div>
                </>
        )
}

export default DemoCard
