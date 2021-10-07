import React, { Component } from 'react';
import pops from '../../assets/cakepop.jpg'
import cake from '../../assets/Easter2.jpg'
import truffle from '../../assets/cakes2.jpg'
import egg from '../../assets/eggs3.jpg'
import geo from '../../assets/smash1.jpg'
import down from '../../assets/down.svg'


import './Shop.scss';

export default class Shop extends Component {
    
    state ={
        goods: [
            {
            'id':'pops',
            'Title': 'Cake Pops',
            'Desc':'A mash of small goodies',
            'Prices': [15 ,28],
            'Quant': ['6 pieces', '12 pieces'],
            'image':pops
            },
            {
            'id':'cake',
            'Title': 'Cakesicles',
            'Desc':'A mash of small goodies',
            'Prices': [18,32],
            'Quant': ['6 pieces', '12 pieces'],
            'image':cake
            },
            {
            'id':'geo',
            'Title': 'Geoheart Cakes',
            'Desc':'A mash of small goodies',
            'Prices': [20, 28, 36],
            'Quant': ['6 pieces','9 pieces', '12 pieces'],
            'image':geo
            },
            {
            'id':'egg',
            'Title': 'Chocolate Egg Surprises',
            'Desc':'A mash of small goodies',
            'Prices': [8, 27, 35],
            'Quant': ['Lil `Mini` Egg', 'Lil `Little` Egg', 'Lil `Big` Egg'],
            'image':egg
            },
            {
            'id':'truffle',
            'Title': 'Cake Truffles',
            'Desc':'A mash of small goodies',
            'Prices': [15, 23],
            'Quant': ['16 pieces', '25 pieces'],
            'image':truffle
            }
            
            
    ],
    pops:0,
    cake:0,
    geo:0,
    truffle:0,
    egg:0
    }
    jen = (e) => {
        this.setState({ [e.target.id]: e.target.options.selectedIndex})
      }

    render() {
        return (
            <>
                <section className='shop' id='shop'>
                    <h1 className='shop__title'>The Shop</h1>
                    <div className='bar123'></div>
                    <div className='shop__products'>
                        {this.state.goods.map((item,i) => {
                            return(
                            <div className='shop__products--card' key={i}>
                                <div className='shop__products--card__div'>
                                    <img className='shop__products--card__image' src={item.image}/>
                                </div>
                                <h2 className='shop__products--card__title'>{item.Title}</h2>
                                <p className='shop__products--card__desc'>{item.Desc}</p>
                                <p className='shop__products--card__price'>${item.Prices[this.state[item.id]]}.00</p>
                                <div className='testvidu' style={{position:'relative'}}>
                                    <img className='shop__products--card__price--arr' src={down}/>
                                    <select className='shop__products--card__select' id={item.id} onChange={this.jen}>
                                        {item.Quant.map((item,i) => {
                                            return(
                                                <option className='shop__products--card__select--option'>{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </section>
            </>
        )
    }
}
