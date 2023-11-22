import React, { useState } from "react";
import "./Apna.css";
import ApnaDate from "./ApnaDate";
const ApnaProduct = (props) => {
  const [amount, setTitle] = useState(props.amount);

  const click = () => {
    setTitle(100)

    console.log(amount);
  };

  return (
    <div className="outerDiv">
    <div className="main-div">
      <ApnaDate date={props.date} />

      <div id="title">{props.title}</div>
      <div id="amount">${amount}</div>

      <button onClick={click}>Change-Expense</button>
    </div>
    </div>
  );
};
export default ApnaProduct;
