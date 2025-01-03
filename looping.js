/* Looing techniques 
1. for loop
2. while loop
3. do while --> do not use that much
4. for of --> it uses in case of array
5. for in --> it uses in case of object
*/


/* for of loop */

const friends = ['Elon', 'Bill', 'Mark', 'Waren']
for(const friend of friends){
    // console.log(friend)

}

for(let i = 0; i < friends.length; i++){
    console.log(friends[i])
}


const numbers = [12, 13, 14, 15, 16, 17, 18]
let i = 0
while(i <numbers.length ){
    console.log(numbers[i])
    i++
}
