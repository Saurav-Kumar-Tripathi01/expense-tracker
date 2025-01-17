import React from 'react';
import "./Expenses.css";

function Expenses({ totalExpense, toggleAddExpenseWindow }) {
    const addExpenseBtnHandler = event => {
        event.preventDefault();
        toggleAddExpenseWindow();
    }
    return (
        <div className="expenses-container">
            <div className="expenses">
                Expenses: <span>₹{totalExpense}</span>
            </div>
            <button onClick={addExpenseBtnHandler}>+ Add Expense</button>
        </div>
    )
}

export default Expenses;