import {useState} from 'react';

const VisitorCounter = () => {
  // const arr = useState(0);
  // const getter = arr[0];
  // const setter = arr[1];

  const [count, setCount] = useState(0);

  const increment = () => {
    // count++;
    // setCount(count + 1);
    // // console.log(count); // 0
    // setCount(count + 2);
    // setCount(count + 1);

    setCount((prev) =>  prev + 1);
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h2>Visitor Count: {count}</h2>
      <button onClick={increment}>New visitor!</button>
    </div>
  );
};

export default VisitorCounter;
