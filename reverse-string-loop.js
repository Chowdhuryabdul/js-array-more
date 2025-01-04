const friends = ['Mark', 'Clark', 'Shark', 'Bjark', 'Petark', 'Copark']

/* Reverse with the normal method */
friends.reverse()
console.log(friends)

/* reverse with for...loop */

const theNewArray = [];
for(let i = 0; i < friends.length; i++){
    const frnd = friends[i];
    theNewArray.unshift(frnd)
}
console.log(theNewArray)

/* reverse with the for...of loop */

const rev1 = [];
for(frnd of friends){
  rev1.unshift(frnd)   
}
console.log(rev1)

/* reversw with the highest index */

const rev2 = [];
for(let i = friends.length - 1; i >= 0; i--){
    const frnd = friends[i];
    rev2.push(frnd)
}
console.log(rev2)