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
        <input
          type="number"
          step="0.01"
          className="debt-input"
          placeholder="Amount Owed"
          value={amount}
          onChange={function (e) { setAmount(e.target.value); }}
          aria-label="Amount Owed"
          required
        />
        <button type="submit" className="debt-add-button" aria-label="Add Debt">Add Debt</button>
      </form>

      {debts.length > 0 ? (
        <ul className="debt-list">
          {debts.map(debt => (
            <li key={debt.id} className="debt-list-item">
              <span>{debt.creditor}</span>
              <span className="debt-amount">${debt.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="debt-noitems">No debts added yet.</p>
      )}

      <div className="debt-total">Total Debt: ${totalDebt.toFixed(2)}</div>
    </section>
  );
}
const [editId, setEditId] = React.useState(null);
const [editCreditor, setEditCreditor] = React.useState('');
const [editAmount, setEditAmount] = React.useState('');

export default Debt;
