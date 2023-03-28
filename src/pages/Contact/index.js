import React from 'react'
import "./style.css"
import ContactForm from "../../components/ContactForm"

export const Contact = () => {
    return (
        <section id='contactContainer'>
            <p>I'm currently <strong>open to work.</strong></p>
            <ContactForm />
            <p>Happy to chat about how I can contribute to your team as a backend or fullstack developer. Should you have any questions or just want to chat, my inbox is always open!</p>
        </section>
    )
}

export default Contact
