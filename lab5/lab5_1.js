(function () {
    function createJsConsole(selector) {
        var self = this;
        var consoleElement = document.querySelector(selector);

        if (consoleElement.className) {
            consoleElement.className = consoleElement.className + " js-console";
        }
        else {
            consoleElement.className = "js-console";
        }

        var textArea = document.createElement("p");
        consoleElement.appendChild(textArea);

        self.write = function jsConsoleWrite(text) {
            var textLine = document.createElement("span");
            textLine.innerHTML = text;
            textArea.appendChild(textLine);
            consoleElement.scrollTop = consoleElement.scrollHeight;
        }

        self.writeLine = function jsConsoleWriteLine(text) {
            self.write(text);
            textArea.appendChild(document.createElement("br"));
        }

        return self;
    }
    jsConsole = new createJsConsole("#console");
}).call(this);

// ------------------- ЗАДАЧИ -------------------

// 1. Массив из 20 чисел (индекс * 5)
function task1() {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr[i] = i * 5;
        jsConsole.writeLine(arr[i]);
    }
}

// 2. Лексикографическое сравнение
function task2() {
    let arr1 = ['a', 'b', 'c', 'd'];
    let arr2 = ['a', 'b', 'd', 'c'];

    let result = "Массивы равны";
    for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
        if (arr1[i] < arr2[i]) {
            result = "Первый массив меньше второго";
            break;
        }
        if (arr1[i] > arr2[i]) {
            result = "Первый массив больше второго";
            break;
        }
    }
    if (result === "Массивы равны" && arr1.length !== arr2.length) {
        result = arr1.length < arr2.length ? "Первый массив меньше второго" : "Первый массив больше второго";
    }
    jsConsole.writeLine(result);
}

// 3. Максимальная последовательность равных элементов
function task3() {
    let arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
    let maxSeq = [];
    let currentSeq = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentSeq.push(arr[i]);
        } else {
            if (currentSeq.length > maxSeq.length) {
                maxSeq = currentSeq;
            }
            currentSeq = [arr[i]];
        }
    }
    if (currentSeq.length > maxSeq.length) {
        maxSeq = currentSeq;
    }

    jsConsole.writeLine("[" + maxSeq.join(", ") + "]");
}

// 4. Наиболее частое число
function task4() {
    let arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
    let freq = {};
    let maxNum = arr[0];
    let maxCount = 1;

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxCount) {
            maxCount = freq[num];
            maxNum = num;
        }
    }
    jsConsole.writeLine(maxNum + " (" + maxCount + " раз)");
}
