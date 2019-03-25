import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Context = React.createContext("10");

function F1() {
  return (
    <div className="bordered">
      1
      <F2 />
    </div>
  );
}
function F2() {
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
function F3() {
  return (
    <div className="bordered">
      3<Context.Consumer>{x => <F4 n4={x.n} setN={x.setN} />}</Context.Consumer>
    </div>
  );
}

function F4(props) {
  return (
    <div className="bordered">
      4, {props.n4}
      <button onClick={props.setN}>Click</button>
    </div>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      x: {
        n: 67,
        setN: () => {
          this.setState({
            x: {
              ...this.state.x,
              n: this.state.x.n + 1
            }
          });
        }
      }
    };
  }
  render() {
    let value = {};
    value.n = this.state.n;
    return (
      <div>
        <Context.Provider value={this.state.x}>
          <F1 />
        </Context.Provider>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
