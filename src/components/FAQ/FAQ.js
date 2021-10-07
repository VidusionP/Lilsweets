import React, { Component } from 'react';
import plus from '../../assets/plus-square.svg'
import minus from '../../assets/minus-square.svg'

import './FAQ.scss';

export default class FAQ extends Component {

    vidu123 = (e) => {
        const dest = document.querySelector("p[id=" +e.target.getAttribute("id") +"]")
        if (dest.classList.contains('block')) {
            dest.classList.remove('block')
        } else {
        dest.classList.add('block')

        }

    }
    render() {
        
        return (
            <section className='faq' id='faq'>
                <h1 className='faq__title'>Questions?</h1>
                <div className='bar123'></div>
                <div className='faq__questions'>
                    <div className='faq__questions--block'>
                        <div>
                        <img id='hi' onClick={this.vidu123} src={plus}/><h2 className='faq__questions--block__title'>Are the sweets suitable for vegetarians?</h2>

                        </div>
                        <p id='hi' className='faq__questions--block__para'>Products differ, email us or message on instagram</p>
                    </div>
                    <div className='faq__questions--block'>
                        <h2 className='faq__questions--block__title'>How do I place an order?</h2>
                        <p id='hi2' className='faq__questions--block__para'>To place an order, please message us on Instagram for a quick response</p>
                    </div>
                    <div className='faq__questions--block'>
                        <h2 className='faq__questions--block__title'>Do you offer delivery services?</h2>
                        <p className='faq__questions--block__para'>Orders can be delivered locally or pickup would be in Brampton</p>
                    </div>
                </div>
            </section>
        )
    }
}
