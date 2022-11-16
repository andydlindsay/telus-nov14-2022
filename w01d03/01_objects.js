const studentOneName = 'alice';
const cohort = 'nov 14 2022';
const grade = 60;

const studentOne = ['alice', 'nov 14 2022', 60, true];

const arr = [1,2,3];
arr.push(1); // [1,2,3,1]
const i = 0;
arr[i] = 1; // [1]
arr[0] = 2;
// console.log(arr);

const obj = {
  grade: 60
};
// obj.push(2);

const key = 'name';

obj[key] = 'Alice';
obj.key= 'Alice'; // { key: 'Alice' }


obj[key] = 'Bob';
obj['cohort'] = 'nov 14 2022';
console.log(obj);

console.log('cohort?', obj['cohort']);
console.log('cohort?', obj.cohort);

// let a = 5
// a = 2
// a = 7

// const students = [
//   {
//     grades: {
//       final: 80,
//       midterm: 70
//     }
//   }
// ];

// students[0]['grades']['midterm'] = 90;
// students[0].grades.midterm = 90;

