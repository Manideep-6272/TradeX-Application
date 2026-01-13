import React from 'react'
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';
import Hero from './Hero';
function PricingPage() {
    return ( 
        <div>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
        </div>
     );
}
export default PricingPage;