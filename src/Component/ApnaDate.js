import React from 'react';

const ApnaDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  const dateStyle = {
    height: '100px',
    width: '200px',
    position: 'relative',
    top: '45px',
    bottom: '50px',
    border: '2px solid',
    borderRadius: '20px',
    textAlign: 'center',
    margin: '20px',
    backgroundColor: 'gray',
  };

  return (
    <div style={dateStyle}>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
};

export default ApnaDate;
