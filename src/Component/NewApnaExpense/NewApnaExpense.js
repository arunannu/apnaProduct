import React, { useState } from "react";
import "./NewApnaExpense.css";

const NewApnaExpense = (props) => {
  const [titleChanged, setTitleChanged] = useState("");
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
      title: titleChanged,
      amount: amountChanged,
      date: dateChanged,
    };

    props.onSaveExpense(expenseData);
  };

  return (
    <div className="newExpense">
      <form className="form" onSubmit={fromSubmit}>
        <label>Expense title</label>
        <input
          type="text"
          className="inputText"
          onChange={onChangeTitleHandler}
        />
        <label>Expense Amount</label>
        <input
          type="number"
          className="inputAmount"
          onChange={onChangeAmountHandler}
        />
        <br />
        <label>Date</label>
        <input
          type="date"
          className="inputDate"
          onChange={onChangeDateHandler}
        />
        <button type="submit" className="button">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default NewApnaExpense;
