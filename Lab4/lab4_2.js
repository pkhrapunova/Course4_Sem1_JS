//  2. Напишите JavaScript функцию, чтобы проверить, правильно ли помещены скобки в заданном выражении.
//     * Пример правильного выражения: '((a + b) / 5-d)'.
//     * Пример неправильного выражения:') (a + b))'.


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

function processBrackets() {
    let expr = jsConsole.read("#textInput").trim();

    if (expr.length === 0) {
        jsConsole.writeLine("Пусто!");
        return;
    }

    if (!expr.includes('(') && !expr.includes(')')) {
        jsConsole.writeLine("В выражении нет скобок для проверки.");
    } else if (isBracketsBalanced(expr)) {
        jsConsole.writeLine("Скобки расставлены правильно.");
    } else {
        jsConsole.writeLine("Скобки расставлены неправильно.");
    }
}
