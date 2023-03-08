import React from 'react'
const SummaryCard = () => {
  return (
    <div className="container">

      <div className="card">
        <div>
          <h4 style={{ textAlign: "left" }}>Summary</h4>
          <div className="items"><h5>Reaction</h5> <h5>80/100</h5> </div>
          <div className="items"><h5>Reaction</h5> <h5>80/100</h5> </div>
          <div className="items"><h5>Reaction</h5> <h5>80/100</h5> </div>
          <div className="items"><h5>Reaction</h5> <h5>80/100</h5> </div>
        </div>

        <button>Continue</button>
      </div>

    </div>
  );
}

export default SummaryCard;