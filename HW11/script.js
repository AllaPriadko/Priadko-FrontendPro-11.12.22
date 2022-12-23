const firstArray = ['Apple', 'Banana', 'Orange', 'Kiwi', 'Granat']
const secondArray = [ 'Pineapple', 'Peach','Kiwi', 'Pear', 'Banana',]

function createArr (array1, array2) {
    const empty = [];

    if (!(Array.isArray(array1) || Array.isArray(array2))) {
        return empty;
    }
    
    const lastArr = [];

    for (let i = 0; i < array1.length; i++){
        const elementFirst = array1[i];
        const elementSecond = array2[i];
          
        if (!(array1.includes(elementSecond))) {
            lastArr.push(elementSecond);
        }
        if (!(array2.includes(elementFirst))) {
            lastArr.push(elementFirst)       
        } 
    }
    return lastArr;
}
 
console.log(createArr(firstArray, secondArray));



