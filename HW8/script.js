let number = 10;
let result = '';
console.group(`1. Вивести на сторінку в один рядок через кому числа від 10 до 20.`); {
    while (number <= 20) {
        result += (`${number},`);
        number++
    }
     console.log(result);
     console.groupEnd();
}

console.group(`2. Вивести квадрати чисел від 10 до 20.`); { 

    let i = 10;
    while (i <= 20 ) {
        console.log(i * i);
        i++
    }
 console.groupEnd();
}

console.group(`3. Вивести таблицю множення на 7.`); { 
    
    for (let i = 1; i < 11; i++) { 
        console.log(`${i} * 7 = ${i * 7}`);
    }
 console.groupEnd();
}
console.group(`4. Знайти добуток усіх цілих чисел від 15 до 35.`); { 
    let mult = 1;
    for (let i = 15; i <= 35; i++){
        mult = mult * i;
    }
     console.log(mult);
     console.groupEnd();
}

console.group(`5. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.`); { 
    let result = 0;
    for (let i = 1; i <= 500; i++){
        result = result + i;
    }
    console.log(result / 500);
    console.groupEnd();
}
console.group(`6. Вивести суму лише парних чисел в діапазоні від 30 до 80.`); { 
    let sum = 0;
    for (let i = 30; i <= 80; i++){
        if (!(i % 2)) {
         sum = sum + i;
        }
    }
    console.log(sum);
    console.groupEnd();
}
