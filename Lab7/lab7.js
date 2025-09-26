function selectNestedDivsQuerySelector() {
    const nestedDivs = document.querySelectorAll('div > div');
    nestedDivs.forEach(div => div.style.border = '2px solid yellow');
}

function selectNestedDivsGetElements() {
    const allDivs = document.getElementsByTagName('div');
    const nestedDivs = [];

    for (let div of allDivs) {
        if (div.parentElement && div.parentElement.tagName.toLowerCase() === 'div') {
            nestedDivs.push(div);
        }
    }
    nestedDivs.forEach(div => div.style.border = '2px solid green');
}


function logInputValue() {
    const input = document.getElementById('textInput');
    console.log(input.value);
}

function changeBodyColor() {
    const colorInput = document.getElementById('colorPicker');
    document.body.style.backgroundColor = colorInput.value;
}