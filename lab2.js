// Создание таблицы для ввода матрицы
function createMatrix(size) {
    var matrixDiv = document.getElementById('matrix');
    matrixDiv.innerHTML = '';
    size = parseInt(size);
    if (size >= 1) {
        var table = document.createElement('table');
        for (var i = 0; i < size; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < size; j++) {
                var td = document.createElement('td');
                var input = document.createElement('input');
                input.type = 'number';
                input.id = 'matrixElement' + i + '_' + j;
                td.appendChild(input);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        matrixDiv.appendChild(table);
    } else {
        alert('Введите число от 1');
    }
}

// Считывание матрицы из input'ов
function getMatrix() {
    var size = parseInt(document.getElementById('matrixSize').value);
    var matrix = [];
    for (var i = 0; i < size; i++) {
        var row = [];
        for (var j = 0; j < size; j++) {
            var val = parseInt(document.getElementById('matrixElement' + i + '_' + j).value);
            row.push(isNaN(val) ? 0 : val); // если пусто — берём 0
        }
        matrix.push(row);
    }
    return matrix;
}

// 1. Произведение элементов в тех столбцах, где нет элементов, кратных 2
function task1() {
    var matrix = getMatrix();
    var size = matrix.length;
    var results = [];

    for (var col = 0; col < size; col++) {
        var hasEven = false;
        var product = 1;
        for (var row = 0; row < size; row++) {
            var val = matrix[row][col];
            if (val % 2 === 0) hasEven = true;
            product *= val;
        }
        if (!hasEven) results.push(`Столбец ${col+1}: произведение = ${product}`);
    }

    document.getElementById("output").innerText =
        results.length ? results.join("\n") : "Нет столбцов без чётных элементов";
}

// 2. Количество отрицательных элементов в строках, где есть хотя бы один ноль
function task2() {
    var matrix = getMatrix();
    var size = matrix.length;
    var results = [];

    for (var row = 0; row < size; row++) {
        var hasZero = matrix[row].includes(0);
        if (hasZero) {
            var negativeCount = matrix[row].filter(x => x < 0).length;
            results.push(`Строка ${row+1}: отрицательных элементов = ${negativeCount}`);
        }
    }

    document.getElementById("output").innerText =
        results.length ? results.join("\n") : "Нет строк с нулевыми элементами";
}