
const students = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
console.log("Student List:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}


// Create an array of numbers and loop through to display even or odd
const numbers = [10, 15, 20, 25, 30];
console.log("Even and Odd Numbers:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i] + " is even");
  } else {
    console.log(numbers[i] + " is odd");
  }
}

// Create an array of scores and check if a score is passing (>= 60)
const scores = [45, 62, 85, 30, 75];
console.log("Score Status:");
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 60) {
    console.log("Score " + scores[i] + " is a pass");
  } else {
    console.log("Score " + scores[i] + " is a fail");
  }
}

// A while loop example: Keep looping while a value is less than 100
let value = 10;
console.log("Value Doubling Loop:");
while (value < 100) {
  console.log("Value is: " + value);
  value *= 2; // double the value in each iteration
}