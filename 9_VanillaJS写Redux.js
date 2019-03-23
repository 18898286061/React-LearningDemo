function add1(){
    store.dispatch({type:'add'})  
    // 1. dispatch 一个 action
    // 触发一个时间（派发一个动作）
  }
  
  function render(store) {
    var app = document.querySelector('#app')
    app.innerHTML = `
      <div>
        你点击了<span id="value">${store.getState()}</span>次
        <div>
          <button id="add1" onclick="add1()">+1</button>
          <button id="minus1">-1</button>
          <button id="add1If0dd">如果单数就+1</button>
          <button id="addaAfter2Sec">两秒后+1</button>
        </div>
      </div>
    `
  }
  
  function stateChanger (state, action){
    if(state === undefined){
      return 0
    } else {
      if(action.type === 'add'){
        var newState = state + 1
        return newState // 2.根据操作生成新的 state 触发一个事件
      } else {
        return state
      }
    }
  }
  
  var store = Redux.createStore(stateChanger)
  
  
  render(store)
  
  store.subscribe(()=> {
    render(store)
  })
  // 接受到事件，重新render  