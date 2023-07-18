import React from 'react'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

function Navbar() {
  return (
    <div className="gpt3__navbar">
      < div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#Home'>Home</a></p>
          <p><a href='#WhatGPT3'>What is GPT?</a></p>
          <p><a href='#Posibility'>Open AI</a></p>
          <p><a href='#Features'>Case Studies</a></p>
          <p><a href='#Blog'>Library</a></p>
        </div>
        </div>
        <div className="gpt3__navbar-sing">
          <p>Sing in</p>
          <button type='button'>Sing up</button>
      </div>
    </div>
  )
}

export default Navbar
