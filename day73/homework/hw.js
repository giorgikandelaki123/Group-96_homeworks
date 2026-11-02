// 3

let words = ["Hello", " ", "World", "!"];

let result = words.reduce((acc, curr) => acc + curr, "");

console.log(result);


// 4

let nums = [2, 3, 4, 5];

let sum = nums.reduce((acc, curr) => acc + curr, 0);
let product = nums.reduce((acc, curr) => acc * curr, 1);

console.log("ჯამი:", sum);
console.log("ნამრავლი:", product);


// 5
let numbers = [1,2,3,4,5,6,7,8,9,10];

let result2 = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 3)
    .reduce((acc, curr) => acc + curr, 0);

console.log(result2);


// 6

let words2 = ["python", "java", "c", "javascript", "go"];

let result3 = words2
    .filter(word => word.length > 3)
    .map(word => word.toUpperCase())
    .reduce((acc, curr) => acc + " " + curr);

console.log(result3);


// 7

let nums2 = [2, -3, 4, -5, 6, -1];

let result4 = nums2
    .filter(num => num > 0)
    .map(num => num ** 2)
    .reduce((acc, curr) => acc + curr, 0);

console.log(result4);