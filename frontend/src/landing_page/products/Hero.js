import React from 'react'
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center mt-5'>
                <h2>TradeX Products</h2>
                <h4 className='mt-2 text-muted fs-5'>Sleek, modern, and intuitive trading platforms</h4>
                <h6 className='text-muted mt-2 fs-6'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings<i class="fa fa-long-arrow-right"></i></a></h6>
            </div>
        </div>
     );
}

export default Hero;