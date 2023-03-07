import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'


const Contact = () => {


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container ">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tanawatudom@outlook.co.th</h5>
            <a href="mailto:tanawatudom@outlook.co.th">Send a massage</a>
          </article>
          <article className="contact__option"> 
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Bank Tanawat</h5>
            <a href="https://m.me/bank.tanawat.14" target='_blank'>Send a massage</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon'/>
            <h4>Phon Number</h4>
            <h5>+66 846046182</h5>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

      </div>
    </section>
  )
}

export default Contact