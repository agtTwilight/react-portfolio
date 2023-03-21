import React from 'react'
import "./style.css"
import ContactForm from "../../components/ContactForm"

export const Contact = () => {
  return (
    <section id='contactContainer'>
        <p id='contactSub'>Let's Connect!</p>
        <ContactForm/>
    </section>
  )
}

export default Contact
