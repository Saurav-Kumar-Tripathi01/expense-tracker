import React from 'react';
import "./AddExpense.css";
import { expense_category } from '../../../static';

function AddExpense({ toggleAddExpenseWindow, addExpenseUtil }) {

    const [expense, setExpense] = React.useState({
        title: "",
        price: undefined,
        category: "",
        date: "",
    });

    const cancleBtnHandler = event => {
        event.preventDefault();
        toggleAddExpenseWindow();
    }
    const addBtnHandler = event => {
        event.preventDefault();
        if (expense.price) {
            addExpenseUtil(expense);
            toggleAddExpenseWindow();
        }
    }
    return (
        <div className="add-expense-container">
            <form>
                <h1>Add Expenses</h1>
                <span className="waste"></span>
                <input type="text" placeholder='Title' value={expense.title} onChange={event => setExpense({ ...expense, title: event.target.value })} />
                <input type="number" placeholder='Price' value={expense.price} onChange={event => setExpense({ ...expense, price: Number(event.target.value) })} />
                <select name="expense_category" id="expense_category" value={expense.category} onChange={event => setExpense({ ...expense, category: event.target.value })}>
                    {
                        expense_category.map((category, index) => (
                            <option key={index} value={category}>{category[0].toUpperCase() + category.slice(1)}</option>
                        ))
                    }
                </select>
                <input type="date" value={expense.date} onChange={event => setExpense({ ...expense, date: event.target.value })} />
                <div className="buttons">
                    <button onClick={addBtnHandler} className='add-btn'>Add Expense</button>
                    <button onClick={cancleBtnHandler} className='cancle-btn'>Cancle</button>
                </div>
            </form>
        </div>
    )
}

export default AddExpense;