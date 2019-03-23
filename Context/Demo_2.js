import React from "react";
import ReactDOM from "react-dom";

function F1(props) {
  return (
    <div>
      1, {props.n1}
      <F2 n2={props.n1} />
    </div>
  );
}
function F2(props) {
  return (
    <div>
      2, {props.n2}
      <F3 n3={props.n2} />
    </div>
  );
}
function F3(props) {
  return (
    <div>
      3, {props.n3}
      <F4 n4={props.n3} />
    </div>
  );
}
function F4(props) {
  return <div>4, {props.n4}</div>;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      n: 99
    };
  }
  render() {
    return (
      <div>
        <F1 n1={this.state.n} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
