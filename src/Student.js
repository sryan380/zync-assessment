import React, { Component } from 'react';
import './Student.css';

class Student extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    fetch("https://api.hatchways.io/assessment/students")
      .then(response => response.json())
      .then(students => {
        this.setState({
          students: students.students
        })
      })
      .catch(error => console.log(error))
  }

  renderStudent() {
    let studentList = []
    this.state.students.map(student => {
      let average = student.grades.reduce((a, b) => (~~a + ~~b)) / student.grades.length;
      return studentList.push(
        <div>
          <img class="circle_image" src={student.pic} alt={student.firstName} width="100" height="100" />
          <h3 key={student.firstName}> {student.firstName} {student.lastName} </h3>
          <p key={student.email}>Email: {student.email} </p>
          <p key={student.company}>Company: {student.company} </p>
          <p key={student.skill}>Skill: {student.skill} </p>
          <p key={student.id}>Average: {average.toFixed(2) + "%"} </p>
          <hr />
        </div>
      )
    })

    return studentList;
  }

  render() {
    return(
      <div>
        {this.renderStudent()}
      </div>
    );
  }

}

export default Student
