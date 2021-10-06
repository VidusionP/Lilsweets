import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Gallery from './components/Gallery/Gallery';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Slideshow from './components/Slideshow/Slideshow';

function App() {
    return(
        <>
            <Header/>
            <Slideshow/>
            <About/>
            <Shop/>
            <Gallery/>
            <FAQ/>
            <Contact/>
        </>
    )
}

export default App