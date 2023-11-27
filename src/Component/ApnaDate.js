import React from 'react'

const ApnaDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div id="date">
      <div>{day}</div>
     <div>{month}</div>
     <div>{year}</div>
    </div>
  );
};
export default ApnaDate;
