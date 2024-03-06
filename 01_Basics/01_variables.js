const accountId = 144553
let accountEmail = "email@example.com"
var accountPassword = "12345"
accountCity = "Rewa"

/*
var is not limited to scope
prefer not to use var, due to issue of block and functional scope issue
*/

console.table([accountId, accountEmail, accountPassword, accountCity])