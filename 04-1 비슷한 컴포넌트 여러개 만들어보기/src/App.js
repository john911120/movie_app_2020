import React from 'react';

function Food({name, image}) {
//  console.log(props);
  return (
  <div>  
    <h2>I Like {name}</h2>
      <img src={image}/>
  </div>
  )
}
const foodLike = [
  {
    name : 'sushi',
    image : 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80&rw=750&rh=536'
  },
  {
    name : 'misoshiru',
    image : 'http://www.justhungry.com/images/misoshiru.jpg'
  },
  {
    name : 'udon nuddle',
    image : 'https://www.justonecookbook.com/wp-content/uploads/2021/11/Beef-Udon-4306-I.jpg'
  },
  {
    name : 'oyakodon',
    image : 'https://www.justonecookbook.com/wp-content/uploads/2011/02/Oyakodon-w600-500x375.jpg'
  },
  {
    name : 'sake',
    image : 'https://image.biccamera.com/img/00000007951299_A01.jpg?sr.dw=320&sr.dh=320&sr.jqh=60&sr.mat=1'
  },
]
function App() {
//  return <div className="App"/>;
  return <div>
    {foodLike.map(dish => (<Food name={dish.name} image={dish.image}/>))}

  </div>
}

export default App;
