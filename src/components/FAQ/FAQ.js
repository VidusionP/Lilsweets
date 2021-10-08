import React, { Component } from 'react';
import plus from '../../assets/plus-square.svg'
import minus from '../../assets/minus-square.svg'
import { useEffect, useState } from 'react';

import './FAQ.scss';

export default class FAQ extends Component {

    state = {
        hi:false,
        hi2:false,
        hi3:false,

    }
    vidu123 = (e) => {
        const dest = document.querySelector("p[id=" +e.target.getAttribute("id") +"]")
        const x = e.target.id
        if (dest.classList.contains('block')) {
            this.setState({
               [x]:false
            })
            dest.classList.remove('block')
        } else {
            this.setState({
                [x]:true
            })
        dest.classList.add('block')
        }
        

    }
    render() {
        
        return (
            <section className='faq' id='faq'>
                <h1 className='faq__title'>Questions?</h1>
                <div className='bar'></div>
                <div className='faq__questions'>
                    <div className='faq__questions--block'>
                        <div onClick={this.vidu123} id='hi' className='faq__questions--block__flex' >
                            <img id='hi' src={this.state.hi?minus:plus}/>
                            <h2 id='hi' className='faq__questions--block__title'>Are the sweets suitable for vegetarians?</h2>
                        </div>
                        <p id='hi' className='faq__questions--block__para'>Products differ, email us or message on instagram</p>
                    </div>
                    <div className='faq__questions--block'>
                        <div onClick={this.vidu123} id='hi2'  className='faq__questions--block__flex'>
                            <img id='hi2' src={this.state.hi2?minus:plus}/>
                            <h2 id='hi2'  className='faq__questions--block__title'>How do I place an order?</h2>
                        </div>
                        <p id='hi2' className='faq__questions--block__para'>To place an order, please message us on Instagram for a quick response</p>
                    </div>
                    <div className='faq__questions--block'>
                        <div onClick={this.vidu123} id='hi3'  className='faq__questions--block__flex'>
                            <img id='hi3' src={this.state.hi3?minus:plus}/>
                            <h2 id='hi3'  className='faq__questions--block__title'>Do you offer delivery services?</h2>
                        </div>
                        <p id='hi3' className='faq__questions--block__para'>Orders can be delivered locally or pickup would be in Brampton</p>
                    </div>
                </div>
            </section>
        )
    }
}
