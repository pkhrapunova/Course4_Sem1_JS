function processText() {
  let text = jsConsole.read("#textInput").trim();

  if (text.length === 0) {
    jsConsole.writeLine("Пусто!");
    return;
  }

  let words = text.split(/\s+/);
  let maxLen = Math.max(...words.map(w => w.length));
  let filtered = words.filter(w => w.length < maxLen);

  if (filtered.length === 0) {
    jsConsole.writeLine("Все слова имеют одинаковую максимальную длину.");
  } else {
    let result = filtered.join(" ");
    jsConsole.writeLine("Новый текст: " + result);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("textInput");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      processText(); 
    }
  });
});
