// 2)
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 3)
let num = 1;
let sum = 0;

while (num <= 100) {
    sum += num;
    num++;
}

console.log(sum);

// 4)
let number = 5;
let j = 1;

while (j <= 10) {
    console.log(number * j);
    j++;
}

// 5)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 0;

while (k < numbers.length) {
    if (numbers[k] % 2 === 0) {
        console.log(numbers[k]);
    }
    k++;
}

// 6)
const correctPassword = "1234";
let password = prompt("შეიყვანე პაროლი:");

while (password !== correctPassword) {
    password = prompt("არასწორია, თავიდან შეიყვანე:");
}

console.log("სწორი პაროლია!");

// 7)
const nums = [2, 4, 6, 8, 10];
let x = 0;

while (x < nums.length) {
    console.log(nums[x] * 2);
    x++;
}