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
    e.preventDefault();
    if (title.trim() !== '' && instructor.trim() !== '') {
      var newCourse = {
        id: Date.now(),
        title: title.trim(),
        instructor: instructor.trim()
      };
      setCourses(courses.concat(newCourse));
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
          placeholder="Instructor"
          value={instructor}
          onChange={function (e) { setInstructor(e.target.value); }}
          aria-label="Instructor"
          required
        />
        <button type="submit" className="courses-add-button" aria-label="Add Course">Add Course</button>
      </form>

      {courses.length === 0 ? (
        <p className="courses-noitems">No courses added yet.</p>
      ) : (
        <ul className="courses-list" aria-live="polite">
          {courses.map(function (course) {
            return (
              <li key={course.id} className="courses-list-item">
                <span className="courses-course-title">{course.title}</span>
                <span className="courses-instructor">{course.instructor}</span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default Courses;