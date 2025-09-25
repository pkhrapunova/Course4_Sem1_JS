function task1() {
    let matrix = getMatrix();
    let size = matrix.length;
    let results = [];

    for (let col = 0; col < size; col++) {
        let hasEven = false;
        let product = 1;
        for (let row = 0; row < size; row++) {
            let val = matrix[row][col];
            if (val % 2 === 0) hasEven = true;
            product *= val;
        }
        if (!hasEven) results.push(`Столбец ${col+1}: произведение = ${product}`);
    }

    document.getElementById("output").innerText =
        results.length ? results.join("\n") : "Нет столбцов без чётных элементов";
}