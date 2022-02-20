import React from 'react';

class App extends React.Component{
  state = {
    isLoading : true,
    movies : [],
  };

  componentDidMount(){
    // 영화 데이터를 로딩한다.
    setTimeout(() => {
      this.setState({isLoading : false})
    }, 6000);
  }

  render() {
    const {isLoading} = this.state;
    return <div>
      {isLoading ? 'Loading....' : 'We are Ready'} 
    </div>
  }
}

export default App;
