import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom'
function Navigation(props) {
  function onClickBudget() {
    props.onChangePage('budget');
  }
  function onClickDebt() {
    props.onChangePage('debt');
  }
  function onClickCourses() {
    props.onChangePage('courses');
  }

  return (
    <nav className="nav" aria-label="Main navigation">
      <button
        className={props.currentPage === 'budget' ? 'nav-btn active' : 'nav-btn'}
        onClick={onClickBudget}
      >
        Budget Tracker
      </button>
      <button
        className={props.currentPage === 'debt' ? 'nav-btn active' : 'nav-btn'}
        onClick={onClickDebt}
      >
        Debt
      </button>
      <button
        className={props.currentPage === 'courses' ? 'nav-btn active' : 'nav-btn'}
        onClick={onClickCourses}
      >
        Courses
      </button>
    </nav>
  );
}

export default Navigation;