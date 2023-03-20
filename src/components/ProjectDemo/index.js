import React from 'react'
import DemoCard from '../DemoCard'
import DemoFooter from '../DemoFooter'

export const ProjectDemo = () => {
        return (
                // TODO map over this for demo card obj array.
                <section className='demoCard'>
                        <DemoCard />
                        <DemoFooter
                        num={4}
                        />
                </section>
        )
}

export default ProjectDemo