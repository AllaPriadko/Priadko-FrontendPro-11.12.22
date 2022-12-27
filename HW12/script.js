const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {

    let newArr;
    if (array.splice(item - 1, 1)) {
        newArr = array.slice();
    }

    return newArr;
}
        
removeElement(array, 5);
console.log(array); 


