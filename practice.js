const colors = ['red', 'blue', 'green', 'yellow', 'orange']

/* Normal method */
// colors.reverse()
// console.log(colors)

// let newArray = [];
/* for(let i = 0; i < colors.length; i++){
    const index = colors[i];
    newArray.unshift(index);
} */

/* for(color of colors){
    newArray.unshift(color)
} */
// console.log(newArray)

for(let i = colors.length - 1; i >= 0; i --){
    const index = colors[i];
    // newArray.push(index)
}
// console.log(newArray)

const numbers = [12, 98, 5, 41, 23, 78, 46];
const newArray = [];
for(let i = 0; i < numbers.length; i ++){
    if(numbers[i] % 2 === 0)[
        newArray.push(numbers[i])
    ]
}
// console.log(newArray)
let newArray1 = []
var names = ['Tom', 'Tim', 'Tin', 'Tik'];
for(let name of names){
    // console.log(name)
}
const concateee = names.join('')
newArray1.push(concateee)
console.log(newArray1)


const statement = 'I am a hard working person'
const vacantarray = []

// const words = statement.split(' '). reverse();
const words = statement.split(' '). reverse(). join(' ')
vacantarray.push(words)
console.log(vacantarray)