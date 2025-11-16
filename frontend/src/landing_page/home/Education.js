import React from 'react'
function Education() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width:"80%"}}/>
                </div>
                <div className='col-6 mt-3'>
                    <h2 className='fs-3 mt-3 mb-4 text-muted'>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right"></i></a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;