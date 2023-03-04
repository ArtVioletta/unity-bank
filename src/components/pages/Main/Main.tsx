import React from 'react';
import { IPaymentItem} from "../../../shared/interfaces/IPayment";
import Payment from "../../sections/Payment/Payment";
import Menu from "../../sections/Menu/Menu";
import Balance from "../../sections/Balance/Balance";
import Header from "../../sections/Header/Header";
import Page from "../../sections/Page/Page";
import {COURSE_PRICE, GET_MONEY, LIMIT_BALANCE, SALARY_AMOUNT, START_BALANCE} from "../../../data/menuConfigurations";
import get from '../../../assets/get.svg'
import money from '../../../assets/money.svg'
import another from '../../../assets/another.svg'


const Main = () => {
  const [balance, setBalance] = React.useState(START_BALANCE);

  React.useEffect(() => {
    if (balance > LIMIT_BALANCE) {
      alert(`Your balance limit: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }
    if (balance < 0) {
      alert(`You have used all your money. Top up your card`);
      // setBalance(0);
    }
  }, [balance]);

  const [payment, setPayment] = React.useState<IPaymentItem[]>([]);

  const getMoney = () => setBalance(balance + GET_MONEY);

  const getSalary = () => {
    setBalance(balance + SALARY_AMOUNT);

    setPayment([
      {
        name: "Salary",
        amount: SALARY_AMOUNT,
        type: "+"
      },
      ...payment
    ]);
  };

  const buyCourse = () => {
    setBalance(balance - COURSE_PRICE);

    setPayment([
      {
        name: "Payment rate",
        amount: COURSE_PRICE,
        type: "-"
      },
      ...payment
    ]);
  };

  const buyFood = () => {
    setBalance(balance - 20);

    setPayment([
      {
        name: "Buying food",
        amount: 20,
        type: "-"
      },
      ...payment
    ]);
  };

  const HelloWorld = () => alert("Hello world!");

  return (
    <Page>
      <Header name="UNITY BANK" onClick={HelloWorld} />
      <Balance balance={balance} />
      <Menu
        config={[
          {
            name: "Top up your balance",
            onClick: getMoney,
            img: get
          },
          {
            name: "Get a salary",
            onClick: getSalary,
            img: money
          },
          {
            name: "Buy a course",
            onClick: buyCourse,
            img: another
          },
          {
            name: "Buy food at Glovo",
            onClick: buyFood,
            img: another
          }
        ]}
      />
      <Payment payment={payment} />
    </Page>
  );
};

export default Main;
