const JsUser ={
    name: "Hitesh",
    "full name" :"Suraj Joshi",
    age: 20,
    location: "India",
    email: "suraj990@gmail.com",
    isLoggedIn : true,
    LastLoginDays: ["Monday","Tuesday"]
}
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "hitesh@microsoft.com"

console.log(JsUser["email"]); 

JsUser.greeting = function(){
    console.log("hello Js user");
}

JsUser.greetingTwo = function()
{
    console.log('Hello Js user ${this.name}')
}

console.log(JsUser.greeting())