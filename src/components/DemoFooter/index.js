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
                        if (i === 0) {
                                arr.push(<p className='demo-progress-bar progress-initial' id={`${props.title}-${i}`}></p>)
                        } else {
                                arr.push(<p className='demo-progress-bar' id={`${props.title}-${i}`}></p>)
                        }
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