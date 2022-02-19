import React from 'react';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

function Food({name, image, rating}) {
//  console.log(props);
  return (
  <div>  
    <h2>I Like {name}</h2>
    <h4>{rating}/5.0</h4>
      <img src={image} alt={name}/>
    <hr/>
  </div>
  )
}
const foodLike = [
  {
    id : 1,
    name : 'sushi',
    image : 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80&rw=750&rh=536',
    rating : 4.7,
  },
  {
    id : 2,
    name : 'misoshiru',
    image : 'http://www.justhungry.com/images/misoshiru.jpg',
    rating : 4.4,
  },
  {
    id : 3,
    name : 'udon nuddle',
    image : 'https://www.justonecookbook.com/wp-content/uploads/2021/11/Beef-Udon-4306-I.jpg',
    rating : 4.2,
  },
  {
    id : 4,
    name : 'oyakodon',
    image : 'https://www.justonecookbook.com/wp-content/uploads/2011/02/Oyakodon-w600-500x375.jpg',
    rating : 5.0,
  },
  {
    id : 5,
    name : 'sake',
    image : 'https://image.biccamera.com/img/00000007951299_A01.jpg?sr.dw=320&sr.dh=320&sr.jqh=60&sr.mat=1',
    rating : 4.9,
  },
]
/*
function renderFood(dish){
  return <Food name={dish.name} image={dish.image}/>
}
*/
  Food.propTypes = {
    name : propTypes.string.isRequired,
    image : propTypes.string.isRequired,
    rating : propTypes.number.isRequired,
  }

function App() {
//  console.log(foodLike.map(renderFood))
  return <div>
    {foodLike.map(dish => (
    <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>
    ))}
  </div>
}

export default App;
