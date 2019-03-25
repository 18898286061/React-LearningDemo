import React from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';

import "./styles.css";

function App() {
  // 声明一个名为“count”的新状态变量
  const [count, setCount] = useState(0);
  const[user, setUser] = useState({
      name: 'KaiKai',
      age: 19,
      hobbies:['Code' ,'Eat', 'Dog']
    })

  const old = ()=> {
    setUser({
      // name: user.name
      ...user,
      age: user.age + 1
    })
  }
  const addHobby = ()=> {
    let newHobby = parseInt(Math.random()*100)
    setUser({
      ...user,
      hobbies: [...user.hobbies, newHobby]
    })
  }
  const minusHobby = ()=> {
    user.hobbies.splice(1,1)
    setUser({
      ...user,
      hobbies: [...user.hobbies]
    })
  }
  return (
    <div>
      <p>你点击了{count}次</p>
      <button onClick={() => setCount(count + 1)}>
        点我
      </button>
      <div>
        {user.name}, {user.age},<br/>{user.hobbies.join(',')}
        <br/><button onClick={old}>Old</button>
        <button onClick={addHobby}>增加爱好</button>
        <button onClick={minusHobby}>减少爱好</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
