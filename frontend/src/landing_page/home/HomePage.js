import React from 'react'
import Awards from './Award';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
function HomePage() {
    return ( 
        <>
            <Hero />
            <Awards />
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </>
     );
}

export default HomePage;