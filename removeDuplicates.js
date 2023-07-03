const arr =[ 1,0,2,3,5,1,0];

// 1) Set
// console.log( [...new Set(arr)])

// 2)filter
let removeDupl = arr.filter((item,id)=>(arr.indexOf(item) === id))
console.log(removeDupl);

// 3 
// const unique = [];
// let duplRemove = arr.forEach((item)=>(!unique.includes(item) && unique.push(item)))
// console.log(unique);