const accountId = 12345
let accountEmail = "aditya@gmail.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState

// accountId = 2   not allowed
// prefer not to use var because of issue in block scope and functional scope

accountEmail = "hc@hc.com"
accountPassword = "676767"
accountCity = "Mumbai"

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
