import React from 'react';
import './Courses.css';

function Courses() {
  var coursesState = React.useState([]);
  var courses = coursesState[0];
  var setCourses = coursesState[1];

  var titleState = React.useState('');
  var title = titleState[0];
  var setTitle = titleState[1];

  var instructorState = React.useState('');
  var instructor = instructorState[0];
  var setInstructor = instructorState[1];

  function addCourse(e) {
    if (title.trim() !== '' && instructor.trim() !== '') {
      setTitle('');
      setInstructor('');
    }
  }

  return (
    <section>
      <h2 className="courses-title">Courses</h2>
      <form onSubmit={addCourse} className="courses-form">
        <input
          type="text"
          className="courses-input"
          placeholder="Course Title"
          value={title}
          onChange={function (e) { setTitle(e.target.value); }}
          aria-label="Course Title"
          required
        />
        <input
          type="text"
          className="courses-input"
          placeholder="Instructure"
          value={instructor}
          onChange={function (e) { setInstructor(e.target.value); }}
          aria-label="Instructor"
          required
        />
        <button type="submit" className="courses-add-button" aria-label="Add Course">Search Course</button>
      </form>


    </section>
  );
}

export default Courses;