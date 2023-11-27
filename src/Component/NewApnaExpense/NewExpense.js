import React, { useState } from "react";
import NewApnaExpense from "./NewApnaExpense";
import FilterYear from "../FilterYear";
const NewExpense = (props) => {
  const [filterYear, setFilterYear] = useState('2020');
  const onSaveExpenseDataHandler = (NewApnaExpenseChanged)=>{
    const expenseData ={
      ...NewApnaExpenseChanged,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    
  }
  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  }
  return (
    <>
    <div>
      <NewApnaExpense onSaveExpense={onSaveExpenseDataHandler}/>
    </div>
    <FilterYear selected={FilterYear} onchangeFilter = {filterChangeHandler}/>
    </>
  );
};
export default NewExpense;
