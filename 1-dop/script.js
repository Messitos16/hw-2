const input = prompt("Hello");
const type = isNaN(input) ? "введено не корректное значение" : "вы ввели число";
console.log(type)