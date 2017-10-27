import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
          <h1>This is a test message from Kevin</h1>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
