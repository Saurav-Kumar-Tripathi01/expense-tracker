import React from 'react';
import "./Balance.css";

import WalletBalance from './WalletBalance/WalletBalance';
import Expenses from './Expenses/Expenses';
import PieChartComp from '../PieChart/PieChart';

function Balance({ walletBalance, openAddWalletBalanceWindow, totalExpense, toggleAddExpenseWindow, data }) {
    return (
        <div className="balance-container">
            <div className="left">
                <WalletBalance walletBalance={walletBalance} openAddWalletBalanceWindow={openAddWalletBalanceWindow} />
                <Expenses totalExpense={totalExpense} toggleAddExpenseWindow={toggleAddExpenseWindow} />
            </div>
            <div className="right">
                <PieChartComp data={data} />
            </div>
        </div>
    )
}

export default Balance;