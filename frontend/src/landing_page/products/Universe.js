import React from "react";
function Universe() {
  return (
    <div className="container mt-2 p-5">
      <div className="row text-center">
        <h3>The TradeX Universe</h3>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center mt-3 p-4 g-1">
        <div className="col">
          <img
            src="media/images/TradeXFundHouse.png"
            alt="TradeX fund house"
            style={{ width: "35%" }}
          />
          <p style={{ fontSize: "12px" }} className="mt-1 text-muted">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col">
          <img
            src="media/images/sensibullLogo.svg"
            alt="seleibull"
            style={{ width: "60%" }}
          />
          <p style={{ fontSize: "12px" }} className="mt-4 text-muted">
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col">
          <img
            src="media/images/tijori.svg"
            alt="tijori"
            style={{ width: "40%" }}
          />
          <p style={{ fontSize: "12px" }} className="mt-2 text-muted">
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row text-center p-4 g-1">
        <div className="col">
          <img
            src="media/images/streakLogo.png"
            alt="streak logo"
            style={{ width: "50%" }}
          />
          <p style={{ fontSize: "12px" }} className="mt-3 text-muted">
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>
        <div className="col">
          <img
            src="media/images/smallcaseLogo.png"
            alt="small case"
            style={{ width: "60%" }}
          />
          <p style={{ fontSize: "12px" }} className="mt-4 text-muted">
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col">
          <img
            src="media/images/dittoLogo.png"
            alt="dittoLogo"
            style={{ width: "40%" }}
          />
          <p style={{ fontSize: "12px" }} className="mt-4 text-muted">
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <a className="btn btn-primary mt-4" style={{width:"15%",margin:"0 auto",fontSize:"20px"}}>Sign up for free</a>
      </div>
    </div>
  );
}

export default Universe;
