import React, { Component } from 'react';
import instagram from '../../assets/instagram.svg'
import mail from '../../assets/mail.svg'

import './Contact.scss';

export default class Contact extends Component {
    render() {
        const goku = (id) => {
            const dest = document.querySelector("section[id=" +id.target.getAttribute("dest") +"]")
            window.scrollTo({
              top: dest.offsetTop-150,
              behavior: 'smooth'
            })
        
          }
        return (
            <footer className='footer'>
                <div className='footer__block'>
                    <p onClick={goku} dest='about' className='footer__block--text'>About</p>
                    <p onClick={goku} dest='shop' className='footer__block--text'>Products</p>
                    <p onClick={goku} dest='gallery' className='footer__block--text'>Gallery</p>
                </div>
                <div className='footer__block1'>
                    <div className='footer__block1--contact'>
                        <p className='footer__block1--contact__title'>Contact Us</p>
                        <p className='footer__block1--contact__sub'>(647)608-9726</p>
                        <p className='footer__block1--contact__sub'>lilsweetsto@gmail.com</p>
                        <p className='footer__block1--contact__sub'>Brampton, ON</p>
                    </div>
                    <div className='footer__block1--news'>
                        <p className='footer__block1--news__title'>Subscribe</p>
                        <p className='footer__block1--news__sub'>Sign up now for new updates!</p>
                        <form className='footer__block1--news__form'>
                            <input className='footer__block1--news__form--input'/>
                            <button className='footer__block1--news__form--submit' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='footer__bar'></div>
                <div className='footer__bottom'>
                    <p className='footer__bottom--para'>Copyright 2020 LilSweets©, All rights Reserved.</p>
                    <div className='footer__bottom--social'>
                        <a href='https://www.instagram.com/lilsweets.to/' target='_blank'>
                            <img className='footer__bottom--social__image' src={instagram}/>
                        </a>
                        <a href='mailto:vidu__08@hotmail.com'>
                            <img className='footer__bottom--social__image' src={mail}/>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}
