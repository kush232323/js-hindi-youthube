// const tinderUser = new object()
// console.log(tinderUser);

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "summy"
tinderUser.isLoggedin = false
// console.log(tinderUser);

const regularUser = {

email: "some@122",
fullname: {
userfullname: {
    firstname: "hitesh",
lastname: "choudhary"
}
}
}
// console.log(regularUser.fullname.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//  const obj3= {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4 )

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
{
    id: 1, 
    email: "h@gmail.com"
},
{
    id: 1, 
    email: "h@gmail.com"
},
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));


const course = {

coursename: "js in hindi",
price: "999",
courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(instructor);


// recat
// const navbar = ({comany}) => {

}
// navbar(coppany ="hitesh")



// {
//     "name": "hitesh", 
//     "coursename": "js in hindi",
//     "price": "free"
// }


// [

//     {},
//     {},

// ]