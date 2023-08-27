 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEMAIL;


 const id  = Symbol('123')
 const anotherId = Symbol('123')

//  console.log(id === anotherId);
//  const bigNumber = 1323213312123233232312312312312321321321313213131313n
 const myfunction = function() {
    console.log("hello world");


    
 }
//  console.log(typeof myfunction);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// stack (primitive) , heap (non-primitive)

let myYouthubename = "hiteshchoudarydotcom"

let anothername = myYouthubename
anothername = "chaiaurcode"
console.log(myYouthubename);
console.log(anothername);

let userOne = {
    email: "user@google",
    upi: "user@ybl"


}

let userTwo = userOne
userTwo.email = "hitesh@google"
console.log(userOne.email);
console.log(userTwo.email);