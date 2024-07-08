// call passes the current execution context to another function

function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
function createuser(username,email,password){
    setUsername.call(this, username)

    this.email = this.email
    this.password = this.password
}
const coffee = new createuser("coffee","coffee@google.com","123")
console.log(coffee);
