const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

console.group(`Знайти суму та кількість позитивних елементів`)

let counter = 0;
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    const positive = numbers[i];

    if (positive > 0) {

        counter++
        sum = sum + positive; 
    }

}
console.log(`Quantity = ${counter} and Sum = ${sum}`);
console.groupEnd();


console.group(`Знайти мінімальний елемент масиву та його порядковий номер`)

let item = numbers[0];
 
for (let i = 1; i < numbers.length; i++) {
    
    if (numbers[i] < item) {
        item = numbers[i];
    }
}
console.log(item);
console.groupEnd()

console.group(`Знайти максимальний елемент масиву та його порядковий номер`)

for (let i = 0; i < numbers.length; i++) {
    
    if (numbers[i] > numbers[0]) {
        numbers[0] = numbers[i];
    }
}

console.log(numbers[0]);
console.groupEnd();


console.group(`Визначити кількість негативних елементів`)

let counter1 = 0;
for (let i = 0; i < numbers.length; i++) {
    
    const negativ = numbers[i];
    if (negativ < 0) {
        counter1++   
    }
}
console.log(`Quantity = ${counter}`);
console.groupEnd();


console.group(`Знайти добуток позитивних елементів`)

let mult = 0;

for (let i = 0; i < numbers.length; i++) {
    const positive = numbers[i];

    if (positive > 0) {
        mult = sum * positive; 
    }
}
console.log(`Sum = ${mult}`);
console.groupEnd();