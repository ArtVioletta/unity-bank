import React from 'react';
import {IPayment, IPaymentItem} from "../../../shared/interfaces/IPayment";
import styled, {css} from 'styled-components';
import {IPaymentAmount} from "../../../shared/interfaces/IPaymentAmount";
import './Payment.css'

const Payment = ({payment}: IPayment) => {
  if (payment.length === 0) {
    return (
      <div className="payment-list" key={payment.key}>
        <div className="empty">No transactions</div>
      </div>
    );
  }

  if (payment.length === 1) {
    return (
      <div className="payment-list">
        <div className="empty">You have one transaction</div>
      </div>
    );
  }
  return <div className="payment-list">{payment.map(PaymentItem)}</div>;
}


  const PaymentItem = ({name, amount, type}: IPaymentItem) => {
    return(
    <div className="payment-block" >
      <div className="payment-icon">
        <img src="/icon/payment.svg" width="30px" height="30px" alt="icon" />
      </div>
      <div className="payment-text">
        {name}
      </div>
      <div className="payment-amount">
        {type}  {amount}$
      </div>
    </div>
  )
  }


const PaymentAmount = styled.div<{ type: IPaymentAmount['type'] }>`
    color: ${(props) => {
    if (props.type === "+") return "green";
    if (props.type === "-") return "red";
    if (props.type === "*") return "blue";
    return "#fff";
  }};
  `;






export default Payment;
