// 1
// function სიტყვა რომელიც ქმნის ფუნქციას
// greet ფუნქციის სახელი
// parameters პარამეტრები რომლებსაც ფუნქცია იღებს



// 2
function celsiusidafarenhati(celsius){
    return celsius * 9 / 5 + 32
}

console.log(celsiusidafarenhati(5))

// 3
function userData(name = "Unknown", address = "Unknown", email = "Unknown") {
    return `მომხმარებლის სახელია ${name}, მისი მისამართია ${address}, ხოლო ელფოსტაა ${email}`
}

let userData1 = userInfo("გიორგი", "თბილისი", "giorgi@gmail.com")

let userData2 = userInfo("ლუკა", "ბათუმი", "luka@gmail.com")

console.log(userData1)
console.log(userData2)