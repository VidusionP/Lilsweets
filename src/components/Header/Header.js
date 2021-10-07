import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import logo from '../../assets/test.svg'
import insta from '../../assets/insta.svg'
import menu from '../../assets/hamburger.svg'
import x from '../../assets/x.svg'
import hero from '../../assets/lilsweetsfinal.png'

import './Header.scss';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const goku = (id) => {
        const dest = document.querySelector("section[id=" +id.target.getAttribute("dest") +"]")
        window.scrollTo({
          top: dest.offsetTop-150,
          behavior: 'smooth'
        })
        setIsOpen(false)
    
      }
        return (
            <>
            <header className='header'>
                <div className='header__top'>
                    {/* <img className='header__top--logo' src={logo} alt='test'/> */}
                    <img className='header__top--menu__image' onClick={() => setIsOpen(!isOpen)} src={isOpen?x:menu} />
                    <img className='header__top--logo' src={logo} alt='test'/>
                    <a style={{display:'flex'}} href='https://www.instagram.com/lilsweets.to/' target='_blank'>
                        <img className='header__top--menu__image1' src={insta}/>
                    </a>
                </div>
                <nav className={isOpen?'header__nav active123':'header__nav'}>
                    <ul className='header__nav--subs'>
                        <li onClick={goku} className='header__nav--subs__list' dest='home'>Home</li>
                        <li onClick={goku} className='header__nav--subs__list' dest='about'>About</li>
                        <li onClick={goku} className='header__nav--subs__list' dest='shop'>The Shop</li>
                        <li onClick={goku} className='header__nav--subs__list' dest='gallery'>Gallery</li>
                        <li onClick={goku} className='header__nav--subs__list' dest='faq'>FAQ</li>
                        <li onClick={goku} className='header__nav--subs__list' dest='faq'>Contact</li>
                    </ul>
                </nav>
            </header>
            <section id='home' className='hero'>
                <img className='hero__image' src={hero} />
            </section>
            </>
        )
    }
