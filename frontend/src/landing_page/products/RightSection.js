import React from 'react'
function RightSection({productName,productDesc,tryDemo,imageURL}) {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-5 p-5' style={{marginTop:"130px"}}>
                    <h1 className='fs-3'>{productName}</h1>
                    <p>{productDesc}</p>
                    <div className='mt-3'>
                    <a href='' style={{textDecoration:"none"}}>{tryDemo}<i class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
                <div className='col-7'>
                    <img src={imageURL} alt={productName} style={{width:"85%"}}/>
                </div>
            </div>
        </div>
     );
}
export default RightSection;