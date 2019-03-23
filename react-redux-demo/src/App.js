import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        你点击了<span id="value">{this.props.n}</span>次
        <div>
          <button id="add1" onClick={()=> this.props.add1()}>+1</button>
          <button id="add1">+2</button>
          <button id="add1If0dd">如果单数就+1</button>
          <button id="addaAfter2Sec">两秒后+1</button>
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    n: state.n
  }
}

function mapDispatchToProps(dispatch){
  return {
    add1: ()=> dispatch({type: 'add', payload: 1})
  }
}
  

export default connect(mapStateToProps,mapDispatchToProps)(App);
