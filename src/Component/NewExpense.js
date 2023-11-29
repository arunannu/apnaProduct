import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [filterYear, setFilterYear] = useState('2023');
  const onSaveExpenseDataHandler = (NewApnaExpenseChanged)=>{
    const expenseData ={
      ...NewApnaExpenseChanged,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    
  }
//   const filterChangeHandler = selectedYear => {
//     setFilterYear(selectedYear);
//   }
  return (
    <>
    <div>
      <ExpenseForm onSaveExpense={onSaveExpenseDataHandler}/>
    </div>
    
    </>
  );
};
export default NewExpense;
