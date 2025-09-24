(function () {
    function createJsConsole(selector) {
        var self = this;
        var consoleElement = document.querySelector(selector);

        if (consoleElement.className) {
            consoleElement.className = consoleElement.className + " js-console";
        }
        else {
            consoleElement.className = "js-console";
        }

        var textArea = document.createElement("p");
        consoleElement.appendChild(textArea);

        self.write = function jsConsoleWrite(text) {
            var textLine = document.createElement("span");
            textLine.innerHTML = text;
            textArea.appendChild(textLine);
            consoleElement.scrollTop = consoleElement.scrollHeight;
        }

        self.writeLine = function jsConsoleWriteLine(text) {
            self.write(text);
            textArea.appendChild(document.createElement("br"));
        }

        self.read = function readText(inputSelector) {
            var element = document.querySelector(inputSelector);
            if (element.innerHTML) {
                return element.innerHTML;
            }
            else {
                return element.value;
            }
        }

        self.readInteger = function readInteger(inputSelector) {
            var text = self.read(inputSelector);
            return parseInt(text);
        }

        self.readFloat = function readFloat(inputSelector) {
            var text = self.read(inputSelector);
            return parseFloat(text);
        }
        
        self.clear = function jsConsoleClear() {
            textArea.innerHTML = "";
        }
        return self;
    }
    jsConsole = new createJsConsole("#console");
}).call(this);

let currentTask = null;

document.querySelector("#runBtn").addEventListener("click", function () {
    if (currentTask) currentTask();
    else jsConsole.writeLine("Сначала выберите задание.");
});

document.querySelector("#textInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        if (currentTask) currentTask();
        else jsConsole.writeLine("Сначала выберите задание.");
    }
});

function loadTask(num) {
    if (!jsConsole) return;
    jsConsole.clear();
    document.querySelector("#textInput").value = "";

    if (num === 1) {
        document.querySelector("#inputArea").style.display = "none";
        currentTask = task1;
        task1();
    } else if (num === 2) {
        document.querySelector("#inputArea").style.display = "none";
        currentTask = task2;
        task2();
    } else if (num === 3) {
        document.querySelector("#inputArea").style.display = "none";
        currentTask = task3;
        task3();
    } else if (num === 4) {
        document.querySelector("#inputArea").style.display = "none";
        currentTask = task4;
        task4();
    }
}