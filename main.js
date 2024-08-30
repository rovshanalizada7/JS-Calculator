const inp = document.querySelector("input");

function countNum(change) {
    inp.value += change;
}

function clearAll() {
    inp.value = "";
}

function calculateValue () {
    inp.value = eval(inp.value);
}