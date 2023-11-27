import React, { useState } from "react";
import ApnaProduct from "./Component/ApnaProduct";
import NewExpense from "./Component/NewApnaExpense/NewExpense";


const DOMMI_EXPENSE = () => {
  return [
    { title: "Car", date: new Date(2023, 1, 17), amount: 230000 },
    { title: "Tractor", date: new Date(2023, 1, 18), amount: 240000 },
    { title: "Truck", date: new Date(2023, 1, 19), amount: 250000 },
    { title: "JCB", date: new Date(2023, 1, 20), amount: 260000 },
  ];
};

const App = () => {
  const [productList, setproductList] = useState(DOMMI_EXPENSE());

  const onAddExpenseHandler1 = (expense) => {
    setproductList((prevProductList) => {
      return [expense, ...prevProductList];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={onAddExpenseHandler1} />
      {productList.map((expense, index) => (
        <ApnaProduct
          key={index}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </>
  );
};

export default App;
