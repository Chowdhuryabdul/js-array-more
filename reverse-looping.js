const numbers = [12, 13, 14, 15, 16]
/* Normal method */
numbers.reverse()
console.log(numbers)

/* For...loop method  */

/* if i do the reverse with "unshift" method. i start looping from first index but when second index insert into then first index becomes 2nd index. this is the way to make the first index as last index. so it is not proper reverse as it access the index from the 0 and push it to last. it menas if i have an array [1,2,3,4], in the "unshift" method it also access 0 index first such as [1] and then isert index [2, 1]. in this way first index becomes the last index in the array.  */
const rev_numbers = [];
for(let i = 0; i < numbers.length; i++){  /* here (let i = 0) means it begins from the 0 index from the beginning */
    const num = numbers[i];
    rev_numbers.unshift(num)
}
console.log(rev_numbers)


/* For...of method */
for(const num of numbers){
    rev_numbers.unshift(num)
}
console.log(rev_numbers)


/* Reverse with the highest-index method */

/* but if i begin with the [i = highest index (numbers.length - 1)], it means loop is going to begin from the last index. Not same as the "unsshift" method. for example [1,2,3,4], in this method it statrs accessing from the [4] and tthe others */

const rev_numbers1 = [] /* this is a array to push the elements */
for(let i = numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    rev_numbers1.push(num)
}
console.log(rev_numbers1)