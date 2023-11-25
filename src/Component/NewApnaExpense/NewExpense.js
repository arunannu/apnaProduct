import React from "react";
import { v4 as uuidv4 } from 'uuid';
import NewApnaExpense from "./NewApnaExpense";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (newApnaExpenseChanged) => {
    const expenseData = {
      ...newApnaExpenseChanged,
      id: uuidv4(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div>
      <NewApnaExpense onSaveExpense={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
