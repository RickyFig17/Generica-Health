import React from "react";
import "./Brokers.scss";

function Brokers() {
  return (
    <>
      <h1>Brokers</h1>
      <BrokersHeader />
    </>
  );
}

function BrokersHeader() {
  return (
    <div>
      <h3>healthcare for Brokers</h3>
      <p>
        Partner with us to offer your clients the best in health insurance. Our
        comprehensive plans, competitive rates, and dedicated support make it
        easy for brokers to provide top-tier coverage. Expand your portfolio,
        boost client satisfaction, and grow your business with confidence. Join
        us today and unlock new opportunities!
      </p>
    </div>
  );
}

export default Brokers;
