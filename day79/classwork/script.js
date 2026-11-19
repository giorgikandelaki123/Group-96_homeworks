// 1) დაწერეთ ფუნქცია areAnagrams(str1, str2), რომელიც ამოწმებს, არის თუ არა ორი სტრინგი ერთმანეთის ანაგრამა
// (ანუ შედგება თუ არა ზუსტად იგივე სიმბოლოებისგან განსხვავებული თანმიმდევრობით).
// მაგ. areAnagrams("listen", "silent") -> true.

function areAnagrams(str1, str2){
    let ragac1 = str1.split().sort().join()
    let ragac2 = str2.split().sort().join()

    return ragac1 = ragac2
}

console.log(areAnagrams("listen", "silent"))


// 2) შექმენით arrow ფუნქცია, რომელიც მიიღებს ორ არგუმენტს string, number.
// ფუნქციამ string-ის თითოეული ასო number-ჯერ უნდა დააბრუნოს.
// მაგ. ('lika',2) --- 'lliikkaa'
const funcia = (str, num) => {
    let pasuxi = " "

    for (let i = 0; i < str.length; i++) {
        pasuxi += str[i].repeat(num)
    }

    return pasuxi
};

console.log(funcia('lika', 2));

// 3) შექმენით arrow ფუნქცია, რომელიც მიიღებს სტრინგს და დააბრუნებს მხოლოდ სტრინგიდან ამოღებულ ხმოვნებს.


// 4) შექმენით arrow ფუნქცია, რომელიც გაიგებს ორი სტრინგი ერთმანეთის პალინდრომები არიან თუ არა.