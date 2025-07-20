import React, { useState } from 'react';
import Navigation from './components/Navigation';
import BudgetTracker from './components/BudgetTracker';
import Debt from './components/Debt';
import Courses from './components/Courses';
import './App.css';

function App() {
  // Track current page with state ('budget', 'debt', or 'courses')
  const [currentPage, setCurrentPage] = useState('budget');

  // Render the current page component
  const renderPage = () => {
    switch (currentPage) {
      case 'debt':
        return <Debt />;
      case 'courses':
        return <Courses />;
      default: // Default to BudgetTracker
        return <BudgetTracker />;
    }
  };

  return (
    <div className="app-container">
      {/* Navigation bar to switch pages */}
      <Navigation 
        currentPage={currentPage} 
        onChangePage={setCurrentPage} 
      />
      
      {/* Main content area */}
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
