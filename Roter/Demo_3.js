import React, { userState, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Box1() {
  return <div className="box">注册</div>;
}

function Box2() {
  return <div className="box">登录</div>;
}
function Welcome() {
  return <div className="box">欢迎</div>;
}

function App() {
  // let hash = window.location.hash;
  let path = window.location.pathname;
  let initUi = "";
  if (path === "/welcome") {
    initUi = "欢迎";
  } else if (path === "/login") {
    initUi = "登录";
  } else {
    initUi = "注册";
  }
  let [ui, setUi] = useState(initUi);
  let onClickLogin = () => {
    setUi("登录");
    // window.location.hash = "login";
    window.history.pushState(null, "", "/login");
  };

  let onClickSignUp = () => {
    setUi("注册");
    // window.location.hash = "signup";
    window.history.pushState(null, "", "/signup");
  };

  let onClickWelcome = () => {
    setUi("欢迎");
    window.history.pushState(null, "", "/welcome");
  };

  let showUi = () => {
    if (ui === "登录") {
      return <Box2 />;
    } else if (ui === "欢迎") {
      return <Welcome />;
    } else {
      return <Box1 />;
    }
  };

  return (
    <div className="App">
      <button onClick={onClickLogin}>登录</button>
      <button onClick={onClickSignUp}>注册</button>
      <button onClick={onClickWelcome}>欢迎</button>
      <div>{showUi()}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
