function task1() {
  const input = document.getElementById("vectorInput").value.trim();
  const output = document.getElementById("output");

  if (!input) {
    output.value = "Ошибка: введите хотя бы одно число.";
    return;
  }

  let A = input.split(/\s+/).map(Number);

  if (A.some(isNaN)) {
    output.value = "Ошибка: ввод должен содержать только числа.";
    return;
  }

  if (A.length === 0) {
    output.value = "Ошибка: вектор пуст.";
    return;
  }

  let sum = A.reduce((acc, val) => acc + val, 0);
  let avg = sum / A.length;

  let count = A.filter(x => x > avg).length;

  output.value =
    "Вектор: " + A.join(", ") +
    "\nСреднее значение: " + avg.toFixed(2) +
    "\nКоличество элементов > среднего: " + count;
}

function task2() {
  const input = document.getElementById("vectorInput").value.trim();
  const output = document.getElementById("output");
  if (!input) {
    output.value = "Ошибка: введите хотя бы одно число.";
    return;
  }

  let A = input.split(/\s+/).map(Number);

  if (A.some(isNaN)) {
    output.value = "Ошибка: ввод должен содержать только числа.";
    return;
  }

  if (A.length === 0) {
    output.value = "Ошибка: вектор пуст.";
    return;
  }

  let maxVal = Math.max(...A);
  let maxCount = A.filter(x => x === maxVal).length;
  let firstIndex = A.indexOf(maxVal);

  let transformed = [...A];
  if (maxCount > 1) {
    for (let i = 0; i < firstIndex; i++) {
      transformed[i] /= 2;
    }
  }

  output.value ="Исходный вектор: " + A.join(", ") +
        "\nМаксимальный элемент: " + maxVal +
        "\nИндекс первого максимального: " + firstIndex +
        "\nКоличество максимумов: " + maxCount +
        "\nПреобразованный вектор: " + transformed.join(", ");
}