import React, { useState } from 'react';
import './BudgetTracker.css';

function BudgetTracker() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food'); // default category

  function handleAddItem(e) {
    e.preventDefault();
    if (description.trim() === '' || amount === '' || isNaN(amount)) {
      return;
    }
    const newItem = {
      id: Date.now(),
      description: description.trim(),
      amount: parseFloat(amount),
      category: category,
    };
    setItems([...items, newItem]);
    setDescription('');
    setAmount('');
    setCategory('Food'); // reset to default
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
        <select
          className="budget-select"
          value={category}
          onChange={e => setCategory(e.target.value)}
          aria-label="Category"
        >
          <option value="Food">Food</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Entertainment">Entertainment</option>
        </select>
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
              <span>
                <strong>{item.category}</strong> - {item.description}
              </span>
              <span className="budget-amount">${item.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="budget-total">
        Total Budget: <strong>${total.toFixed(2)}</strong>
      </div>
    </section>
  );
}

export default BudgetTracker;
