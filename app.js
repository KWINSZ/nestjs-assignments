const express = require('express');
const app = express();
const port = 9090;

// Function to generate Fibonacci sequence
const generateFibonacci = (n) => {
  const sequence = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b]; // update a and b for next Fibonacci numbers
  }
  return sequence;
};

// Endpoint to get Fibonacci sequence
app.get('/assignments/fibonacci/:n', (req, res) => {
  const n = parseInt(req.params.n);
  
  if (isNaN(n) || n <= 0) {
    return res.status(400).json({ error: 'Please provide a positive integer for n.' });
  }

  const fibonacciSequence = generateFibonacci(n);
  res.json({ sequence: fibonacciSequence });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
 
