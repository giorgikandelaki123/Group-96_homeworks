// 1 დაწერეთ map, რომელიც სიტყვების მასივიდან ახალ მასივში დაამატებს თითოეული სიტყვის ბოლო ასოს
const sityvebi = ["gamarjoba", "naxvamdis", "semodit", "gadit"]
const sityva = sityvebi.map(sityveb => sityveb[sityveb.length])

// 2
const ragac = [1, 3.67, "javascripti", false, "gamarjoba", 100]
const stingebi = ragac.filter(nivti => typeof nivti === "string")

// 3
const sityv = ["hello", "java", "world", "life"]
sityv.findIndex((sityaa, index) => {
    if (sityaa.startsWith("L")) {
        console.log(index)
    }
})
