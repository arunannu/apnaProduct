import React from "react";
import "./Apna.css";
import ApnaDate from "./ApnaDate";
const ApnaProduct = (props) => {
  // //const date = new Date(21, 9, 2023);
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const year = props.date.getFullYear();
  const click = () => {
    console.log("deleted-expenses");
  };

  return (
    <div className="main-div">
      
        <ApnaDate date={props.date} />
        
        <div id="title">{props.title}</div>
        <div id="amount">₹{props.amount}</div>
      
      <button onClick={click}>Delete-Expense</button>
    </div>
  );
};
export default ApnaProduct;
