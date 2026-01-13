import React from 'react'

function CreateTicket() {
    return ( 
        <div className='container'>

            {/* Row 1 */}
            <div className='row p-5 mt-5'>
                <h3 className='mb-4'>To create a ticket, select a relevant topic</h3>

                <div className='col-4 p-4 fs-6'>
                    <p className='fs-4'><i className="fa fa-plus-circle"></i> Account Opening</p>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Resident individual</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Minor</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Non Resident Indian (NRI)</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Company, Partnership, HUF and LLP</a>
                    <a className='d-block' href='' style={{textDecoration:"none",lineHeight:"2"}}>Glossary</a>
                </div>

                <div className='col-4 p-4 fs-6'>
                    <p className='fs-4'><i className="fa fa-user"></i> Your TradeX Account</p>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Your Profile</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Account modification</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Client Master Report (CMR) & DP</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Nomination</a>
                    <a className='d-block' href='' style={{textDecoration:"none",lineHeight:"2"}}>Transfer & conversion of securities</a>
                </div>

                <div className='col-4 p-4 fs-6'>
                    <p className='fs-4'><i className="fa fa-paper-plane"></i> Kite</p>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>IPO</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Trading FAQs</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>MTF and Margins</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Charts & Orders</a>
                    <a className='d-block' href='' style={{textDecoration:"none",lineHeight:"2"}}>Alerts and Nudges</a>
                </div>
            </div>

            {/* Row 2 */}
            <div className='row p-5 mt-4'>
                <div className='col-4 p-4 fs-6'>
                    <p className='fs-4'><i className="fa-solid fa-indian-rupee-sign"></i> Funds</p>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Add money</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Withdraw money</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Add bank accounts</a>
                    <a className='d-block' href='' style={{textDecoration:"none",lineHeight:"2"}}>eMandates</a>
                </div>
                <div className='col-4 p-4 fs-6'>
                    <p className='fs-4'><i className="fa fa-user"></i> Console</p>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Portfolio</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Corporate actions</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Funds statement</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Reports</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Profile</a>
                    <a className='d-block' href='' style={{textDecoration:"none",lineHeight:"2"}}>Segments</a>
                </div>

                <div className='col-4 p-4 fs-6'>
                    <p className='fs-4'><i className="fa-solid fa-circle-notch"></i> Coin</p>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Mutual funds</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>National Pension Scheme (NPS)</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Features on Coin</a>
                    <a className='d-block mb-2' href='' style={{textDecoration:"none",lineHeight:"2"}}>Payments & Orders</a>
                    <a className='d-block' href='' style={{textDecoration:"none",lineHeight:"2"}}>General</a>
                </div>
            </div>

        </div>
    );    
}

export default CreateTicket;
