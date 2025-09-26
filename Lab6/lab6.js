function task1() {
    let text =  jsConsole.read("#textInput");
    if (!text.trim()) {
        jsConsole.writeLine("Пусто!");
        return;
    }
    jsConsole.writeLine("Результат: " + replaceSpaces(text));
}

function replaceSpaces(text) {
  return text.replace(/ /g, '&nbsp;');
}

function task2() {
    jsConsole.clear();
    let input = document.querySelector("#textInput").value;
    if (!input.trim()) {
        jsConsole.writeLine("Ошибка: введите массив чисел!");
        return;
    }
    let arr = input
        .trim()
        .split(/\s+/)
        .filter(x => x !== "")
        .map(Number);
    if (arr.some(isNaN)) {
        jsConsole.writeLine("Ошибка: введите только числа!");
        return;
    }
    jsConsole.writeLine("Результат: " + firstGreaterThanNeighbors(arr));

}

function firstGreaterThanNeighbors(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return i;
    }
  }
  return -1;
}