function task2() {
    let matrix = getMatrix();
    let size = matrix.length;
    let results = [];
    for (let row = 0; row < size; row++) {
        let hasZero = matrix[row].includes(0);
        if (hasZero) {
            let negativeCount = matrix[row].filter(x => x < 0).length;
            results.push(`Строка ${row+1}: отрицательных элементов = ${negativeCount}`);
        }
    }

    document.getElementById("output").innerText =
        results.length ? results.join("\n") : "Нет строк с нулевыми элементами";

}
