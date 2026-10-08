// 1) გამოიყენეთ Do While, მოცემული პროგრამის დასაწერად:
// დაითვალეთ რიცხვები 0-დან 10-მდე. სანამ while-ის პირობას დაწერთ, იქამდე მინიმუმ ერთხელ უნდა გაიზარდოს count ცვლადი

let datvla = 0

do {
    datvla++
    console.log(datvla)
} while (datvla < 10)


// 2) გადაუარეთ სიას: const mentors = ['random 1', 'random 2', 'Lika', 'random 3', 'random 4'].
// როდესაც for ციკლს 'Lika' შეხვდება break-ის მეშვეობით უნდა შეაჩეროს ციკლი.
//  ციკლის გარეთ კი რაიმე დააკონსოლოგეთ, რაც მიანიშნებს მოცემული ელემენტის პოვნაზე.

const mentors = ['random 1', 'random 2', 'Lika', 'random 3', 'random 4']

for(let i = 0; i < mentors.length i++)
{
    if (mentors[i] === "lika") {
        break
    }
}

console.log("lika ნაპოვნია")


// 3) შექმენით სია favArtists, სადაც თქვენი საყვარელი ბენდის/მომღერლების სახელებს შეინახავთ.
//  გამოიყენეთ forEach, რათა კონსოლში გამოიტანოთ 'I listen to' თითოეული არტისტის წინ.

const favArtists = ["the weekend", "drake", "travis scott"]

favArtists.forEach(artist => {
    console.log("i listen to" + artist)
})
