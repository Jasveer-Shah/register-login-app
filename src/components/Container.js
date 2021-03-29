import React from 'react'
import './Container.css'
function Container() {
    return (
      <div className="protected">
        <div className="container">
          <div className="Row1">
             <div className="salesvalue__chart"></div>
             <div className="total__order"></div>
          </div> 
          <div className="Row2">
             <div className="Page__visits"></div>
             <div className="social__traffic"></div>
          </div>
        </div>
      </div>
    )
}

export default Container


