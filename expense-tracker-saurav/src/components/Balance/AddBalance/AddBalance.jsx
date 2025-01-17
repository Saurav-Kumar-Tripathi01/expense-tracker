import React from 'react';
import "./AddBalance.css";

function AddBalance({ openAddWalletBalanceWindow, addWalletBalanceUtil }) {

    // states (local)
    const [toBeBalance, setToBeBalance] = React.useState(undefined);

    // callbacks
    const cancleBtnHandler = event => {
        event.preventDefault();
        openAddWalletBalanceWindow();
    }
    const addBtnHandler = event => {
        event.preventDefault();
        if (toBeBalance) {
            addWalletBalanceUtil(toBeBalance);
            openAddWalletBalanceWindow();
        }
    }
    return (
        <div className="add-balance-container">
            <div className="add-balance">
                <h1>Add Balance</h1>
                <form>
                    <input type="number" placeholder='Income Amount' value={toBeBalance} onChange={event => setToBeBalance(event.target.value)} />
                    <button onClick={addBtnHandler} className='add-btn'>Add Balance</button>
                    <button onClick={cancleBtnHandler} className='cancle-btn'>Cancle</button>
                </form>
            </div>
        </div>
    )
}

export default AddBalance;