import React from 'react';
import ScoreList from '../ScoreList/ScoreList';
import './Student.css';

function Student(props) {
  return (
    <div className="Student">
      <h2>Name: {props.student.name}</h2>
      <p>Bio: {props.student.bio}</p>

      <h3>Results:</h3>
      <ScoreList scores={props.student.scores} />
    </div>
  );
}

export default Student;
