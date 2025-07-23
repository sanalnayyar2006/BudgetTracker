import React, { useState } from 'react';
import './Courses.css';

function Courses() {
  // Sample money management courses data
  const [courses, setCourses] = useState([
    { id: 1, title: 'Personal Finance 101', duration: '4 weeks', provider: 'Coursera', completed: false },
    { id: 2, title: 'Investment Strategies', duration: '6 weeks', provider: 'Udemy', completed: false },
    { id: 3, title: 'Retirement Planning', duration: '3 weeks', provider: 'edX', completed: false },
    { id: 4, title: 'Budgeting Basics', duration: '2 weeks', provider: 'Skillshare', completed: false },
    { id: 5, title: 'Debt Management', duration: '5 weeks', provider: 'LinkedIn Learning', completed: false },
    { id: 6, title: 'Tax Planning', duration: '4 weeks', provider: 'Khan Academy', completed: false },
    { id: 7, title: 'Real Estate Investing', duration: '8 weeks', provider: 'Coursera', completed: false },
    { id: 8, title: 'Stock Market Fundamentals', duration: '6 weeks', provider: 'Udemy', completed: false }
  ]);

  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('title');

  // Filtering courses
  const filteredCourses = courses.filter(course => {
    if (filter === 'completed') return course.completed;
    if (filter === 'pending') return !course.completed;
    return true;
  });

  // Sorting courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    if (sortBy === 'duration') return a.duration.localeCompare(b.duration);
    return 0;
  });

  const toggleCompletion = (id) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, completed: !course.completed } : course
    ));
  };

  return (
    <div className="courses-container">
      <h2>Money Management Courses</h2>

      <ul className="course-list">
        {sortedCourses.map(course => (
          <li key={course.id} className={`course-item ${course.completed ? 'completed' : ''}`}>
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.duration}  {course.provider}</p>
            </div> 
            <button 
              onClick={() => toggleCompletion(course.id)}
              className="completion-toggle"
            >
              {course.completed ? ' Completed' : 'Mark Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
