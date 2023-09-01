let startElement = document.getElementsByClassName('enteredNumber')[0];
let finish = document.getElementsByClassName('finish')[0];
let measurementLeft = document.getElementById('list');
let measurementRight = document.getElementById('list_two');
let total = startElement.value
function calculate () {
    let select1 = measurementLeft.value;
    let select2 = measurementRight.value;
    if (select2 === select1) {
        total = +startElement.value;
        formulaRecords()
    } else if (select2 === '1' && select1 === '2') {
        total = +startElement.value * 1000;
        formulaRecords();
    } else if (select2 === '1' && select1 === '3') {
        total = +startElement.value * 100000;
        formulaRecords();
    } else if (select2 === '1' && select1 === '4') {
        total = +startElement.value * 1000000;
        formulaRecords();
    } else if (select2 === '2' && select1 === '1') {
        total = +startElement.value / 1000;
        formulaRecords();
    } else if (select2 === '2' && select1 === '3') {
        total = +startElement.value / 100;
        formulaRecords();
    } else if (select2 === '2' && select1 === '4') {
        total = +startElement.value * 1000;
        formulaRecords();
    } else if (select2 === '3' && select1 === '1') {
        total = +startElement.value / 100000;
        formulaRecords();
    } else if (select2 === '3' && select1 === '2') {
        total = +startElement.value / 100;
        formulaRecords();
    } else if (select2 === '3' && select1 === '4') {
        total = +startElement.value * 10;
        formulaRecords();
    } else if (select2 === '4' && select1 === '1') {
        total = +startElement.value / 1e+6;
        formulaRecords();
    } else if (select2 === '4' && select1 === '2') {
        total = +startElement.value / 1000;
        formulaRecords();
    } else if (select2 === '4' && select1 === '3') {
        total = +startElement.value / 10;
        formulaRecords();
    }
}
measurementLeft.addEventListener('input', calculate);
measurementRight.addEventListener('input', calculate);
startElement.addEventListener('input', calculate);
function formulaRecords() {
    finish.value = total;
}

