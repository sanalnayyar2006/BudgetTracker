import React, { useState } from 'react';
import Navigation from './components/Navigation';
import BudgetTracker from './components/BudgetTracker';
import Debt from './components/Debt';
import Courses from './components/Courses';
import './App.css';

function App() {
  let pageState = useState('budget');
  let page = pageState[0];
  let setPage = pageState[1];

  function renderPage() {
    if (page === 'budget') {
      return <BudgetTracker />;
    } else if (page === 'debt') {
      return <Debt />;
    } else if (page === 'courses') {
      return <Courses />;
    } else {
      return <BudgetTracker />;
    }
  }

  return (
    <div className="app-container">
      <Navigation currentPage={page} onChangePage={setPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;