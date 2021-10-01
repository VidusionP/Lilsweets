import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import test from '../../assets/test.svg'

import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <>
            <header className='header'>
                <div>
                    <Link to='/'>
                        <img src={test} className="header__logo" alt='test'/>

                    </Link>
                </div>
                {/* <img src={test} className="header__logo" alt='test'/>
                <div className="header__top">
                    <div onClick={this.goku} className='header__title' dest='home'>Home</div>
                    <div onClick={this.goku} className='header__title'dest='about'>About Us</div>
                    <div onClick={this.goku} className='header__title'dest='shop'>The Shop</div>
                    <div onClick={this.goku} className='header__title'dest='gallery'>Gallery</div>
                    <div onClick={this.goku} className='header__title'dest='faq'>FAQ</div>
                    <div onClick={this.goku} className='header__title'dest='contact'>Contact Us</div>
                </div>
                <div className='header__insta'>
                    Check Us Out!
                    <a href='https://www.instagram.com/lilsweets.to/' target='_blank'>
                    <img className='header__insta--logo' src={insta}/>
                    </a>
                </div> */}
            </header>
            </>
        )
    }
}