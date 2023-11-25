import React from "react";
import NewApnaExpense from "./NewApnaExpense";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (NewApnaExpenseChanged)=>{
    const expenseData ={
      ...NewApnaExpenseChanged,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    
  }
  return (
    <div>
      <NewApnaExpense onSaveExpense={onSaveExpenseDataHandler}/>
    </div>
  );
};
export default NewExpense;
