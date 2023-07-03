// const arr = [1, 2, 3, 4, 3, 2, 1, 2, 3];


// function countOccurrences(arr) {
//     const occurrences = {};
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         occurrences[element] = occurrences[element] ? occurrences[element] + 1 : 1;
//     }
//     return occurrences;
// }

// const occurrences = countOccurrences(arr);
// console.log("Occurrences:", occurrences);


// 








const mixedArr = [1, 2, 3, 2, 2, 2, 2, 4, 1, 5, 1, 5, 1, 5, 20, "sank", "sank", "king"]

function countOccurrences(arr) {
    let occurence = {};
    for (let i = 0; i < arr.length; i++) {
        let vari = arr[i];
        occurence[vari] = occurence[vari] ? occurence[vari] + 1 : 1
    }
    return occurence;
}
let occurence = countOccurrences(mixedArr)

console.log(occurence)


