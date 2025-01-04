/* Use of "sort()" method---> it works with the string and numbers. it works in alphabetic order and it also replace the original array */

/* in string array */
const persons = ['Mark', 'Clark', 'Shark', 'Bjark', 'Petark', 'Copark', 'ark']
const sortedpersons = persons.sort();
console.log(sortedpersons)

/* in number array */
/* there are two order in numbers 1. ascending and 2.descending order 
Ascending order ---> 1, 2, 3, 4, 5
Descending order ---> 5, 4, 3, 2, 1
*/

/* Ascending order */
const numbers = [4, 7, 2, 8, 6];
const numbers_asc = numbers.sort();
console.log(numbers_asc)

/* if i have array [4, 7, 12, 8, 43, 6, 1]. in normal way acending means [1, 4, 6, 7, 8, 12, 43], but java script does not work in that way. while it will order this as [1, 12, 4, 43, 7, 8]. this is because it will think as alphabetic order. it means i will not count 1 is small, 12 is big, rather it will think that 1 and will be 12 as alphabetic order then 4 then 43 then 7 themn 8. so it will consider the big or small rather will work as alphabetic way.  */
/* if i want to solve this---[4, 7, 12, 8, 43, 6, 1] */
const number1 = [4, 7, 12, 8, 43, 6, 1];
// const num_asc = number1.sort() /* --- it is sorted like this [1, 12, 4, 43, 7, 8]. Not working proper way. to make it work, see the next line--> */

/* ----->>>Ascending order */
const num_asc = [...number1].sort(function (a, b) {return a- b}) /* now it works in a proper ascneding order such as [1, 4, 6, 7, 8, 12, 43]. this is ascending order. i need to copy the array to stop the replacing. th method is [...] */
console.log(num_asc)

/* ----->>>Descending order */
const num_dsc = [...number1].sort(function (a, b) {return b - a}) /* this is for descending order */
console.log(num_dsc)


/* what is the Alphabetic ASCII code shows the value of alphabet ---> http://sticksandstones.kstrom.com/appen.html */




