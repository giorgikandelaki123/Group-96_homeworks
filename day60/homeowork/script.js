// 2)
const fruits = ["ვაშლი", "ბანანი", "ატამი", "მსხალი"];
console.log(`მასივში არის ${fruits.length} ელემენტი`);

// 3)
const todoList = [];
todoList.push("learn");
todoList.push("workout");
todoList.push("rest");
console.log(todoList);

// 4)
const numbers = [10, 20, 30, 40, 50];
const removedNumber = numbers.pop();
console.log(removedNumber);

// 5)
const colors = ["წითელი", "მწვანე", "ლურჯი", "ყვითელი", "იასამნისფერი"];
console.log(colors.at(0));
console.log(colors.at(-1));

// 6)
const queue = ["გიორგი", "ანა", "ნიკა", "მარიამი"];
queue.shift();
console.log(queue);

// 7)
const frontEnd = ["HTML", "CSS", "JS"];
const backEnd = ["Node.js", "Python"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// 8)
const animals = ["Dog", "Cat", "Bear", "Wolf"];
console.log(animals.indexOf("Cat"));
console.log(animals.indexOf("lion"));


// 9)
const days = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"];
const workDays = days.slice(0, 5);
console.log(workDays);

// 10)
const randomMovies = ["Inception", "Interstellar"];
randomMovies.unshift("The Dark Knight");
console.log(randomMovies);

// 11)
const scores = [50, 65, 78, 92, 45, 88, 99];
const lastThree = scores.slice(-3);
console.log(lastThree);

// 12)
const searchHistory = [];
searchHistory.push("google.com");
searchHistory.push("github.com");
searchHistory.push("youtube.com");
searchHistory.pop();
searchHistory.push("stackoverflow.com");

console.log(searchHistory.length);
console.log(searchHistory.at(-1));

// 13)
const shoppingList = ["bread", "milk", "cheese", "eg"];
console.log(shoppingList.indexOf("cheese"));