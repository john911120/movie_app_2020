import React from 'react';

function Food({name, image}) {
//  console.log(props);
  return (
  <div>  
    <h2>I Like {name}</h2>
      <img src={image} alt={name}/>
  </div>
  )
}
const foodLike = [
  {
    id : 1,
    name : 'sushi',
    image : 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80&rw=750&rh=536'
  },
  {
    id : 2,
    name : 'misoshiru',
    image : 'http://www.justhungry.com/images/misoshiru.jpg'
  },
  {
    id : 3,
    name : 'udon nuddle',
    image : 'https://www.justonecookbook.com/wp-content/uploads/2021/11/Beef-Udon-4306-I.jpg'
  },
  {
    id : 4,
    name : 'oyakodon',
    image : 'https://www.justonecookbook.com/wp-content/uploads/2011/02/Oyakodon-w600-500x375.jpg'
  },
  {
    id : 5,
    name : 'sake',
    image : 'https://image.biccamera.com/img/00000007951299_A01.jpg?sr.dw=320&sr.dh=320&sr.jqh=60&sr.mat=1'
  },
]
/*
function renderFood(dish){
  return <Food name={dish.name} image={dish.image}/>
}
*/
function App() {
//  console.log(foodLike.map(renderFood))
  return <div>
    {foodLike.map(dish => (<Food key={dish.id} name={dish.name} image={dish.image}/>))}
  </div>
}

export default App;
