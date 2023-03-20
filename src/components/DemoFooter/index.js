import {React, useState, useEffect} from 'react'
import './style.css'

export const DemoFooter = (props) => {
        const [footer, setFooter] = useState([])

        useEffect(() => {
                setFooter(makeDemoFooter())
        }, [])

        function makeDemoFooter() {
                const arr = []
                for (let i = 0; i < props.num; i++) {
                        arr.push(<p className='progress-bar'></p>)
                }
                return arr
        }
  return (
        <div className='demoFooter'>
                {footer}
        </div>
  )
}

export default DemoFooter