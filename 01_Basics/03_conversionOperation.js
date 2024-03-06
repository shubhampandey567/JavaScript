let score = 33
let score1 = "33abc"

let valueInNumber = Number(score1)
console.table([valueInNumber, typeof valueInNumber])
console.log(typeof(score))

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn =1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.table([isLoggedIn, booleanIsLoggedIn])