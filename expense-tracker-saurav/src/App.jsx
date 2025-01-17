import React from 'react';
import './App.css';

import { BarChart } from '@mui/x-charts';

import Balance from './components/Balance/Balance';
import AddBalance from './components/Balance/AddBalance/AddBalance';
import AddExpense from './components/Balance/AddExpense/AddExpense';
import EditExpense from './components/Balance/EditExpense/EditExpense';
import Transactions from './components/Transactions/Transactions';

function App() {

  // states
  const [walletBalance, setWalletBalance] = React.useState(5000);
  const [addWalletBalance, setAddWalletBalance] = React.useState(false);
  const [totalExpense, setTotalExpense] = React.useState(0);
  const [expenses, setExpenses] = React.useState(undefined);
  const [data, setData] = React.useState([]);
  const [addExpense, setAddExpense] = React.useState(false);
  const [editExpense, setEditExpense] = React.useState(false);
  const [editableExpense, setEditableExpenses] = React.useState(undefined);

  // utils
  const openAddWalletBalanceWindow = () => {
    setAddWalletBalance(!addWalletBalance);
  }
  const addWalletBalanceUtil = (amount) => {
    setWalletBalance(walletBalance + Number(amount));
  }
  const toggleAddExpenseWindow = () => {
    setAddExpense(!addExpense);
  }
  const toggleEditExpenseWindow = (expense) => {
    setEditExpense(!editExpense);
    console.log("Editing : ", expense.title);
    setEditableExpenses(expense);
  }
  const addExpenseUtil = (expense) => {
    if (expenses) {
      setExpenses([...expenses, expense]);
    } else {
      setExpenses([expense]);
    }
  }
  const deleteExpense = (title) => {
    setExpenses(expenses.filter(expense => expense.title !== title));
    const deletedExpense = expenses.find(expense => expense.title === title);
    if (deletedExpense) {
      setWalletBalance(walletBalance + deletedExpense.price);
    }
  }
  const editExpenseUtil = (expense, newExpense) => {
    const updatedExpenses = expenses.map(e => e.title === expense.title ? newExpense : e);
    setExpenses(updatedExpenses);
    const total = expenses.reduce((acc, expense) => acc + expense.price, 0);
    setTotalExpense(total);
    console.log("New total expense : ", total);
  }

  React.useEffect(() => {
    console.log(expenses);
    if (expenses) {
      setData(expenses.map((expense, index) => ({ id: index, value: expense.price, label: expense.title })));
      const total = expenses.reduce((acc, expense) => acc + expense.price, 0);
      setTotalExpense(total);
      setWalletBalance(5000 - total);
    }
  }, [expenses])

  return (
    <div className="main-container">
      <div className="expense-tracker">
        <h1 className="">Expense Tracker</h1>
        <Balance walletBalance={walletBalance} openAddWalletBalanceWindow={openAddWalletBalanceWindow} totalExpense={totalExpense} toggleAddExpenseWindow={toggleAddExpenseWindow} data={data} />
      </div>

      <div className="data-rendering">
        <Transactions expenses={expenses} deleteExpense={deleteExpense} toggleEditExpenseWindow={toggleEditExpenseWindow} />
        <div className="barchart-container">
          <BarChart
            xAxis={[{ scaleType: 'band', data: expenses ? expenses.map(expense => expense.title) : [] }]}
            series={[{ data: expenses ? expenses.map(expense => expense.price) : [] }]}
            width={500}
            height={300}
          />
        </div>
      </div>

      {/* POPUPS */}
      {addWalletBalance && (<AddBalance openAddWalletBalanceWindow={openAddWalletBalanceWindow} addWalletBalanceUtil={addWalletBalanceUtil} />)}
      {addExpense && (<AddExpense toggleAddExpenseWindow={toggleAddExpenseWindow} addExpenseUtil={addExpenseUtil} />)}
      {editExpense && (<EditExpense toggleEditExpenseWindow={toggleEditExpenseWindow} editExpenseUtil={editExpenseUtil} editableExpense={editableExpense} />)}
    </div>
  )
}

export default App;
