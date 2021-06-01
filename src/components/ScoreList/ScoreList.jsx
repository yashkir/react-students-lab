import React from 'react';
import Score from '../Score/Score';
import './ScoreList.css';

function ScoreList(props) {
  return (
    <table className="ScoreList">
      <thead>
        <tr>
          <td>Date</td>
          <td>Score</td>
        </tr>
      </thead>
      {props.scores.map(score => <Score score={score} />)}
    </table>
  );
}

export default ScoreList;
