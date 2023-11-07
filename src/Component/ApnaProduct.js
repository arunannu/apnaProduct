import "./Apna.css";
import ApnaDate from "./ApnaDate";
const ApnaProduct = (props) => {
  //const date = new Date(21, 9, 2023);
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="main-div">
      <ul>
        <div>
          <li>
            {" "}
            <ApnaDate date={props.date} />
          </li>
        </div>
        <li>{props.title}</li>
        <li>{props.amount}</li>
      </ul>
    </div>
  );
};
export default ApnaProduct;
