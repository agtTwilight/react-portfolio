import {React, useState, useEffect} from 'react'
import './style.css'

export const DemoFooter = (props) => {
        const [footer, setFooter] = useState([])

        useEffect(() => {
                setFooter(makeDemoFooter())
        }, [])

        function makeDemoFooter() {
                for (let i = 0; i < props.num; i++) {
                        return <p className='progress-bar'></p>
                }
        }
  return (
        <div className='demoFooter'>
                {footer}
        </div>
  )
}

export default DemoFooter