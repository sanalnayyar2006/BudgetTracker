import React from 'react';
import './Debt.css';
function Debt() {
  const [debts, setDebts] = React.useState([]);
  const [creditor, setCreditor] = React.useState('');
  const [amount, setAmount] = React.useState('');
  function addDebt(e) {
    e.preventDefault();
    if (creditor.trim() === '' || amount === '' || isNaN(amount)) {
      return;
    }
    const newDebt = {
      id: Date.now(),
      creditor: creditor.trim(),
      amount: parseFloat(amount),
    };
    setDebts([...debts, newDebt]);
    setCreditor('');
    setAmount('');
  }
  var totalDebt = 0;
  for (let i = 0; i < debts.length; i++) {
    totalDebt += debts[i].amount;
  }