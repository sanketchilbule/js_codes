const users = [
    {
        id: 1,
        name: "Ajay",
        isActive: true,
        age: 20
    },
    {
        id: 2,
        name: "Akash",
        isActive: true,
        age: 18,
    },
    {
        id: 3,
        name: "Fraz",
        isActive: true,
        age: 34,
    },
    {
        id: 4,
        name: "fizz",
        isActive:  false,
        age: 25,
    }];

// 1) using for loop
// const names =[];

// for(let i=0; i<users.length ; i++){
//     names.push(users[i].name)
// }

// console.log(names)

// 2)forEach loop

// const names =[];
// users.forEach((item) => {
//   names.push(item.name)
// })

// console.log(names)


// 3) if isActive
// const names =[];
// for(let i=0;i<users.length;i++){
//     if(users[i].isActive){  
//     names.push(users[i].name)
// }
// }

// console.log(names)

const names =[];
users.forEach((item)=>{
   if(item.isActive)
   names.push(item.name)
})


console.log(names)
