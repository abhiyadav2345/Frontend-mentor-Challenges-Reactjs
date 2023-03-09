import React from 'react'
const ResultCard = () => {
  return (
    
      <div className="card result">
        <h4 style={{color:"#D9D4FF"}}>Your Result</h4>
        <div className="marks">
          <h1 style={{ fontSize: "60px", marginTop: "60px" }}>76</h1>
          <h5 style={{color:"#D9D4FF"}}>of 100</h5>
        </div>
        <h3 style={{fontSize:"25px"}}>Great</h3>
        <p style={{color:"#D9D4FF"}}>Your scored higher than 65% of the people who have <br /> taken these tests. </p>
      </div>


 
  );
}

export default ResultCard;