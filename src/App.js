import React, { Component } from "react";
import Page from "./Page";
import Featured from "./Featured";
import Header from "./Header";
import CopyRight from "./CopyRight";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Featured />
        <Page />
        <CopyRight />
      </div>
    );
  }
}

export default App;
