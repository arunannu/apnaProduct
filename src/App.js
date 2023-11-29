import React, { useState } from "react";

import NewExpense from "./Component/NewExpense";
import Expenses from "./Component/Expenses/Expenses";

const DOMMI_EXPENSE = () => {
  return [
    { id: "e1", title: "Car", date: new Date(2023, 1, 17), amount: 230000 },
    { id: "e2", title: "Tractor", date: new Date(2023, 1, 18), amount: 240000 },
    { id: "e3", title: "Truck", date: new Date(2023, 1, 19), amount: 250000 },
    { id: "e4 ", title: "JCB", date: new Date(2023, 1, 20), amount: 260000 },
  ];
};

const App = () => {
  const [expenses, setExpenses] = useState(DOMMI_EXPENSE());

  const onAddExpenseHandler = (expense) => { 
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
