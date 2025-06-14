import React from 'react';
import './Debt.css';

function Debt() {
  const [debts, setDebts] = React.useState([]);
  const [creditor, setCreditor] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const [editId, setEditId] = React.useState(null);
  const [editCreditor, setEditCreditor] = React.useState('');
  const [editAmount, setEditAmount] = React.useState('');

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

  function startEdit(debt) {
    setEditId(debt.id);
    setEditCreditor(debt.creditor);
    setEditAmount(debt.amount.toString());
  }

  function cancelEdit() {
    setEditId(null);
    setEditCreditor('');
    setEditAmount('');
  }

  function saveEdit(e) {
    e.preventDefault();
    if (editCreditor.trim() === '' || editAmount === '' || isNaN(editAmount)) {
      return;
    }

    const updatedDebts = debts.map(debt => {
      if (debt.id === editId) {
        return {
          ...debt,
          creditor: editCreditor.trim(),
          amount: parseFloat(editAmount),
        };
      }
      return debt;
    });

    setDebts(updatedDebts);
    cancelEdit();
  }

  var totalDebt = debts.reduce((acc, debt) => acc + debt.amount, 0);

  return (
    <section>
      <h2 className="debt-title">Debt Management</h2>
      <form onSubmit={addDebt} className="debt-form">
        <input
          type="text"
          className="debt-input"
          placeholder="Creditor"
          value={creditor}
          onChange={e => setCreditor(e.target.value)}
          aria-label="Creditor"
          required
        />
        <input
          type="number"
          step="0.01"
          className="debt-input"
          placeholder="Amount Owed"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          aria-label="Amount Owed"
          required
        />
        <button type="submit" className="debt-add-button" aria-label="Add Debt">Add Debt</button>
      </form>

      {debts.length > 0 ? (
        <ul className="debt-list">
          {debts.map(debt => (
            <li key={debt.id} className="debt-list-item">
              {editId === debt.id ? (
                <form onSubmit={saveEdit} className="edit-form">
                  <input
                    type="text"
                    className="debt-input"
                    value={editCreditor}
                    onChange={e => setEditCreditor(e.target.value)}
                    required
                  />
                  <input
                    type="number"
                    step="0.01"
                    className="debt-input"
                    value={editAmount}
                    onChange={e => setEditAmount(e.target.value)}
                    required
                  />
                  <button type="submit" className="save-button">Save</button>
                  <button type="button" onClick={cancelEdit} className="cancel-button">Cancel</button>
                </form>
              ) : (
                <>
                  <span>{debt.creditor}</span>
                  <span className="debt-amount">${debt.amount.toFixed(2)}</span>
                  <button onClick={() => startEdit(debt)} className="edit-button" aria-label={`Edit ${debt.creditor}`}>Edit</button>
                </>
              )}
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
function deleteDebt(id) {
  const updatedDebts = debts.filter(debt => debt.id !== id);
  setDebts(updatedDebts);
}

export default Debt;
