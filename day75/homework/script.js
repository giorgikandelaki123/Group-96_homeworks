// 2
function checkAge(age) {
    if (age >= 18) {
        return "You're an adult"
    } else {
        return "You are not an adult"
    }
}

console.log(checkAge(20))
console.log(checkAge(15))


// 3
function countLetters(text) {
    return text.length
}

console.log(countLetters("Hello"))
console.log(countLetters("JavaScript"))


// 4
function sumArray(numbers) {
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    return sum
}

console.log(sumArray([1, 2, 3, 4, 5]))
console.log(sumArray([10, 20, 30])) 


// 5
function square(number) {
    return number * number
}

console.log(square(5))
console.log(square(3))


// 6
function calculate(a = 2, b = 3, c = 4) {
    return (a ** b) * c
}

console.log(calculate(2, 3, 4))
console.log(calculate(3, 2, 5))
console.log(calculate())


// 7
function add(a, b) {
    return a + b
}

let result = add(5, 10)
console.log(result)


function multiply(a, b) {
    return a * b
}

let result2 = multiply(4, 5) + 10
console.log(result2)
