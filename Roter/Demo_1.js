import React, { userState, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Box1(){
  return <div class="box">注册</div>
}

function Box2(){
  return <div class="box">登录</div>
}

function App() {
  let [n, setN] = useState(0)
  return (
    <div className="App">
     <button onClick={()=> setN(0)}>登录</button>
     <button onClick={()=> setN(1)}>注册</button>
     <div>{n % 2 === 0 ? <Box2 /> : <Box1 />}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
