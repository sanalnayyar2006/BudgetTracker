import React from 'react';
import './Debt.css';

function Debt() {
  var debtsState = React.useState([]);
  var debts = debtsState[0];
  var setDebts = debtsState[1];

  var creditorState = React.useState('');
  var creditor = creditorState[0];
  var setCreditor = creditorState[1];

  var amountState = React.useState('');
  var amount = amountState[0];
  var setAmount = amountState[1];

  function addDebt(e) {
    e.preventDefault();
    if (creditor.trim() !== '' && amount !== '' && !isNaN(amount)) {
      var newDebt = {
        id: Date.now(),
        creditor: creditor.trim(),
        amount: parseFloat(amount)
      };
      setDebts(debts.concat(newDebt));
      setCreditor('');
      setAmount('');
    }
  }

  var totalDebt = 0;
  for (var i = 0; i < debts.length; i++) {
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

      {debts.length === 0 ? (
        <p className="debt-noitems">No debts added yet.</p>
      ) : (
        <ul className="debt-list" aria-live="polite">
          {debts.map(function (debt) {
            return (
              <li key={debt.id} className="debt-list-item">
                <span>{debt.creditor}</span>
                <span className="debt-amount">${debt.amount.toFixed(2)}</span>
              </li>
            );
          })}
        </ul>
      )}
      <div className="debt-total">
        Total Debt: <strong>${totalDebt.toFixed(2)}</strong>
      </div>
    </section>
  );
}

export default Debt;