import React from 'react'
function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center border-bottom p-5 mt-5'>
                <h1>Pricing</h1>
                <h4 className='text-muted fs-5 mt-3'>Free equity investments and flat ₹20 traday and F&O trades</h4>
            </div>
            <div className='row text-center p-5 mt-5'>
                <div className='col p-4'>
                    <img src='media/images/pricingEquity.svg' alt='pricingEquity' style={{width:"70%"}}/>
                    <h3>Free equity delivery</h3>
                    <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE),<br/>
                        are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col p-4'>
                    <img src='media/images/intradayTrades.svg' alt='intradayTrades' style={{width:"70%"}}/>
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per<br/>
                         executed order on intraday trades across <br/>
                         equity, currency, and commodity trades. Flat<br/>
                          ₹20 on all option trades.</p>
                </div>
                <div className='col p-4'>
                    <img src='media/images/pricingEquity.svg' alt='pricingEquity' style={{width:"70%"}}/>
                    <h3>Free direct MF</h3>
                    <p className='text-muted mt-3'>All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP <br/>charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;