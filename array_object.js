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
