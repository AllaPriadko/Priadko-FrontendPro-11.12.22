

function returnRandom(array) {
   
    let result = Math.floor(Math.random() * array.length)
    return array[result];
}
console.log(returnRandom([1, 2, 3, 4, 5, 6, 7, 8, 9]));