// // variable
// var x = 12;
// let y = 20;
// const z = 40;
// console.log("Old values")
// console.log(x)
// console.log(y)
// console.log(z)
// x = 13;
// y = 16;
// z = 18
// console.log("New values")
// console.log(x);
// console.log(y);
// console.log(z);

// var x = 12;
// var y = 12.0;
// var name = "hello wlorld";
// var isLive = false
// var empty = null;

// var x;
// console.log(x) // undefind

// var x = 12;
// function printName() {
//     var y = 14;
//     console.log(x)
//     console.log(y)
// }
// console.log(y)
// printName()

// function printName(name) {
//     console.log(name)
// }
// printName("hello world")

// function add(a, b){
//     const z  = a+b;
//     return z
// }

// console.log(add(5, 3))

// const add = (a, b) => {
// const z = a+b
// return z
// }


// const add = (a, b) => a+b
// console.log(add(5, 3))

// function getMyName(name, age) {
//     if(age >= 18) {
//         return "Hello " + name
//     }else {
//         return "Hello yuser, we can not show your name"
//     }
// }
// const getMyName = (name, age) => {
//     if(age >= 18) {
//         return "Hello " + name
//     }else {
//         return "Hello yuser, we can not show your name"
//     }
// }

// const getMyName = (name, age) => age >= 18 ? 'hello ' + name : 'Dont Show';
  
// console.log(getMyName("Amin", 12))

// airthematics
// var a = 5
// var b = 3
// console.log(a+b)
// console.log(a-b)
// console.log(a/b)
// console.log(Math.floor(a/b))
// console.log(a*b)
// console.log(a%b)

// console.log(1+1)
// console.log(2+3+ "Hello")
// console.log("Hello"+1+2)


// var name1 = "Akash"
// var name2 = "Pranjal"
// var name3 = "rashmi"
// const names = ["Akash", "Pranjal", "Rashmi", "Puja", "Aarti", "Archna"]
// console.log(names[3])
// names[0] = "Vinod"
// // console.log(names)

// //push
// names.push("Akash")
// console.log(names)
// //pop
// names.pop()
// console.log(names)

// //unshift
// names.unshift("Faijan")
// console.log(names)

// //shift
// names.shift()
// console.log(names)

// console.log(names.length )
// var names = ["Akash", "Pranjal", "Rashmi", "Puja", "Aarti", "Archna"]
// for(let i=0; i<names.length; i++) {
//     console.log("Hello "  +names[i])
// }
// let i= 0
// while(i<10) {
//     console.log(i)
//     i =  i + 1
// }
//

// var name = "Richa Singh"
// console.log(name.split("i"))
// var person = {
//     name : "Rakesh Singh",
//     age : 41,
//     salary : 10,
//     skills : ["Coder", "Marketer"],
//     getFistName : () => {
//         return person.name.split(" ")[0]
//     }
// }

var persons = [
    {name: "Amin Uddin", age: 25, gender: 'M'},
    {name: "Sapna", age: 41, gender: 'F'},
    {name: "Richa", age: 3, gender: 'F'},
    {name: "keshav", age: 17, gender: 'M'}
]
// const updatedData = persons.map((p) => {
//     if(p.age >= 18) {
//         return {
//             name : "Sir " + p.name
//         }
//     }else if(p.age < 18 && p.age>=14) {
//         return {
//             name: "Mr." + p.name
//         }
//     }else{
//         return {
//             name: "Master " + p.name
//         }
//     }
// })
const updatedData = persons.map((p) => {
    if(p.gender == "M" ){
        return "Sir " + p.name
    }else {
        return "Miss" + p.name
    }
})
console.log(updatedData)
