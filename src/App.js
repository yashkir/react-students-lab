import React from 'react';
import './App.css';
import students from './data/students';
import Student from './components/Student/Student'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: students,
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Students</h1>
        {this.state.students.map(student => <Student student={student} />)}
      </div>
    );
  }
}

export default App;
