import React from "react";
import ReactDOM from "react-dom";

class Quiz extends React.Component {
  render() {
    const name = prompt("Name?");
    return (
      <div>
        <Art name={name} />
      </div>
    );
  }
}

function Art(props) {
  return <div>Hello, {props.name}</div>;
}

ReactDOM.render(<Quiz />, document.getElementById("app"));
