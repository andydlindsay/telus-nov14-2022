// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count += 1;
//     console.log(this.count);
//   }
// }

// const counter = new Counter();
// // console.log(counter);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// closure = a variable in scope when a function was declared

// let count = 0;
const [count, setCount] = useState(0); // feb 2019

const increment = () => {
  count += 1;
  console.log(count);
};

increment();
increment();
increment();
increment();
increment();
