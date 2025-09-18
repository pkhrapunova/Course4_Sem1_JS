// 17.Дан текст. Создать новый текст путем вычеркивания из исходного текста слов максимальной длины.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введите текст: ", (text) => {
  text = text.trim();

  if (text.length === 0) {
    console.log("Пусто!");
    rl.close();
    return;
  }

  let words = text.split(/\s+/);

  let maxLen = Math.max(...words.map(w => w.length));//Делает массив как символы просто потому что max не воспринимает массивы
  let filtered = words.filter(w => w.length < maxLen);

  if (filtered.length === 0) {
    console.log("Все слова имеют одинаковую максимальную длину.");
  } else {
    let result = filtered.join(" ");
    console.log("Новый текст:", result);
  }

  rl.close();
});
