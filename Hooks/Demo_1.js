import React from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';

import "./styles.css";

function Example() {
  // 声明一个名为“count”的新状态变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>你点击了{count}次</p>
      <button onClick={() => setCount(count + 1)}>
        点我
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
