import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import BudgetTracker from './components/BudgetTracker';
import Debt from './components/Debt';
import Courses from './components/Courses';
import Login from './components/login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {isLoggedIn && <Navigation />}
        <main className="main-content">
          <Routes>
            <Route
              path="/login"
              element={
                isLoggedIn
                  ? <Navigate to="/budget" />
                  : <Login onLogin={() => setIsLoggedIn(true)} />
              }
            />
            <Route
              path="/budget"
              element={
                isLoggedIn
                  ? <BudgetTracker />
                  : <Navigate to="/login" />
              }
            />
            <Route
              path="/debt"
              element={
                isLoggedIn
                  ? <Debt />
                  : <Navigate to="/login" />
              }
            />
            <Route
              path="/courses"
              element={
                isLoggedIn
                  ? <Courses />
                  : <Navigate to="/login" />
              }
            />
            {/* Default route */}
            <Route
              path="*"
              element={<Navigate to={isLoggedIn ? "/budget" : "/login"} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;