import React, { Component } from 'react';
import './Slideshow.scss';
import gallery1 from '../../assets/gallery/box1.jpg'
import gallery2 from '../../assets/gallery/smash.jpg'
import gallery3 from '../../assets/gallery/eggs5.jpg'
// import gallery10 from './assets/gallery/eggs4.jpg'
// import gallery11 from './assets/gallery/eggs5.jpg'
// import gallery12 from './assets/gallery/eggs6.jpg'
// import gallery13 from './assets/gallery/egss7.jpg'
// import gallery14 from './assets/gallery/smash.jpg'

export default class Slideshow extends Component {


        componentDidMount () {
        var slideIndex = 0;
        var timer;

        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            clearTimeout(timer);
            timer = setTimeout(showSlides, 3000); // Change image every 2 seconds
          }
        
        }

    render() {
      
            return (
                <section className='slide'>
                    <div className='mySlides fade'><img src={gallery1} style={{"width":"100%"}}/></div>
                    <div className='mySlides fade'><img src={gallery2} style={{"width":"100%"}}/></div>
                    <div className='mySlides fade'><img src={gallery3} style={{"width":"100%"}}/></div>
                    <div className='slide__dots' style={{"text-align":"center"}}>
                        <span class="dot"></span> 
                        <span class="dot"></span> 
                        <span class="dot"></span> 
                    </div>
                </section>
            )

          
        }
        
}
