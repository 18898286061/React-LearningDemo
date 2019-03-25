// 数据

var user = {
    id: 1343242,
    name: 'Nick'
  }
  
  var money = {
    amount: 100000
  }
  
  var store = {
    money: money,
    user: user
  }
  
  
  
  // EventHub
  var fnLists = {}
  var eventHub = {
    trigger(eventName, data){
      let fnList = fnLists[eventName]
      if(!fnList){return}
      for(let i = 0; i < fnList.length; i++) {
        fnList[i](data)
      }
    },
    on(eventName, fn) {
      if(!fnLists[eventName]) {
        fnLists[eventName] = []
      }
      fnLists[eventName].push(fn)
    }
  }
  
  var x = {
    init(){
      eventHub.on('我想花钱了', function(data){ // subscribe
        store.money.amount -= data // reducer
        render()
      })
    }
  }
  x.init()
  
  
  
  
  
  class App extends React.Component {
    constructor() {
      super()
      this.state = {
        store: store
      }
    }
    
    render() {
      return(
        <div className="root">
          <BigBaBa money={this.state.store.money}/>
          <YoungBaBa money={this.state.store.money}/>
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
      // action
        eventHub.trigger('我想花钱了'/*action type*/, 100)// 100 => payload
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
    ReactDOM.render(<App />, document.querySelector('#app'))
  }
  render()