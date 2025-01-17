import React from 'react';
import "./Transactions.css";

import food_img from "../../assets/food.png";
import travel_img from "../../assets/travel.png";
import entertainment_img from "../../assets/entertainment.png";

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';

function Transactions({ expenses, deleteExpense, toggleEditExpenseWindow }) {
    return (
        <div className="transactions-container">
            <h1>Recent Transactions</h1>
            {expenses &&
                expenses.map((expense, index) => (
                    <div key={index} className="expense-container">
                        <div className="left">
                            <div className="icon">
                                <img src={expense.category === "entertainment" ? entertainment_img : expense.category === "travel" ? travel_img : food_img} alt="expense category icon" />
                            </div>
                            <div className="title-date">
                                <div className="title">{expense.title}</div>
                                <div className="date">{expense.date}</div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="price">₹{expense.price}</div>
                            <div className="buttons">
                                <div onClick={() => deleteExpense(expense.title)} className="delete">
                                    <HighlightOffIcon className='icn' />
                                </div>
                                <div onClick={() => toggleEditExpenseWindow(expense)} className="edit">
                                    <EditIcon className='icn' />
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Transactions;