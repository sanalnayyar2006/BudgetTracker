import React, { useState } from 'react';
import Navigation from './components/Navigation';
import BudgetTracker from './components/BudgetTracker';
import Debt from './components/Debt';
import Courses from './components/Courses';
import Login from './components/login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Track current page with state ('budget', 'debt', or 'courses')
  const [currentPage, setCurrentPage] = useState('budget');

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

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
