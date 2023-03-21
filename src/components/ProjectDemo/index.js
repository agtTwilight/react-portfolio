import React from 'react'
import DemoCard from '../DemoCard'
import DemoFooter from '../DemoFooter'

export const ProjectDemo = (props) => {
        function fillFooter(num){
                for (let i=1; i < num+1; i ++) {
                        document.querySelector(`#test-${i}`).setAttribute("style", "background-color: var(--pistachio);")
                }
        }

        return (
                <section className='demoContainer'>
                    {props.demoData.map((demo, index) => (
                        <DemoCard
                        key={index}
                        index = {index}
                        src={demo.src}
                        title={demo.title}
                        about={demo.about}
                        />
                    ))}
                        <DemoFooter
                        num={props.numSlides}
                        title={props.demoData.title}
                        />
                </section>
        )
}

export default ProjectDemo