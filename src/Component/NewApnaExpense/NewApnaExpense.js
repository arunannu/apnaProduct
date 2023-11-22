import React, { useState } from "react";
import  "./NewApnaExpense.css"
const NewApnaExpense = (props)=> {
    return(
        <div className="newExpense">
        <form className="form">
            <label>Expense title</label>
            <input type="text" className="inputText" ></input>
            <label>Expense Amount</label>
            <input type="number" className="inputAmount"></input><br></br>
            <label>Date</label>
            <input type="date" className="inputDate" ></input>
            <button type="submit" className="button">Submit</button>
        </form>
        </div>
    )
}
export default NewApnaExpense;