import React from 'react'
const ResultCard = () => {
  return (
    <div className="container ">
      <div className="card result">
        <h4>Your Result</h4>
        <div className="marks">
          <h1 style={{ fontSize: "60px", marginTop: "60px" }}>76</h1>
          <h5>of 100</h5>
        </div>
        <h3>Great</h3>
        <p>Your scored higher than 65% of the people who have <br /> taken these tests. </p>
      </div>


    </div >
  );
}

export default ResultCard;