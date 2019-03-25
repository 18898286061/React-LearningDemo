import React, { userState, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Box1() {
  return <div class="box">注册</div>;
}

function Box2() {
  return <div class="box">登录</div>;
}

function App() {
  // let hash = window.location.hash;
  let pathname = window.location.pathname;
  let initUi = pathname === "/signup" ? "注册" : "登录";
  let [ui, setUi] = useState(initUi);
  let onClickLogin = () => {
    setUi("登录");
    // window.location.hash = "login";
    window.history.pushState = (null, '', "login");
  };

  let onClickSignUp = () => {
    setUi("注册");
    // window.location.hash = "signup";
    window.history.pushState = (null, '', "signup");
  };
  return (
    <div className="App">
      <button onClick={onClickLogin}>登录</button>
      <button onClick={onClickSignUp}>注册</button>
      <div>{ui === "登录" ? <Box2 /> : <Box1 />}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
