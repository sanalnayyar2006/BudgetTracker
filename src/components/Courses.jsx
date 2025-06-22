import React, { useState } from 'react';
import './Courses.css';

function Courses() {
  // Sample money management courses data
  const [courses, setCourses] = useState([
    { id: 1, title: 'Personal Finance 101', duration: '4 weeks', provider: 'Coursera', completed: false },
    { id: 2, title: 'Investment Strategies', duration: '6 weeks', provider: 'Udemy', completed: false },
    { id: 3, title: 'Retirement Planning', duration: '3 weeks', provider: 'edX', completed: false }
  ]);