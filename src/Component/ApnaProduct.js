import './Apna.css';
function ApnaProduct(props) {
  //const date = new Date(21, 9, 2023);

  return (
    <div className="main-div">
        <ul className="main">
      <li><p>{props.date.toLocaleString()}</p></li>
      <p>{props.title}</p>
      <p>₹{props.amount}</p>
      </ul>
    </div>
  );
}
export default ApnaProduct;
