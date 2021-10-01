import './App.scss';
import React, { Component } from 'react';
import test from './assets/test.svg'
import hero from './assets/lilsweetsfinal.png'
import insta from './assets/insta.svg'
import heart from './assets/heart.jpg'
import pop from './assets/cakepop.jpg'
import easter from './assets/Easter2.jpg'
import cake from './assets/cakes2.jpg'
import egg from './assets/eggs3.jpg'
import smash from './assets/smash1.jpg'
import gallery1 from './assets/gallery/box1.jpg'
import gallery2 from './assets/gallery/box2.jpg'
import gallery3 from './assets/gallery/cakes.jpg'
import gallery4 from './assets/gallery/cakes1.jpg'
import gallery5 from './assets/gallery/cakes3.jpg'
import gallery6 from './assets/gallery/cakes4.jpg'
import gallery7 from './assets/gallery/Easter1.jpg'
import gallery8 from './assets/gallery/eggs.jpg'
import gallery9 from './assets/gallery/eggs1.jpg'
import gallery10 from './assets/gallery/eggs4.jpg'
import gallery11 from './assets/gallery/eggs5.jpg'
import gallery12 from './assets/gallery/eggs6.jpg'
import gallery13 from './assets/gallery/egss7.jpg'
import gallery14 from './assets/gallery/smash.jpg'

class App extends Component {
  state ={
    pops:[0],
    cake:[0],
    geo:[0],
    cake1:[0],
    egg:[0]
    
  }

  navHi = () => {
    const section =  document.querySelectorAll("div[id]");
    const vidu = Array.prototype.slice.call(section)
    const jenny = vidu.slice(1, vidu.length)
    let scrollY = window.scrollY
    jenny.forEach ((item,i) => {
      const sectionHeight = item.offsetHeight;
      const sectionTop = item.offsetTop - 300;
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

  goku = (id) => {
    const dest = document.querySelector("div[id=" +id.target.getAttribute("dest") +"]")
    window.scrollTo({
      top: dest.offsetTop-150,
      behavior: 'smooth'
    })

  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
  }

  jen = (e) => {
    const check = e.target.id
    this.setState({
      [e.target.id]: e.target.options.selectedIndex
    })
    console.log(this.state)
  }
  
  componentDidMount() {
    
    window.addEventListener('scroll', this.navHi);
  }
  render() {


  return (
    <>
    <div className='header'>
      <img src={test} className="header__logo" alt='test'/>
      <div className="header__top">
        <div onClick={this.goku} className='header__title' dest='home'>Home</div>
        <div onClick={this.goku} className='header__title'dest='about'>About Us</div>
        <div onClick={this.goku} className='header__title'dest='shop'>The Shop</div>
        <div onClick={this.goku} className='header__title'dest='gallery'>Gallery</div>
        <div onClick={this.goku} className='header__title'dest='faq'>FAQ</div>
        {/* <div onClick={this.goku} className='header__title'dest='contact'>Contact Us</div> */}
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
          <img className='price__card__box--image' src={pop}/>
          <div className='price__card__info'>
            <div className='price__card__info--title1'>Cake Pops</div>
            <div className='price__card__info--title3'>A mash of small goodies</div>
            <div className='price__card__info--title2'>{this.state.pops==0?"$15.00":"$28.00"}</div>
            <select onChange={this.jen} id='pops' className='price__card__info--title4'>
              <option className='price__card__info--title4--opt'>6 Treats</option>
              <option className='price__card__info--title4--opt'>12 Treats</option>
            </select>
          </div>
        </div>
        <div className='price__card__box'>
          <img className='price__card__box--image' src={easter}/>
          <div className='price__card__info'>
            <div className='price__card__info--title1'>Cakesicles</div>
            <div className='price__card__info--title3'>A mash of small goodies</div>
            <div className='price__card__info--title2'>{this.state.cake==0?"$18.00":"$32.00"}</div>
            <select onChange={this.jen} id="cake" className='price__card__info--title4'>
              <option className='price__card__info--title4--opt'>6 Treats</option>
              <option className='price__card__info--title4--opt'>12 Treats</option>
            </select>

          </div>
        </div>
        <div className='price__card__box'>
          <img className='price__card__box--image' src={cake}/>
          <div className='price__card__info'>
            <div className='price__card__info--title1'>Geoheart Cakes</div>
            <div className='price__card__info--title3'>A mash of small goodies</div>
            <div className='price__card__info--title2'>{this.state.geo==0?"$20.00":this.state.geo==1?"$28.00":"$36.00"}</div>
            <select onChange={this.jen} id="geo" className='price__card__info--title4'>
              <option className='price__card__info--title4--opt'>6 Treats</option>
              <option className='price__card__info--title4--opt'>9 Treats</option>
              <option className='price__card__info--title4--opt'>12 Treats</option>
            </select>

          </div>
        </div>
      </div>
      <div className='price__card'>
        <div className='price__card__box'>
          <img className='price__card__box--image' src={test}/>
          <div className='price__card__info'>
            <div className='price__card__info--title1'>Cake Truffles</div>
            <div className='price__card__info--title3'>A mash of small goodies</div>
            <div className='price__card__info--title2'>{this.state.cake1==0?"$15.00":"$23.00"}</div>
            <select onChange={this.jen} id="cake1" className='price__card__info--title4'>
              <option className='price__card__info--title4--opt'>16 Treats</option>
              <option className='price__card__info--title4--opt'>25 Treats</option>
            </select>

          </div>
        </div>
        <div className='price__card__box'>
          <img className='price__card__box--image' src={egg}/>
          <div className='price__card__info'>
            <div className='price__card__info--title1'>Chocolate Egg Surpises</div>
            <div className='price__card__info--title3'>A mash of small goodies</div>
            <div className='price__card__info--title2'>{this.state.egg==0?"$8.00":this.state.egg==1?"$27.00":"$35.00"}</div>
            <select onChange={this.jen} id="egg" className='price__card__info--title4'>
              <option className='price__card__info--title4--opt'>Lil 'Mini' Egg</option>
              <option className='price__card__info--title4--opt'>Lil 'Little' Egg</option>
              <option className='price__card__info--title4--opt'>Lil 'Big' Egg</option>
            </select>

          </div>
        </div>
        <div className='price__card__box'>
          <img className='price__card__box--image' src={smash}/>
          <div className='price__card__info'>
            <div className='price__card__info--title1'>Smash Heart</div>
            <div className='price__card__info--title3'>A mash of small goodies</div>
            <div className='price__card__info--title2'>$30.00</div>

          </div>
        </div>
      </div>
    </div>
    <div id="gallery" className='gallery'>
      <div className='title'>Gallery</div>
      <div className='gallery__line'>
        <div className='gallery__line--image'><img className='gallery__line--image--pic' src={gallery1}/></div>
        <div className='gallery__line--image'><img className='gallery__line--image--pic' src={gallery2}/></div>
        <div className='gallery__line--image'><img className='gallery__line--image--pic' src={gallery3}/></div>
      </div>
      <div className='gallery__line'>
        <div className='gallery__line--image'><img className='gallery__line--image--pic' src={gallery4}/></div>
        <div className='gallery__line--image'><img className='gallery__line--image--pic' src={gallery5}/></div>
        <div className='gallery__line--image'><img className='gallery__line--image--pic' src={gallery6}/></div>
      </div>
      <div className='gallery__line'>
        <div className='gallery__line--image'><img className='gallery__line--image--pic' src={gallery7}/></div>
        <div className='gallery__line--image'><img className='gallery__line--image--pic' src={gallery8}/></div>
        <div className='gallery__line--image'><img className='gallery__line--image--pic' src={gallery9}/></div>
      </div>
    </div>
    <div id="faq" className='faq'>
      <div className='title'>Questions?</div>
      <div className='faq__qa'>
        <div className='faq__qa--quest'>Are the sweets suitable for vegetarians?</div>
        <div className='faq__qa--ans'>Products differ, email us or message on instagram</div>
      </div>
      <div className='faq__qa'>
        <div className='faq__qa--quest'>How do I place an order?</div>
        <div className='faq__qa--ans'>To place an order, please message us on Instagram for a quick response</div>
      </div>
      <div className='faq__qa'>
        <div className='faq__qa--quest'>Do you offer delivery services?</div>
        <div className='faq__qa--ans'>Orders can be delivered locally or pickup would be in Brampton</div>
      </div>
    </div>
    {/* <div id="contact" className='contact'>
    <div className='title'>Contact Us</div>
      <div>Order Now!</div>
      <form className='contact__form__box' onSubmit={this.handleSubmit}>
        <div className='contact__form__box--hi'>
          <div className='contact__form__box--first'>
            <input type="text" className='contact__form__box--first--text' placeholder="Name" required/>
            <input type="text" className='contact__form__box--first--text' placeholder="Email" required/>
            <input type="text" className='contact__form__box--first--text' placeholder="Phone Number"/>
          </div>
          <div className='contact__form__box--second'>
            <textarea className='contact__form__box--second--message' type="text" placeholder="Message" required/>
          </div>
        </div>
        <input className='contact__form__box--submit' type='submit'/>
      </form>
      <div>
        <div>GTA, Ontario, Canada</div>
        <div>Email</div>
      </div>
    </div> */}
    
    </>
  )}
}

export default App;