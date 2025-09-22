// 1. Написать JavaScript функцию,  которая переворачивает строку и возвращает ее.
//     * Пример:" "sample"  "elpmas".


function reverseString() {
    let text = jsConsole.read("#textInput").trim();
    if (text.length === 0) {
        jsConsole.writeLine("Пусто!");
        return;
    }
    let result = text.split('').reverse().join('');
    jsConsole.writeLine("Перевернутая строка: " + result);

}

