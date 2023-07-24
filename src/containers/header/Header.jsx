import React from 'react'
import './header.css';
import People from "../../assets/people.png"
import Ai from "../../assets/ai.png"



const Header = () => {
  return (
    <div className='gpt3__header section_padding' id="Home">
      <div className='gpt3__header-container'>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='dpt3__header-content_input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started </button>
        </div>
        <div className='gpt3__header-container__people'>
          <img src={People} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className='gpt3__header-image'>
          <img src={Ai} alt='ai image' />
        </div>
    </div>
  )
}

export default Header
