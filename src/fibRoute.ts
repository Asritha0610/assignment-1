// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req, res) => {
  const num: string = req.params.num;

  const parsedNum: number = parseInt(num, 10);
  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
