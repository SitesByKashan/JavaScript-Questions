//Question 1: Write a function countCharacters that takes in a string and returns an object containing the count of each character in the string

function countCharacters(str) {
    const characterCounts = {};
    for (const char of str) {
        if (characterCounts[char]) {
            characterCounts[char]++;
        } else {
            characterCounts[char] = 1;
        }
    }
    return characterCounts;
}


const exampleString = "Kashan Malik Awan";
const result = countCharacters(exampleString);
console.log(result); 
//Output: {
//   K: 1,
//   a: 4,
//   s: 1,
//   h: 1,
//   n: 2,
//   ' ': 2,
//   M: 1,
//   l: 1,
//   i: 1,
//   k: 1,
//   A: 1,
//   w: 1
// }


// Question 2: Write a function fibonacci that takes an integer n as input and returns the n-th number in the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input should be a non-negative integer.");
    }
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }

    return b;
}


const n = 20;
const result1 = fibonacci(n);
console.log(result1); 
//Output: 6765


//Question 3: Write a function sortNumbers that takes an array of numbers as input and returns a new array with the numbers sorted in ascending order.

function sortNumbers(numbers) {
    const sortedNumbers = [...numbers];
    sortedNumbers.sort((a, b) => a - b);
    return sortedNumbers;
}

const numbers = [5, 3, 8, 1, 2];
const sorted = sortNumbers(numbers);
console.log(sorted); 
// Output: [1, 2, 3, 5, 8]
