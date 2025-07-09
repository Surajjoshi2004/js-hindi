// 

const tinderUser = {}

tinderUser.name = "Suraj"
tinderUser.id = "123abc"

tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser={
    email: "someone@gmail.com",
    fullname:{
        userfullname: {
            firstName:"Suraj",
            lastName: "Joshi"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"c", 6:"d"}


// const obj4= Object.assign({}, obj1, obj2,obj3)
//use spread operator

const obj4 = {...obj1, ...obj2,...obj3}

//console.log(obj4)

const users = [
    {

    },
    {

    },
    {

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))



const course={
    courseName : "js in hindi",
    coursePrice: 999,
    courseInstructor: "Hitesh choudhary"
}

course.courseInstructor

const {courseInstructor:instructor} = course

const {coursePrice:price} = course
console.log(price)


const {courseName: name} = course;
console.log(name)


{
    "name":"hitesh",
    "coursename": "js in hindi",
    "price" : 'free'
// }