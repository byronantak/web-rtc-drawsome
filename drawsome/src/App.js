import "./App.css";
// import "./web-rtc/web-rtc";

import React from "react";
import Receiver from "./components/Receiver/Receiver";

class App extends React.Component {
  render() {
    return (
      <div className="App p-2">
        <h4>Hello World</h4>
        <Receiver status="Test"></Receiver>
      </div>
    );
  }
}

export default App;
