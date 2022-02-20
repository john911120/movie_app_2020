import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props)
    console.log('born the component')
  }

  componentDidMount(){
    console.log('component is rendered')
  }  

  componentDidUpdate() {
    console.log("we just updated")
  }

  componentWillUnmount () {
    console.log("goodbye my component")
  }

  state = {
    count : 0,
  };

  
  add = () => {
    this.setState(current => ({
      count : current.count + 1,
    }));  
  }

  minus = () => {
    this.setState(
      current => ({count : current.count - 1,
      }));
  }

  render(){
//    console.log('generated the component')
    console.log("렌더링 되었습니다.")
  return (
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
    }
}

export default App;
