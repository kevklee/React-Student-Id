import React from "react";
import { render } from "react-dom";

import { StudentIdentify } from "./components/student_identify";

require('../scss/style.scss');

class App extends React.Component {
  render() {
    return (
      <div>
        <StudentIdentify firstName="Kevin" lastName="Lee" birthday="1990" status="Student" university="UCLA"/>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
