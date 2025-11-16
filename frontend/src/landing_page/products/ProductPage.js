import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Hero from "./Hero";
function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try Demo"
        learnMore="Learn More"
        googlePlay=""
        appStore=""
      />
      <RightSection
        productName="Console"
        productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="Learn more"
        imageURL="media/images/console.png"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        // learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        productName="Kite Connect API"
        productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="Kite Connect"
        imageURL="media/images/kiteconnect.png"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Varsity mobile"
        productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        // tryDemo="Coin"
        // learnMore=""
        googlePlay=""
        appStore=""
      />
      <div className="row mt-5 p-5 text-center text-muted">
        <h5>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration:"none"}}>TradeX.tech</a> blog.</h5>
      </div>
      <Universe />
    </div>
  );
}

export default ProductPage;
