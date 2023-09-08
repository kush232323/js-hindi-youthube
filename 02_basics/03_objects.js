// object literals




const mySym = Symbol("key1")

const jsUser = {
    name: "hitesh", 
    "full name": "hitesh@gooele.com",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "hiteh@11",
    isLoggedin: false,
    lastLogInDays: ["monday", "sunday"]

    

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@microshoft.com"
// console.log(jsUser);



jsUser.greeting = function() {

    console.log("hello js user");
    
}


jsUser.greetingTwo = function() {

    console.log(`hello js user, ${this.name}`);
    
}




// console.log(jsUser.greeting);


// console.log(jsUser.greeting());

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());