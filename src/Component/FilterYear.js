import React from "react";
const FilterYear = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="filter-div">
      <h4>Expense Filter</h4>
    <select id="year" value = {props.selected} onChange={dropdownChangeHandler}>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
    </select>
    </div>
  );
};
export default FilterYear;
