//1 У вас есть массив объектов:

const countries = [
    {
        country: "USA",
        capital: "Washington",
        language: "English"
    },
    {
        country: "Brazil",
        capital: "Brasilia",
        language: "Portugese"
    },
    {
        country: "Germany",
        capital: "Berlin",
        language: "German"
    }
]
countries.forEach(element => console.log(element.capital + " is the capital of " + element.country + ". People speak " + element.language + " there. "));




//ваша задача вывести в консоль фразы:
// {capital} is the capital of {coutry}. People speak {language} there
//например
//London is the capital of England. People speak English there
//примечание: новый массив создавать не нужно, нужно именно вывести в консоль 3 фразы

//2 Вы работаете с массивом зарплат:

const salaries = [300, 500, 1800, 120, 750, 3200, 1310];
console.log(salaries.sort((a, b) => b - a));
let newSalaries = salaries.map(element => element + 200);
console.log(newSalaries);
let superNewSalaries = newSalaries.filter(element => element > 1000);
console.log(superNewSalaries);

//отсортируйте его в порядке убывания 
//затем создайте новый массив на основе массива salaries, в котором все зарплаты поднимутеся на 200.
//Выведите в консоль этот новый массив с увеличенными зарплатами

//затем на основе этого нового массива сздайте массив, в который попадут только те зарплаты, которые больше тысячи.
//выведите в консоль этот новый отфильтровынный массив

//3 У вас есть строковая переменная

let phrase = "My favorite color is green";
let newPhrase = phrase.split(" ");
//console.log(newPhrase);
newPhrase.pop();//delete the last element
//console.log(newPhrase);
newPhrase.push("purple"); //push the last element
//console.log(newPhrase);
let superPhrase = newPhrase.join(" ");
console.log(superPhrase);//result







//ваша задача заменить слово green на purple. На выходе у вас должна получиться фраза 
//"My favorite color is purple" . Попробуйте преобразовать строку в массив, заменить 4й элемент и снова объединить в строку.

//4 Отсортируйте список работников по алфавиту

const workers = ["Stone", "Goldberg", "House", "Andersen", "Black", "Swan", "McKenzy", "Hamilton"];
console.log(workers.sort());

//5 Объедините 2 массива workers и bosses, отсортируйте их по алфавиту.

const bosses = ["Potter", "Baley", "Hudson", "Green"];
let newArr = workers.concat(bosses).sort();
console.log(newArr);

//попробуйте сделать это , зачейнив методы (т.е. написав их по порядку через точку например arr.sort().reverse())

//6 Напишите функцию, которая проверяет массив на то, соответствует ли условию каждый его элемент
//условие - все элементы массива кратны 5

function checkArray(array) {
    console.log(array.every(element => element % 5 === 0));

}

checkArray([5, 10, 15, 20, 100]) //true
checkArray([8, 13, 253, 85, -4]) //false


