function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // 8
let result2 = subtract(10, 5); // 5

console.log(result1, result2); // Output: 8 5

//This function can take an array of numbers and return the sum of the numbers
function sum(numbers: number[]): number {
    let total: number = 0; 
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
}

//This function can take an array of numbers and return the average of the numbers. 
function average(numbers: number[]): number{
    let total: number = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total / numbers.length; 
}

let numbers: number[] = [1, 2, 3, 4, 5];
let sumResult = sum(numbers); //15
let averageResult = average(numbers); //3

console.log(sumResult); //Output: 15
console.log(averageResult); //Output: 3