import React, {useState} from 'react'

import {GlobalStyle} from '../Global';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Hero from '../Hero';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../Footer';

const Home = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
  setIsOpen(!isOpen);
}

    return (
        <>
          <GlobalStyle/>
          <Navbar toggle={toggle}/>  
          <Sidebar isOpen={isOpen} toggle={toggle}/> 
          <Hero/>
          <About/> 
          <Portfolio/>
          <Contact/>
          <Footer/>
        </>
    )
}

export default Home;
