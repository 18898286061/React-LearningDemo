class App extends React.Component {
    constructor() {
      super()
      this.state = {
        message: '你好'
      }
    }
    changeMessage() {
      this.setState({message: '真好'})
    }
    
    render() {
      return(
        <div>Hi
          <Foo 
            message={this.state.message}
            fn={this.changeMessage.bind(this)}/>
        </div>
      )
    }
  }
  
  function Foo(props){
    return (
    <div>
      <p>我得到的Message是 {props.message}</p>
      <button onClick={props.fn}>Click</button>
    </div>
    )
  }
  
  ReactDOM.render(<App />, document.querySelector('#app'))