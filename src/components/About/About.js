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
    const Y = this.state.scrollY
    const X = this.state.top
        return (
            <section id="about" className={X>Y ? 'about':'about active1'}>
                <h1 className={X>Y ? 'about__title':'about__title active1'}>About Us</h1>
                <div className={X>Y ? 'about__bar':'about__bar active1'}></div>
                <div className={X>Y ? 'about__bio':'about__bio active1'}>
                    <img className='about__bio--image' src={heart}/>
                    <p className='about__bio--para'>Consequat adipisicing quis enim consectetur irure sint. Incididunt duis culpa pariatur dolore ullamco reprehenderit occaecat fugiat ipsum nisi qui fugiat eiusmod enim. Ex nulla elit magna qui consequat laborum sint esse eu aliqua. <br /> <br/> Elit in cupidatat qui esse in fugiat sunt proident ad. Est excepteur culpa proident nisi amet laborum proident consectetur dolor sit quis reprehenderit non. Ex exercitation ex eu veniam duis tempor cupidatat occaecat. Laborum nulla proident quis enim consectetur eu tempor dolore pariatur sint occaecat velit.
                        Velit et cillum esse amet ullamco cupidatat reprehenderit pariatur quis culpa ut anim enim amet. Dolor veniam duis et ea irure eiusmod. Et cillum ea nulla et occaecat laborum officia eu sit exercitation cupidatat. Est laborum commodo sit culpa reprehenderit reprehenderit et.</p> 
                </div>
            </section>
        )
    }
}
