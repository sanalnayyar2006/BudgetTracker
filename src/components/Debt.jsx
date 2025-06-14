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
  return (
    <section>
      <h2 className="debt-title">Debt Management</h2>
      <form onSubmit={addDebt} className="debt-form">
        <input
          type="text"
          className="debt-input"
          placeholder="Creditor"
          value={creditor}
          onChange={function (e) { setCreditor(e.target.value); }}
          aria-label="Creditor"
          required
        />