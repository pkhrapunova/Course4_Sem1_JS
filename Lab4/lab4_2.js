//  2. Напишите JavaScript функцию, чтобы проверить, правильно ли помещены скобки в заданном выражении.
//     * Пример правильного выражения: '((a + b) / 5-d)'.
//     * Пример неправильного выражения:') (a + b))'.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isBracketsBalanced(expression) {
    let stack = [];
    for (let char of expression) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

rl.question("Введите выражение для проверки скобок: ", (expr) => {
    if (!expr.includes('(') && !expr.includes(')')) {
        console.log("В выражении нет скобок для проверки.");
    } else if (isBracketsBalanced(expr)) {
        console.log("Скобки расставлены правильно.");
    } else {
        console.log("Скобки расставлены неправильно.");
    }
    rl.close();
});
