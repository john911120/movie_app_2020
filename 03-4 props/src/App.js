import React from 'react';

function Food({fav}) {
//  console.log(props);
  return <h3>I Like {fav}</h3>
}

function App() {
//  return <div className="App"/>;
  return <div>
    <h1>Hello</h1>
    <Food fav="udon" />
    <Food fav="sushi" />
    <Food fav="ramen" />
    <Food fav="yakisoba" />
    <Food fav="okonomiyaki" />
    <Food fav="takoyaki" />
  </div>
}

export default App;
