import React from "react";
import ReactDOM from "react-dom";

// Creates a re-usable `SimpleComponent` class.
class SimpleComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>I am a SimpleComponent!</h2>
        <h3>I am also a React Component</h3>
        <h3>Component has to be in div</h3>
      </div>
    );
  }
}

// Renders a SimpleComponent into #root.
document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector("#root");
  ReactDOM.render(<SimpleComponent />, root);
});
