import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-3 mb-5">
        <h1 className="fs-3 text-center">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.5", fontSize: "1.1em" }}
      >
        <div className="col-6 p-3 text-center">
          <img src="media/images/nithinKamath.jpg" style={{width:"50%",borderRadius:"100%"}}/>
            <h2 className="mt-3">Nithin Kamath</h2>
            <p>Founder & CEO</p>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded TradeX in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            TradeX has changed the landscape of the Indian broking industry.
          </p>
          <br />

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <br />

          <p>
            Playing basketball is his zen.
          </p>
          <p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
