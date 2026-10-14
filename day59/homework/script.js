// 1
const score = 95;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}


// 2
const grade = "A";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    default:
        console.log("Try harder");
}


// 3
const userName = "Giorgi";
const userAge = 13;

if (userName === "Giorgi" || userAge === 13) {
    console.log("We have the same name or age");
} else {
    console.log("We don't have the same name and age");
}


// 4
const age = 16;
const hasTicket = true;

if (age > 15 && hasTicket === true) {
    console.log("You can go in, and watch a movie");
} else {
    console.log("You can't go in");
}


// 5
const temperature = 25;

temperature >= 20
    ? console.log("It is warm")
    : console.log("It is cold");