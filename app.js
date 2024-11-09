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

// Function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Found a divisor, so not prime
    }
  }
  return true; // No divisors found, it's prime
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

// Endpoint to check if a number is prime
app.get('/assignments/prime/:number', (req, res) => {
  const number = parseInt(req.params.number);

  if (isNaN(number)) {
    return res.status(400).json({ error: 'Please provide a valid number.' });
  }

  const primeStatus = isPrime(number);
  res.json({ isPrime: primeStatus });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
