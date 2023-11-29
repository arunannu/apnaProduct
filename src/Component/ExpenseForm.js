import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [titelChanged, setTitleChanged] = useState("");
  const [amountChanged, setAmountChanged] = useState("");
  const [dateChanged, setDateChanged] = useState("");

  const onChangeTitleHandler = (event) => {
    setTitleChanged(event.target.value);
  };
  const onChangeAmountHandler = (event) => {
    setAmountChanged(event.target.value);
  };
  const onChangeDateHandler = (event) => {
    setDateChanged(event.target.value);
  };
  const fromSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titelChanged,
      amount: amountChanged,
      date: new Date(dateChanged),
    };
    props.onSaveExpense(expenseData)
  };
  return (
    <div className="newExpense">
      <form className="form" onSubmit={fromSubmit}>
        <label>Expense title</label>
        <input
          type="text"
          className="inputText"
          onChange={onChangeTitleHandler}
        ></input>
        <label>Expense Amount</label>
        <input
          type="number"
          className="inputAmount"
          onChange={onChangeAmountHandler}
        ></input>
        <br></br>
        <label>Date</label>
        <input
          type="date"
          className="inputDate"
          onChange={onChangeDateHandler}
        ></input>
        <button type="submit" className="button">
          Add Expense
        </button>
      </form>
    </div>
  );
};
export default ExpenseForm;
