import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-7">
          <img src={imageURL} alt={productName} style={{ width: "80%" }} />
        </div>
        <div className="col-5 mt-5 p-5">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDesc}</p>
          <div className="mt-3">
            {tryDemo && (
              <a href="" style={{ textDecoration: "none" }}>
                {tryDemo} <i className="fa fa-long-arrow-right"></i>
              </a>
            )}
            {learnMore && (
              <a href="" style={{ marginLeft: "50px", textDecoration: "none" }}>
                {learnMore} <i className="fa fa-long-arrow-right"></i>
              </a>
            )}
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
