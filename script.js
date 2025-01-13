let isCalculated = false;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (isCalculated && !isNaN(value)) {
        display.value = value;
        isCalculated = false;
    } else {
        display.value += value;
    }
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    if (expression.match(/[0-9]+[+\-*/][0-9]+/)) {
        display.value = 'I love you';
    } else {
        try {
            display.value = eval(expression);
        } catch {
            display.value = 'Error';
        }
    }
    isCalculated = true;

    setTimeout(() => {
        const popup = document.getElementById('lovePopup');
        popup.style.display = 'block';
    }, 2000);
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    isCalculated = false;
}

document.getElementById('playVideoButton').addEventListener('click', function() {
    const lovePopup = document.getElementById('lovePopup');
    const nihaoPopup = document.getElementById('nihaoPopup');
    const nihaoVideo = document.getElementById('nihaoVideo');

    lovePopup.style.display = 'none';
    nihaoPopup.style.display = 'block';
    nihaoVideo.style.display = 'block';
    nihaoVideo.play();
});