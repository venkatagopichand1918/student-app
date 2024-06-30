import React, { useState } from 'react';
import axios from 'axios';
import './StudentForm.css';
const StudentForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const newStudent = {
      name,
      age,
      course,
    };
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL, newStudent); // Send POST request to the backend
      console.log(res.data);
      setName(''); // Clear name input field
      setAge(''); // Clear age input field
      setCourse(''); // Clear course input field
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="course">Course:</label>
        <input
          type="text"
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
};
export default StudentForm;
