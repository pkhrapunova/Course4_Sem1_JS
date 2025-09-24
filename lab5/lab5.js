function task1() {
    jsConsole.clear();
    
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr[i] = i * 5;
        jsConsole.writeLine("arr[" + i + "] = " + arr[i]);
    }
    
}

function task2() {
    jsConsole.clear();
    
    // Создаем два тестовых массива как на картинке
    let arr1 = ['h', 'e', 'l', 'l', 'o'];
    let arr2 = ['h', 'a', 'l', 'l', 'o'];
    
    jsConsole.writeLine("Первый массив: [" + arr1.join(', ') + "]");
    jsConsole.writeLine("Второй массив: [" + arr2.join(', ') + "]");
    
    let result = "Массивы равны";
    
    // Сравниваем поэлементно
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
    
    // Если все элементы равны, но массивы разной длины
    if (result === "Массивы равны" && arr1.length !== arr2.length) {
        result = arr1.length < arr2.length 
            ? "Первый массив лексикографически меньше второго" 
            : "Первый массив лексикографически больше второго";
    }
    
    jsConsole.writeLine("Результат сравнения: " + result);
}

function task3() {
    jsConsole.clear();
    
    // Тестовые данные как на картинке
    let arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
    
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
    
    // Тестовые данные как на картинке
    let arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
    
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
    jsConsole.writeLine("=== Задание завершено ===");
}


// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#runBtn").addEventListener("click", function() {
        if (currentTask) currentTask();
        else jsConsole.writeLine("Сначала выберите задание.");
    });
});