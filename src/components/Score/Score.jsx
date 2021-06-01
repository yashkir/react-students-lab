import React from 'react';

function Score(props) {
  return (
    <tr>
      <td>{props.score.date}</td>
      <td>{props.score.score}</td>
    </tr>
  );
}

export default Score;
