import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

const Menu = () => (
         <> 
          <p><a href='#Home'>Home</a></p>
          <p><a href='#WhatGPT3'>What is GPT?</a></p>
          <p><a href='#Possibility'>Open AI</a></p>
          <p><a href='#Features'>Case Studies</a></p>
          <p><a href='#Blog'>Library</a></p>
        </>  
)

const Navbar = ()=> {
  const[toggleMenu, steToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        < div className="gpt3__navbar-links">
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
        </div>
        <div className="gpt3__navbar-sing">
          <p>Sing in</p>
          <button type='button'>Sing up</button>
      </div>
      <div className='gpt3__navbar-menu'>
          {toggleMenu
           ? <RiCloseLine color="#fff" size={27} onClick={() => steToggleMenu(false)} />
           : <RiMenu3Line color="#fff" size={27} onClick={() => steToggleMenu(true)} />
           }
           {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpr3__navbar-menu_conatinor_links'>
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sing in</p>
                  <button type='button'>Sing up</button>
                </div>
              </div>
            </div>
           )

           }
      </div>
    </div>
  )
}

export default Navbar
