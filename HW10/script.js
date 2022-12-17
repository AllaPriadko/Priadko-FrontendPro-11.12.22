const students = ['Petro', 'Hanna', 'Taras', 'Vika', 'Luka', 'Olha', 'Vira', 'Denys', 'Kostya', 'Lesya'];


//Додати 2 студенти в кінець масиву
students.push('Sasha');
students.push('Danya');

console.log(students);

//Додати 2 студенти на початок масиву
students.unshift('Alla', 'Sofia');
console.log(students);

//Видалити останнього студента

students.pop();
console.log(students);

//Видалити першого студента
students.shift();
console.log(students);

//Користувач вводить імя студента, перевірити чи такий студент є масиві і вивести результат в консоль

const nameOne = prompt('Put a name');

const result = students.includes(`${nameOne}`);
console.log(`${nameOne} is here ${result}`);

/* Створити ще один масив з існуючого,
 включивши в нього студентів починаючи
з індекса 3 і закінчуючи індесом 6 включно ( 3,4,5,6)
*/
const cutStudents = students.slice(3, 7);
console.log(cutStudents);

/*Створити ще один масив нових студентів(довжина 5), 
і обєднати існуючих студентів з новими у новий масив 
усі студенти. ДАЛІ ПРАЦЮЄМО З МАСИВОМ УСІ СТУДЕНТИ
*/

const newStudents = ['Andrii', 'Viktor', 'Valya', 'Leo', 'Sid'];

const allStudents = students.concat(newStudents);
console.log(allStudents);

//Видалити студента номер 4

allStudents.splice(3, 1);
console.log(allStudents);

//Замінити студента номер 6 на студента з ім'ям Іван

allStudents.splice(5, 1, 'Ivan');
console.log(allStudents);

//Вививести усіх студентів у консоль у вигляді стрічки, студенти повинні бути розділені символом тире 

console.log(allStudents.join(' - '));


