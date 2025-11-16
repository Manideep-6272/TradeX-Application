import React from 'react'
function Stats() {
    return (  
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <h4>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h4>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='' style={{textDecoration:"none"}}>Our philosophies.</a></p>
                    <h4>The TradeX universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4>Do better with money</h4>
                    <p className='text-muted'>With initiatives like <a href=''style={{textDecoration:"none"}}>Nudge</a> and <a href='' style={{textDecoration:"none"}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' style={{width:"90%"}}/>
                    <div className='text-center mt-3'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <img src='media/images/pressLogos.png' style={{width:"50%",margin:"0 auto",display:"block"}}/>
            </div>
        </div>
     );
}

export default Stats