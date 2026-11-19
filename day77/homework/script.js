// 1
function isEven(num) {
    return num % 2 === 0
}

// 2
function findMax(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

// 3
function reverseString(str) {
    let result = ""

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }

    return result
}

// 4
function countVowels(str) {
    let count = 0
    let vowels = "aeiou"

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++
        }
    }

    return count
}

// 5
function getEvenNumbers(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i])
        }
    }

    return result
}

// 6
function factorial(n) {
    let result = 1

    for (let i = 1; i <= n; i++) {
        result *= i
    }

    return result
}

// 7
function isPalindrome(str) {
    let reversed = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return str === reversed
}

// 8
function findLongestWord(sentence) {
    let words = sentence.split(" ")
    let longest = ""

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]
        }
    }

    return longest
}

// 9
function getUniqueValues(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }

    return result
}
// 10
function capitalizeWords(sentence) {
    let words = sentence.split(" ")
    let result = ""

    for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1)

        if (i < words.length - 1) {
            result += " "
        }
    }

    return result
}

// 11
function areAnagrams(str1, str2) {
    let arr1 = str1.split("").sort()
    let arr2 = str2.split("").sort()

    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true
}