import React from 'react'
import MasterCard from '../../assets/all-images/master-card.jpg'

const Payment = () => {
  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" />
          Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" />
          Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" />
         Master Card Payment
        </label>

        <img src={MasterCard} alt=""/>
      </div>
    </>
  );
}

export default Payment