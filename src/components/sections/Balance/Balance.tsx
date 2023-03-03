import React from 'react';
import "./Balance.css"

export interface IBalance  {
  balance: number
}

const Balance = ({balance}: IBalance) => {
  console.log(balance)
  return (
    <div className="block-tag">
      <span className="money">
        {balance} $
      </span>
    </div>
  );
};

export default Balance;
