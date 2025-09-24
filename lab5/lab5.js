function task1() {
    jsConsole.clear();    
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr[i] = i * 5;
        jsConsole.writeLine(arr[i]);
    }
}

function task2() {
    jsConsole.clear();
    
    let input1 = document.querySelector("#textInput1").value;
    let input2 = document.querySelector("#textInput2").value;
    
    if (!input1.trim() || !input2.trim()) {
        jsConsole.writeLine("Ошибка: введите оба массива!");
        return;
    }
    
    let arr1 = Array.from(input1);
    let arr2 = Array.from(input2);
    
    jsConsole.writeLine("Первый массив: [" + arr1.join(', ') + "]");
    jsConsole.writeLine("Второй массив: [" + arr2.join(', ') + "]");
    
    let result = "Массивы равны";
    
    for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
        if (arr1[i] < arr2[i]) {
            result = "Первый массив лексикографически меньше второго";
            break;
        }
        if (arr1[i] > arr2[i]) {
            result = "Первый массив лексикографически больше второго";
            break;
        }
    }
    
    if (result === "Массивы равны" && arr1.length !== arr2.length) {
        result = arr1.length < arr2.length 
            ? "Первый массив лексикографически меньше второго" 
            : "Первый массив лексикографически больше второго";
    }
    
    jsConsole.writeLine("Результат сравнения: " + result);
}

function task3() {
    jsConsole.clear();
    
    let input = document.querySelector("#textInputArray").value;
    
    if (!input.trim()) {
        jsConsole.writeLine("Ошибка: введите массив чисел!");
        return;
    }
    
    let arr = input.split(' ').map(item => parseInt(item.trim()));
    
    if (arr.some(isNaN)) {
        jsConsole.writeLine("Ошибка: введите только числа!");
        return;
    }
    
    jsConsole.writeLine("Входной массив: [" + arr.join(", ") + "]");
    
    let maxSeq = [];
    let currentSeq = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentSeq.push(arr[i]);
        } else {
            if (currentSeq.length > maxSeq.length) {
                maxSeq = currentSeq.slice();
            }
            currentSeq = [arr[i]];
        }
    }
    
    if (currentSeq.length > maxSeq.length) {
        maxSeq = currentSeq;
    }

    jsConsole.writeLine("Максимальная последовательность: [" + maxSeq.join(", ") + "]");
    jsConsole.writeLine("Длина последовательности: " + maxSeq.length);
}

function task4() {
    jsConsole.clear();
    
    let input = document.querySelector("#textInputArray").value;
    
    if (!input.trim()) {
        jsConsole.writeLine("Ошибка: введите массив чисел!");
        return;
    }
    
    let arr = input.split(' ').map(item => parseInt(item.trim()));
    
    if (arr.some(isNaN)) {
        jsConsole.writeLine("Ошибка: введите только числа!");
        return;
    }
    
    jsConsole.writeLine("Входной массив: [" + arr.join(", ") + "]");
    
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
    
    jsConsole.writeLine("Наиболее частое число: " + maxNum);
    jsConsole.writeLine("Количество повторений: " + maxCount + " раз");
}

function loadTask(num) {
    if (!jsConsole) return;
    jsConsole.clear();
    
    document.querySelector("#inputTask2").style.display = "none";
    document.querySelector("#inputTask3").style.display = "none";
    document.querySelector("#inputArea").style.display = "none";

    if (num === 1) {
        document.querySelector("#inputArea").style.display = "none";
        currentTask = task1;
        task1();
    } else if (num === 2) {
        document.querySelector("#inputArea").style.display = "flex";
        document.querySelector("#inputTask2").style.display = "flex";
        document.querySelector("#inputTask3").style.display = "none";
        currentTask = task2;
        document.querySelector("#textInput1").value = "";
        document.querySelector("#textInput2").value = "";
        jsConsole.writeLine("=== Задание 2: Сравнение символьных массивов ===");
        jsConsole.writeLine("Введите два массива символов и нажмите 'Сравнить массивы'");
    } else if (num === 3) {
        document.querySelector("#inputArea").style.display = "flex";
        document.querySelector("#inputTask2").style.display = "none";
        document.querySelector("#inputTask3").style.display = "flex";
        currentTask = task3;
        document.querySelector("#textInputArray").value = "";
        jsConsole.writeLine("=== Задание 3: Максимальная последовательность ===");
        jsConsole.writeLine("Введите массив чисел через запятую и нажмите 'Выполнить'");
    } else if (num === 4) {
        document.querySelector("#inputArea").style.display = "flex";
        document.querySelector("#inputTask2").style.display = "none";
        document.querySelector("#inputTask3").style.display = "flex";
        currentTask = task4;
        document.querySelector("#textInputArray").value = "";
        jsConsole.writeLine("=== Задание 4: Наиболее частое число ===");
        jsConsole.writeLine("Введите массив чисел через запятую и нажмите 'Выполнить'");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#runBtn").addEventListener("click", function() {
        if (currentTask) currentTask();
        else jsConsole.writeLine("Сначала выберите задание.");
    });
    
    document.querySelector("#textInputArray").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            if (currentTask === task3 || currentTask === task4) {
                currentTask();
            }
        }
    });
    
    document.querySelector("#textInput1").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            if (currentTask === task2) {
                task2();
            }
        }
    });
    
    document.querySelector("#textInput2").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            if (currentTask === task2) {
                task2();
            }
        }
    });
});