import React from "react";
import PropTypes from "prop-types";

export class StudentIdentify extends React.Component {

    render() {
      var text ="Student Id Card";
      return (
        <div className="wrapper">
          <p className="student-text">{text}</p>
          <img src={require('../img/student.jpg')} />
          <div className="content">
          <p>Name: {this.props.firstName} {this.props.lastName}</p>
          <p>Birthday: {this.props.birthday}</p>
          <p>Status: {this.props.status}</p>
          <p>University: {this.props.university}</p>
          </div>
        </div>
      );
    }
}

StudentIdentify.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  birthday: PropTypes.string,
  status: PropTypes.string,
  university: PropTypes.string
};
