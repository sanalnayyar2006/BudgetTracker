import React, { useState } from 'react';
import './BudgetTracker.css';

function BudgetTracker() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  function handleAddItem(e) {

  
  }

  const total = items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <section className="budget-tracker">
      <h2 className="budget-title">Budget Tracker</h2>
      <form onSubmit={handleAddItem} className="budget-form">
        <input
          type="text"
          className="budget-input"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          aria-label="Description"
          required
        />
        <input
          type="number"
          step="0.01"
          className="budget-input"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          aria-label="Amount"
          required
        />
        <button type="submit" className="budget-add-button">
          Add
        </button>
      </form>

      {items.length === 0 ? (
        <p className="budget-noitems">No budget items added yet.</p>
      ) : (
        <ul className="budget-list">
          {items.map(item => (
            <li key={item.id} className="budget-list-item">
              <span>{item.description}</span>
              <span className="budget-amount"></span>
            </li>
          ))}
        </ul>
      )}
      <div className="budget-total">
        Total Budget: 
      </div>
    </section>
  );
}

export default BudgetTracker;