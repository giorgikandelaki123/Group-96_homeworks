// 2) for loop-ს აქვს 3 არგუმენტი: დაწყება, პირობა და ცვლილება.

// 3)
for (let i = 25; i <= 30; i++) {
    console.log(i);
}

// 4)
for (let i = 90; i <= 102; i += 2) {
    console.log(i);
}

// 5)
for (let i = 90; i >= 50; i--) {
    console.log(i);
}

// 6)
for (let i = 45; i >= 20; i -= 5) {
    console.log(i);
}

// 7)
const name = "Giorgi";

for (let i = 0; i < name.length; i++) {
    console.log(name[i], i);
}

// 8) length გვიჩვენებს სტრინგის ან მასივის სიგრძეს, ამიტომ ყველა ელემენტზე გადავდივართ.

// 9)
const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Number: ${numbers[i]}`);
}