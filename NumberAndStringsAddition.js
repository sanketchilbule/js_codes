// const arr = [1, 2, 3, 4, 5, 7, 6, "sank", "jack"];
// const numbers = {};
// const strings = {};

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     numbers.push(arr[i]);
//   } else if (typeof arr[i] === "string") {
//     strings.push(arr[i]);
//   }
// }

// console.log("Numbers:", numbers , strings);
 

const arr = [1, 2, 3, 4, 5, 7, 6, "sank", "jack"];
let sum = 0;
let concatStrings = "";

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    sum += arr[i];
  } else if (typeof arr[i] === "string") {
    concatStrings += arr[i];
  }
}

console.log("Sum of numbers:", sum, concatStrings);
// console.log("Concatenated strings:", concatStrings);
