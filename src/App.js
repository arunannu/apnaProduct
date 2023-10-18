import logo from "./logo.svg";
import "./App.css";
import ApnaProduct from "./Component/ApnaProduct";
function App() {
  const productList = [
    { title: "Car", date: new Date(2023, 1, 17), amount: 230000 },
    { title: "Tractor", date: new Date(2023, 1, 18), amount: 240000 },
    { title: "Truck", date: new Date(2023, 1, 19), amount: 250000 },
    { title: "JCB", date: new Date(2023, 1, 20), amount: 260000 },
  ];
  return (
    <>
    {/* <div className="App"> */}
    
      <h1>This is Arun Kushwaha.</h1>
      {/* <p>{date}</p>
      <p>{product}</p>
      <p>{amount}</p> */}
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
    {/* </div> */}
</>
  );
}

export default App;
