{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.4/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.4/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.min.js"></script> */}


    let createStore = Redux.createStore
let reducers = (state = 0, action) => {
  state = state || {
    money: {amount: 100000}
  }
  switch (action.type) {
    case '我想花钱':
      return {
        money: {
          amount: state.money.amount - action.payload
        }
      }
    default:
      return state
  }
}

const store = createStore(reducers)

class App extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return(
      <div className="root">
        <BigBaBa money={this.props.store.money}/>
        <YoungBaBa money={this.props.store.money}/>
      </div>
    )
  }
  
}


class BigBaBa extends React.Component{
    constructor() {
        super()
    }
    render(){
      return (
            <div className="baba">
            大爸爸
            {this.props.money.amount}
               <Son1 money={this.props.money}/>
               <Son2 money={this.props.money}/>
           </div>
        )
    }
}

class YoungBaBa extends React.Component{
    constructor() {
        super()

    }
    render(){
      return (
        <div className="baba">
        二爸爸
        {this.props.money.amount}
          <Son3 money={this.props.money}/>
          <Son4 money={this.props.money}/>
        </div>
      )
    }
}

class Son1 extends React.Component{
    constructor() {
        super()

    }
    render(){
      return (
        <div className="son">儿子1 
        {this.props.money.amount}
        </div>
      )
    }
}
class Son2 extends React.Component{
    constructor() {
        super()
    }
    x() {
      store.dispatch({ type: '我想花钱', payload: 100 })
    }
    render(){
      return (
        <div className="son">儿子2 
        {this.props.money.amount}
        <button onClick={()=>this.x()}>消费</button>
        </div>
      )
   }
}
class Son3 extends React.Component{
    constructor() {
        super()

    }
    render(){
      return (
        <div className="son">儿子3 
        {this.props.money.amount}
        </div>
      )
    }
}
class Son4 extends React.Component{
    constructor() {
        super()

    }
    render(){
      return (
        <div className="son">儿子4
        {this.props.money.amount}
        </div>
      )
    }
}

function render(){
  ReactDOM.render(<App store={store.getState()}/>, document.querySelector('#app'))
}

render()
store.subscribe(render)