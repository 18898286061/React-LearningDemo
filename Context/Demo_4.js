import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Context = React.createContext("10");

function F1(props) {
  return (
    <div className="bordered">
      1
      <F2 />
    </div>
  );
}
function F2(props) {
  return (
    <div className="bordered">
      2
      <F3 />
    </div>
  );
}
// class F3 extends React.Component {
//   static contextType = Context;
//   render(){
//     return (
//       <div className="bordered">
//         3, {this.props.n3}
//         <F4 n4={this.context} />
//       </div>)
//   }
// }
function F3(props) {
  return (
    <div className="bordered">
      3<Context.Consumer>
        {number => <F4 n4={number} />}
      </Context.Consumer>
    </div>
  );
}

function F4(props) {
  return (
    <div className="bordered">
      4,
      {props.n4}
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Context.Provider value="10">
          <F1 />
        </Context.Provider>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
