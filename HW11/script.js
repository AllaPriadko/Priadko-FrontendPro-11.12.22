const firstArray = ['Apple', 'Banana', 'Orange', 'Kiwi', 'Granat']
const secondArray = [ 'Pineapple', 'Peach','Kiwi', 'Pear', 'Banana',]

function createArr (array1, array2) {
    const finalArr = [];

    if (!(Array.isArray(array1) && Array.isArray(array2))) {
        console.log(`Error: not an Arrey`);
        return finalArr;
    }

    for (let i = 0; i < array1.length; i++){
        const elementFirst = array1[i];
        const elementSecond = array2[i];
          
        if (!(array1.includes(elementSecond))) {
            finalArr.push(elementSecond);
        }
        if (!(array2.includes(elementFirst))) {
            finalArr.push(elementFirst)       
        } 
    }
    return finalArr;
}
 
console.log(createArr(firstArray, secondArray));



