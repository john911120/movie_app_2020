/*
let number = [1, 3, 5, 7, 9]

number = number.map(function (value, index, array){
    return value * value
})

number.forEach(console.log)
*/

// map() 함수 사용
/*
    map()메소드는 함수를 사용을 해야 동작이 된다.
*/

let number1 = [704, 708, 741, 761, 773, 774]

number1 = number1.map(function (value, index, array) {
    return value / 2
})

number1.forEach(console.log)