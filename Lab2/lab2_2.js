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
