import React from 'react'

import { Reaction, Memory, Visual, Verbal } from "../assets/images/index.js"
const SummaryCard = () => {
  return (
  

      <div className="card">
        <div>
          <div className="items"><h4 style={{ textAlign: "left" }}>Summary</h4> </div>

          <div className="items"> <span style={{ display: "flex" }}> <img src={Reaction} /><h5 style={{ color: "hsl(0, 100%, 67%)" }}>  &nbsp; Reaction</h5> </span> <h5 >80<span style={{ color: "gray" }}>/100</span></h5> </div>
          <div className="items"> <span style={{ display: "flex" }}> <img src={Memory} /><h5 style={{ color: "hsl(39, 100%, 56%)" }}>  &nbsp; Memory</h5> </span><h5>92<span style={{ color: "gray" }}>/100</span></h5> </div>
          <div className="items"><span style={{ display: "flex" }}> <img src={Verbal} /><h5 style={{ color: "hsl(166, 100%, 37%)" }} >  &nbsp; Verbal</h5> </span><h5>61 <span style={{ color: "gray" }}>/100</span></h5> </div>
          <div className="items"><span style={{ display: "flex" }}> <img src={Visual} /><h5 style={{ color: "hsl(234, 85%, 45%)" }}>  &nbsp; Visual</h5> </span><h5>72<span style={{ color: "gray" }}>/100</span></h5> </div>
        </div>

        <button>Continue</button>
      </div>

   
  );
}

export default SummaryCard;