let a = 5;
let b = 2;

// var는 메모 생략

let myName = 'jeong wook kang'; // camel case : JS에서 주로 씀
const my_name = 'jeong wook kang'; // snake case : python에서 주로 씀 python에서는 const나 let같은 키워드가 필요없다함

console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log('hello ' + myName);

myName = '강정욱';
// let은 값을 재할당하는것이 가능하다.

// my_name = '강정욱';
// const는 안됨 오류발생

console.log('your new name is ' + myName);
