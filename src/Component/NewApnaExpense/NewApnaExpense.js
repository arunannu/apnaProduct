import React, { useState } from "react";
import  "./NewApnaExpense.css"
const NewApnaExpense = (props)=> {
    const [titelChanged , setTitleChanged] = useState("");
    const [amountChanged , setAmountChanged] = useState("");
    const [dateChanged , setDateChanged] = useState("");
    const onChangeTitleHandler = (event) => {
        setTitleChanged(event.target.value)
        console.log(event.target.value)
    }
    const onChangeAmountHandler = (event) => {
        setAmountChanged(event.target.value)
        console.log(event.target.value)
    
    }
    const onChangeDateHandler = (event) => {
        setDateChanged(event.target.value)
        console.log(event.target.value)        
    
    }
    return(
        <div className="newExpense">
        <form className="form">
            <label>Expense title</label>
            <input type="text" className="inputText" onChange = {onChangeTitleHandler} ></input>
            <label>Expense Amount</label>
            <input type="number" className="inputAmount" onChange={onChangeAmountHandler}></input><br></br>
            <label>Date</label>
            <input type="date" className="inputDate" onChange = {onChangeDateHandler} ></input>
            <button type="submit" className="button">Submit</button>
        </form>
        </div>
    )
}
export default NewApnaExpense;
