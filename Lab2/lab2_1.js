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