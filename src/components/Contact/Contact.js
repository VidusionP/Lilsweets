import React, { Component } from 'react';
import instagram from '../../assets/instagram.svg'
import mail from '../../assets/mail.svg'
import mark from '../../assets/footer.png'

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
                    <h2 className='footer__block--title'>LilSweets©</h2>
                    <p onClick={goku} dest='about' className='footer__block--text'>About</p>
                    <p onClick={goku} dest='shop' className='footer__block--text'>Products</p>
                    <p onClick={goku} dest='gallery' className='footer__block--text'>Gallery</p>
                    <img className='footer__block--image' src={mark}/>
                </div>
                <div className='footer__contact'>
                    <h2 className='footer__contact--title'>Get in Touch</h2>
                    <p className='footer__contact--text'>(647) 608-9726</p>
                    <p className='footer__contact--text'>lilsweets@gmail.com</p>
                    <p className='footer__contact--text'>Brampton, ON</p>
                    <a href='https://www.instagram.com/lilsweets.to/' target='_blank'>
                        <img className='footer__contact--image' src={instagram}/>
                    </a>
                    <a href='mailto:vidu_08@hotmail.com'>
                        <img className='footer__contact--image' src={mail}/>
                    </a>
                </div>
                <div className='footer__sign'>
                    <h2 className='footer__sign--title'>Be in the know</h2>
                    <form className='footer__sign--form'>
                        <p className='footer__sign--form__title'>Be the first to know about promotions, new items and sales.</p>
                        <input className='footer__sign--form__input' placeholder='Email'/>
                        <button className='footer__sign--form__button'>Sign up</button>
                    </form>
                </div>
                <div className='footer__bar'></div>
                <div className='footer__bottom'>
                    <p className='footer__bottom--para'>Copyright 2020 LilSweets©, All rights Reserved.</p>
                    <p className='footer__bottom--para1'>Designed by VivaWeb</p>
                </div>
            </footer>
        )
    }
}
