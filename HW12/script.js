const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    const indexOfElement = array.indexOf(item);
    if (indexOfElement === -1) {
        console.log(`No such element`);
    } else {
        array.splice(indexOfElement, 1);
        console.log(array); 
    }
}
removeElement(array, 5);


