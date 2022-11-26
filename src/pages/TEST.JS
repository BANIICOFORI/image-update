// function hasDuplicates(arr) {   

//  if (hasDuplicates(arr)) {
//      alert('true!')
//      console.log("True")
//  }else{
//      alert("false")
//      console.log("False")
//  } 
//  }
//  hasDuplicates( ["A", "B", "C", "D", "E"])


//  function hasDuplicates(arr) {
//     var counts = [];

//     for (var i = 0; i <= arr.length; i++) {
//         if (counts[arr[i]] === undefined) {
//             counts[arr[i]] = 1;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }






//   function hasDuplicates(arr) {
//     var counts = [];

//     for (var i = 0; i <= arr.length; i++) {
//         if (counts[arr[i]] === undefined) {
//             counts[arr[i]] = 1;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }
// hasDuplicates(["A", "A", "C", "D", "E"])
// // [...]

// // var arr = [1, 5, 2, 3, 4];
// var arr = ["A", "A", "C", "D", "E"];

// if (hasDuplicates(arr)) {
//   alert('Error: you have duplicates values !');
//     console.log("true")
// }
// else{
//   alert("No duplicates was fund");
//   console.log("false")
// }


// function hasDuplicates(arr) {
//     var counts = [];

//     for (var i = 0; i <= arr.length; i++) {
//         if (counts[arr[i]] === undefined) {
//             counts[arr[i]] = 1;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }
// hasDuplicates(["A", "B", "C", "D", "E"])

// //OUTPUT  FALSE

// hasDuplicates(["A", "B", "C", "A", "E"])
// //OUTPUT  TRUE
//  



// function hasDuplicates(arr) {
//     var counts = [];

//     for (var i = 0; i <= arr.length; i++) {
//         if (counts[arr[i]] === undefined) {
//             counts[arr[i]] = 1;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }
// hasDuplicates(["A", "B", "C", "D", "E"])
//users.includes("Boadi")

// let users=["Ama", "Boadi", "Cate", "Anna", "Eric"]

// let age = [4,6,7,12,156,87,65,43,54,12,14]

// function lineaeSearch(arr,elem) {
//     for(i=0;i<arr.length;i++){
//         if(arr[i]===elem){
//             return true;
//         }
//         return false;
//     }
    
// }
// lineaeSearch([1,2,3,4,5,6,45,67,45,78,32,45], 67)

//  let ages = [4,6,7,12,156,87,65,43,54,12,14];
// ages.indexOf(4)
// ages.includes(12)


// function lineaeSearch(arr,elem) {
//     for(i=0;i<arr.length;i++){
//         if(arr[i]===elem){
//             return i;
//         }
//         return -1;
//     }

// function binarySearch(arr,elem) {
//     let start = 0;
//     let end = arr.length -1;
//     let middle = Math.floor((start+end)/2)
    
//     while (arr[middle]!==elem && start<=end) {
//        // console.log(start,middle,end)
//         if (elem>arr[middle]) {
//             start = middle + 1
//         }else{
//             end = middle - 1; 
//         }
//        middle = Math.floor((start+end)/2) 
//     }
//     if (arr[middle]===elem) {
//         return middle;
//     }else{
//       return -1 ;
//     }
    
// }
// binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 15)