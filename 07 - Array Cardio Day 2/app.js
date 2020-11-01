// ## Array Cardio Day 2

const people = [
   { name: 'Wes', year: 1988 },
   { name: 'Kait', year: 1986 },
   { name: 'Irv', year: 1970 },
   { name: 'Lux', year: 2015 }
];

const comments = [
   { text: 'Love this!', id: 523423 },
   { text: 'Super good', id: 823423 },
   { text: 'You are the best', id: 2039842 },
   { text: 'Ramen is my fav food ever', id: 123523 },
   { text: 'Nice Nice Nice!', id: 542328 }
];

//! Some and Every Checks
//!  Array.prototype.some() // is at least one person 19 or older?
// const some19 = function (arr) {
//    return arr.some(person => {
//       return (2020 - person.year) >= 19;
//       })
// }

// const isAdult = people.some(person => {
//    const currYear = (new Date()).getFullYear();
//    if (currYear - person.year >= 19) {
//       return true;
//    } 
// })

// console.log(some19(people));
// console.log(isAdult);


//! Array.prototype.every() // is everyone 19 or older?
const adults = people.every(person => {
   const currYear = (new Date()).getFullYear();
   if (currYear - person.year >= 19) {
      return true;
   }
})

console.log(adults);

//! Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findIt = comments.find(comment => comment.id === 823423);
console.log(findIt);


//! Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
//! delete method 1 - mutates the original array
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);
// comments.splice(index, 1) 
console.log(comments);

//! delete method 2 - copies the array
const newComments = [
   ...comments.slice(0, index),
   ...comments.slice(index + 1)
]
console.log(newComments);