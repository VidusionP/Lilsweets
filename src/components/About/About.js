import React, { Component } from 'react';
import heart from '../../assets/heart.jpg'

import './About.scss';

export default class About extends Component {
    state = {
        scrollY:0,
        top:0,
    }

    componentDidMount () {
    window.addEventListener('scroll', this.handleScroll.bind(this))
    this.setState({
        top: document.querySelector('.slide').getBoundingClientRect().top
    })
    }
    handleScroll=(event)=> {
        this.setState({
            scrollY: window.pageYOffset
        });
    }
render() {
    const Y = this.state.scrollY
    const X = this.state.top
        return (
            <section id="about" className={X>Y ? 'about':'about active1'}>
                <h1 className={X>Y ? 'about__title':'about__title active1'}>About Us</h1>
                <div className={X>Y ? 'bar':'bar active1'}></div>
                <div className={X>Y ? 'about__bio':'about__bio active1'}>
                    <img className='about__bio--image' src={heart}/>
                    <p className='about__bio--para'>Established in 2020 in Brampton, Ontario, Lil Sweets delivers quality desserts and pastries. Having years of baking experience, our team serves our customers with balanced desserts made from scratch. 
                    <br/> <br/>Lil Sweets uses only the finest ingredients with the highest level of attention to small details. We strive to provide our customers with the utmost satisfaction.
                    <br/><br/>We hope you enjoy our products!
                    </p> 
                </div>
            </section>
        )
    }
}
