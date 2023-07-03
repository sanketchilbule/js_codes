const arr = [1, 2, 3, 3, 36, 45,88, 6, "sfds", "sfd", "sfdf", Symbol("1")];

// Filter out the numbers from the array
const numbers = arr.filter((item) => typeof item === "number");

// Sum all the numbers using reduce
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(numbers); // [1, 2, 3, 3, 3636, 5645, 588, 8]
console.log(sum); // 9906


// 
const mixedArr = [1,2,2,2,3,5,2,52,"sank","youtube",Symbol("25"),Symbol("sank")];

let filt = mixedArr.filter((elem)=>{
    return typeof elem === "number"
})

console.log(filt)

const add = filt.reduce((acc,curr)=>{
    return acc + curr;
},0)


console.log(add)