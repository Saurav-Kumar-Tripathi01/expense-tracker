import React from 'react';
import "./WalletBalance.css";

function WalletBalance({ walletBalance, openAddWalletBalanceWindow }) {

    const addIncomeBtnHandler = event => {
        event.preventDefault();
        openAddWalletBalanceWindow();
    }
    return (
        <div className="wallet-balance-container">
            <div className="wallet-balance">
                Wallet Balance: <span>₹{walletBalance}</span>
            </div>
            <button onClick={addIncomeBtnHandler}>+ Add Income</button>
        </div>
    )
}

export default WalletBalance;