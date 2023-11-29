import React from "react";
import './ExpenseDate'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // const [amount, setTitle] = useState(props.amount);

  // const click = () => {
  //   setTitle(100);

  //   console.log(amount);
  // };

  return (
    <div className="outerDiv">
      <div className="main-div" >
        
        <ExpenseDate date={props.date} />

        <div id="title">{props.title}</div>
        <div id="amount">${props.amount}</div>

        {/* <button onClick={click}>Change-Expense</button> */}
      </div>
    </div>
  );
};
export default ExpenseItem;
