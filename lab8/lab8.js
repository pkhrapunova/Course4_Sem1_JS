let currentTask = null;

function task1() {
    jsConsole.clear();
    let a = jsConsole.read("#input1Task1");
    let b = jsConsole.read("#input2Task1");

    jsConsole.writeLine("Результат conc(" + a + "," + b + ") = " + conc(a, b));

    function conc(a, b) {
        return String(a) + String(b);
    }
}

const comp = function (a, b) {
    return (a === b) ? 1 : -1;
};
function task2() {
    jsConsole.clear();
    let a = jsConsole.read("#textInput1");
    let b = jsConsole.read("#textInput2");
    jsConsole.writeLine('Результат comp("' + a + '","' + b + '") = ' + comp(a, b));
}

function task3() {
    jsConsole.clear();
    (function () {
        jsConsole.writeLine("message in console");
    })();
}

function task4() {
    jsConsole.clear();
    let n = jsConsole.readInteger("#fibInput");
    if (isNaN(n) || n<=0) {
        jsConsole.writeLine("Ай-яй-яй!");
        return;
    }

    function fib(n) {
        if (n <= 2) return 1;
        let a = 1, b = 1, c;
        for (let i = 3; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

    jsConsole.writeLine("fib(" + n + ") = " + fib(n));
}

function loadTask(taskNumber) {
    document.getElementById('inputArea').style.display = 'block';
    for (let i = 1; i <= 4; i++) {
        const taskDiv = document.getElementById('inputTask' + i);
        if (taskDiv) taskDiv.style.display = 'none';
    }

    const selectedTask = document.getElementById('inputTask' + taskNumber);
    if (selectedTask) selectedTask.style.display = 'flex';

    jsConsole.clear();
    document.getElementById("runBtn").style.display = "inline-block";

    switch (taskNumber) {
        case 1: currentTask = task1; break;
        case 2: currentTask = task2; break;
        case 3: currentTask = task3; break;
        case 4: currentTask = task4; break;
        default: currentTask = null;
    }
}



document.getElementById("runBtn").addEventListener("click", function () {
    if (currentTask) currentTask();
    else jsConsole.writeLine("Сначала выберите задание.");
});