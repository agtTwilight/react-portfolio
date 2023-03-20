import React from 'react'
import DemoCard from '../DemoCard'
import DemoFooter from '../DemoFooter'

export const ProjectDemo = () => {
        function fillFooter(num){
                for (let i=1; i < num+1; i ++) {
                        document.querySelector(`#test-${i}`).setAttribute("style", "background-color: var(--lighttan);")
                }
        }

        return (
                // TODO map over this for demo card obj array.
                <section className='demoCard'>
                        <DemoCard />
                        <DemoFooter
                        num={4}
                        title={"test"}
                        />
                </section>
        )
}

export default ProjectDemo