// 1. Написать JavaScript функцию,  которая переворачивает строку и возвращает ее.
//     * Пример:" "sample"  "elpmas".

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString(str) {
    return str.split('').reverse().join('');
}

rl.question("Введите строку для переворота: ", (input) => {
    const reversed = reverseString(input);
    console.log(`Перевернутая строка: ${reversed}`);
    rl.close();
});

