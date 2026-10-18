// 1 დაწერეთ map, რომელიც სიტყვების მასივიდან ახალ მასივში დაამატებს თითოეული სიტყვის ბოლო ასოს
const sityvebi = ["gamarjoba", "naxvamdis", "semodit", "gadit"]
const sityva = sityvebi.map(sityveb => sityveb[sityveb.length])

// 2 დაწერეთ filter, რომელიც [1, 3.14, 'javaScript', true, 'Hello World', 82]
//  მასივს გაფილტრავს და ახალ სიაში დატოვებს მხოლოდ სტრინგ მონაცემებს
const ragac = [1, 3.14, "javascripti", true, "Hello Word", 82]
const stingebi = ragac.filter(nivti => typeof nivti === "string")

// 3 findIndex მეთოდით სიტყვების მასივიდან დააბრუნეთ იმ ელემენტის ინდექსი, რომელიც ასო 'L' ზე იწყება.
const sityv = ["hello", "java", "world", "life"]
sityv.findIndex((sityaa, index) => {
    if (sityaa.startsWith("L")) {
        console.log(index)
    }
})
