import React, { Component } from 'react';
import gallery1 from '../../assets/gallery/box1.jpg'
import gallery2 from '../../assets/gallery/box2.jpg'
import gallery3 from '../../assets/gallery/cakes.jpg'
import gallery4 from '../../assets/gallery/cakes1.jpg'
import gallery5 from '../../assets/gallery/cakes3.jpg'
import gallery6 from '../../assets/gallery/cakes4.jpg'
import gallery7 from '../../assets/gallery/Easter1.jpg'
import gallery8 from '../../assets/gallery/eggs.jpg'
import gallery9 from '../../assets/gallery/eggs1.jpg'

import './Gallery.scss';

export default class Gallery extends Component {
    state = {
        scrollY:0,
        top:0,
    }
    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll.bind(this))
        this.setState({
            top: document.querySelector('.gallery').getBoundingClientRect().top
        })
        console.log(this.state.top)
        }
        handleScroll=(event)=> {
            this.setState({
                scrollY: window.pageYOffset
            });
            console.log(this.state.scrollY)
            console.log(this.state.top)
        }

    render() {
    const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9]
    const Y = this.state.scrollY
    const X = this.state.top
        return (
            <section className='gallery' id='gallery'>
                <h1 className='gallery__title'>Gallery</h1>
                <div className='bar'></div>
                <div className='gallery__block'>
                    {images.map((item, i) => {
                        return (
                            <img className={X-200>Y ? 'gallery__block--image':'gallery__block--image active1'} src={item} />
                        )
                    })}
                </div>
            </section>
        )
    }
}
