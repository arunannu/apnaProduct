import React from "react";
import ApnaProduct from "./Component/ApnaProduct";
import NewExpense from "./Component/NewApnaExpense/NewExpense";
const App = () => {
  const productList = [
    { title: "Car", date: new Date(2023, 1, 17), amount: 230000 },
    { title: "Tractor", date: new Date(2023, 1, 18), amount: 240000 },
    { title: "Truck", date: new Date(2023, 1, 19), amount: 250000 },
    { title: "JCB", date: new Date(2023, 1, 20), amount: 260000 },
  ];
  const onAddExpenseHandler1 = expense =>{
    console.log("in app js")
    console.log(expense)
  }
  return (
    <>
      <NewExpense onAddExpense={onAddExpenseHandler1} /> 
      <ApnaProduct
        title={productList[0].title}
        date={productList[0].date}
        amount={productList[0].amount}
      />
      <ApnaProduct
        title={productList[1].title}
        date={productList[1].date}
        amount={productList[1].amount}
      />
      <ApnaProduct
        title={productList[2].title}
        date={productList[2].date}
        amount={productList[2].amount}
      />
      <ApnaProduct
        title={productList[3].title}
        date={productList[3].date}
        amount={productList[3].amount}
      />
    </>
  );
};

export default App;
