import './App.scss';
import React, { Component } from 'react';
import test from './assets/test.svg'
import hero from './assets/lilsweetsfinal.png'
import insta from './assets/insta.svg'
import heart from './assets/heart.jpg'

export default function App() {
  const shop = {
    pop: [0]
  }

  const navHi = () => {
    const section =  document.querySelectorAll("div[id]");
    const vidu = Array.prototype.slice.call(section)
    const jenny = vidu.slice(1, vidu.length)
    let scrollY = window.scrollY
    jenny.forEach ((item,i) => {
      const sectionHeight = item.offsetHeight;
      const sectionTop = item.offsetTop - 200;
      const sectionId = item.getAttribute("id");
      if (
        scrollY >sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        document.querySelector(".header__top [dest=" +sectionId + "]").classList.add("active")
      } else {
        document.querySelector(".header__top [dest=" +sectionId +"]").classList.remove("active")
      }
    })
  }

  const goku = (id) => {
    const dest = document.querySelector("div[id=" +id.target.getAttribute("dest") +"]")
    window.scrollTo({
      top: dest.offsetTop-150,
      behavior: "smooth"
    })

  }
  window.addEventListener("scroll", navHi);

  const jen = (e) => {
    shop.pop.splice(0, 1, e.target.options.selectedIndex)
    console.log(shop.pop[0])
  }
  
  return (
    <>
    <div className='header'>
      <img src={test} className="header__logo" alt='test'/>
      <div className="header__top">
        <div onClick={goku} className='header__title' dest='home'>Home</div>
        <div onClick={goku} className='header__title'dest='about'>About Us</div>
        <div onClick={goku} className='header__title'dest='shop'>The Shop</div>
        <div onClick={goku} className='header__title'dest='gallery'>Gallery</div>
        <div onClick={goku} className='header__title'dest='contact'>Contact Us</div>
        <div onClick={goku} className='header__title'dest='faq'>FAQ</div>
      </div>
      <div className='header__insta'>
        Check Us Out!
        <a href='https://www.instagram.com/lilsweets.to/' target='_blank'>
          <img className='header__insta--logo' src={insta}/>
        </a>
      </div>
    </div>
    <div id="home" className="Vidu">
      <div className="App">
        {/* <div className='circle'></div>
        <div className='Jenny'>Welcomse </div> */}
      </div>
    </div>
    {/* <div  id="about" className='title'>About Us</div> */}
    <div id="about" className='about'>
      <div className='title'>About Us</div>
      <div className='about__bio'>
        <img className='about__image' src={heart}/>
        <p className='about__para'>Consequat adipisicing quis enim consectetur irure sint. Incididunt duis culpa pariatur dolore ullamco reprehenderit occaecat fugiat ipsum nisi qui fugiat eiusmod enim. Ex nulla elit magna qui consequat laborum sint esse eu aliqua. Elit in cupidatat qui esse in fugiat sunt proident ad. Est excepteur culpa proident nisi amet laborum proident consectetur dolor sit quis reprehenderit non. Ex exercitation ex eu veniam duis tempor cupidatat occaecat. Laborum nulla proident quis enim consectetur eu tempor dolore pariatur sint occaecat velit.
            Velit et cillum esse amet ullamco cupidatat reprehenderit pariatur quis culpa ut anim enim amet. Dolor veniam duis et ea irure eiusmod. Et cillum ea nulla et occaecat laborum officia eu sit exercitation cupidatat. Est laborum commodo sit culpa reprehenderit reprehenderit et.</p> 
      </div>
    </div>
    <div id="shop" className='price'>
      <div className='title'>The Shop</div>
      <div className='price__card'>
        <div className='price__card__box'>
          <span>IMAGE</span>
          <div className='price__card__info'>
            <div className='price__card__info--title1'>Cake Pops</div>
            <div className='price__card__info--title2'>{shop.pop[0]}</div>
            <select onChange={jen} id='pops' className='price__card__info--title4'>
              <option className='price__card__info--title4--opt'>6 Treats</option>
              <option className='price__card__info--title4--opt'>12 Treats</option>
            </select>
            <div className='price__card__info--title3'>A mash of small goodies</div>
          </div>
        </div>
        <div className='price__card__box'>
          <span>IMAGE</span>
          <div className='price__card__info'>
            <div className='price__card__info--title1'>Cakesicles</div>
            <div className='price__card__info--title2'>$18</div>
            <select onChange={jen} className='price__card__info--title4'>
              <option className='price__card__info--title4--opt'>6 Treats</option>
              <option className='price__card__info--title4--opt'>12 Treats</option>
            </select>
            <div className='price__card__info--title3'>A mash of small goodies</div>
          </div>
        </div>
        <div className='price__card__box'>
          <span>IMAGE</span>
          <div className='price__card__info'>
            <div className='price__card__info--title1'>Geoheart Cakes</div>
            <div className='price__card__info--title2'>$20</div>
            <select className='price__card__info--title4'>
              <option className='price__card__info--title4--opt'>6 Treats</option>
              <option className='price__card__info--title4--opt'>9 Treats</option>
              <option className='price__card__info--title4--opt'>12 Treats</option>
            </select>
            <div className='price__card__info--title3'>A mash of small goodies</div>
          </div>
        </div>
      </div>
      <div className='price__card'>
        <div className='price__card__box'>
          <span>IMAGE</span>
          <div className='price__card__info'>
            <div className='price__card__info--title1'>Cake Truffles</div>
            <div className='price__card__info--title2'>$15</div>
            <select className='price__card__info--title4'>
              <option className='price__card__info--title4--opt'>16 Treats</option>
              <option className='price__card__info--title4--opt'>25 Treats</option>
            </select>
            <div className='price__card__info--title3'>A mash of small goodies</div>
          </div>
        </div>
        <div className='price__card__box'>
          <span>IMAGE</span>
          <div className='price__card__info'>
            <div className='price__card__info--title1'>Chocolate Egg Surpises</div>
            <div className='price__card__info--title2'>$8</div>
            <select className='price__card__info--title4'>
              <option className='price__card__info--title4--opt'>Lil 'Mini' Egg</option>
              <option className='price__card__info--title4--opt'>Lil 'Little' Egg</option>
              <option className='price__card__info--title4--opt'>Lil 'Big' Egg</option>
            </select>
            <div className='price__card__info--title3'>A mash of small goodies</div>
          </div>
        </div>
        <div className='price__card__box'>
          <span>IMAGE</span>
          <div className='price__card__info'>
            <div className='price__card__info--title1'>Smash Heart</div>
            <div className='price__card__info--title2'>$30</div>
            <div className='price__card__info--title3'>A mash of small goodies</div>
          </div>
        </div>
      </div>
    </div>
    <div id="gallery" className='gallery'>
      <div className='title'>Gallery</div>
    </div>
    <div id="contact" className='contact'>
    <div className='title'>Contact Us</div>
      <div>Order Now!</div>
      <form className='contact__form__box'>
        <div className='contact__form__box--hi'>
          <div className='contact__form__box--first'>
            <input type="text" className='contact__form__box--first--text' placeholder="Name"/>
            <input type="text" className='contact__form__box--first--text' placeholder="Email"/>
            <input type="text" className='contact__form__box--first--text' placeholder="Phone Number"/>
          </div>
          <div className='contact__form__box--second'>
            <textarea className='contact__form__box--second--message' type="text" placeholder="Message"/>
          </div>
        </div>
        <input className='contact__form__box--submit' type='submit'/>
      </form>
      <div>
        <div>GTA, Ontario, Canada</div>
        <div>Email</div>
      </div>
    </div>
    <div id="faq">
      <div className='title'>FAQ</div>
      <div className='faq'>
        <div className='faq__quest'>Are the sweets suitable for vegetarians?</div>
        <div className='faq__ans'>Products differ, email us or message on instagram</div>
      </div>
    </div>
    </>
  )
}
