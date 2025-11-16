import React from 'react'
function Pricing() {
    return ( 
        <div className='container p-5 mt-4'>
            <div className='row'>
                <div className='col-5'>
                    <h2>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and direct mutual fund</p>
                        </div>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O trading</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;