import React from 'react'
function Awards() {
    return ( 
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-6 p-5'>
                        <img src='media/images/largestBroker.svg' alt='Largest Broker Award'/>
                    </div>
                    <div className='col-6 p-5 mt-5'>
                        <h1>Largest Broker in the World</h1>
                        <p className='mb-4 mt-3'>TradeX has been recognized as the largest broker in the world, serving millions of clients globally with unparalleled services and support.</p>
                        <div className='row'>
                            <div className='col-6'>
                                <ul>
                                    <li className="mb-2">Futures and options</li>
                                    <li className="mb-2">Stocks</li>
                                    <li className="mb-2">ETFs</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li className="mb-2">Mutual funds</li>
                                    <li className="mb-2">Bonds</li>
                                    <li className="mb-2">Forex</li>
                                </ul>
                            </div>
                        </div>
                        <img src="media/images/pressLogos.png" style={{width:"90%"}} className='mt-3'/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;