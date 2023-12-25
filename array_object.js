// array

const mon = 'mon';
const tue = 'tue';
const wed = 'wed';
const thu = 'thu';
const fri = 'fri';
const sat = 'sat';
const sun = 'sun';

const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;

console.log(daysOfWeek);

const daysOfWeekArray = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

console.log(daysOfWeekArray);

// 조회하고 싶은 배열의 index값을 넣어주면 해당 값을 조회할 수 있다. index는 0부터 순서대로 증가함
console.log(daysOfWeekArray[4]);

// 배열의 마지막에 값을 추가한다.
daysOfWeekArray.push('sun');

// object

// 변수 4개의 값이 player 하나에 대한 값이다.
const playerName = 'kjw';
const playerPoint = 10000;
const playerAge = 28;
const playerFat = 'little bit';

// array의 경우 값을 묶어주지만, 해당 값이 어떤 값인지 알 수 없다.
const playerArray = ['kjw', 10000, 28, 'little bit'];

// object를 사용하면 값을 묶고, 해당 값에 대한 식별자를 지정해 줄 수 있다.
const playerObject = {
  name: 'kjw',
  point: 10000,
  age: 28,
  fat: 'little bit',
};

//  object의 값 전체 조회
console.log(playerObject);

// object의 하나의 property 조회
console.log(playerObject.name);

// object의 하나의 property값 변경
playerObject.age = 29;

// object에 property 추가
playerObject.hobby = '방탈출';

console.log(playerObject);
