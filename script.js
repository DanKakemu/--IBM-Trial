// This script calculates the area of a circle

// Define the value of pi
const pi = 3.14159;

// Define a function to calculate the area of a circle
function calculateArea(radius) {
  const area = pi * radius * radius;
  return area;
}

// Prompt the user to enter the radius of the circle
const radius = prompt("Enter the radius of the circle:");

// Calculate the area of the circle using the calculateArea function
const area = calculateArea(radius);

// Display the result to the user
alert(`The area of the circle with a radius of ${radius} is ${area}.`);
