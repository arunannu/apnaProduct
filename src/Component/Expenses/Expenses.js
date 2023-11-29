import Filter from "../Filter";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  let filterContent = <h2>No Expenses found.</h2>;
  if (filteredExpenses.length > 0) {
    filterContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Filter selected={filterYear} onChangeFilter={filterChangeHandler} />
      {filterContent}
    </div>
  );
};
export default Expenses;
