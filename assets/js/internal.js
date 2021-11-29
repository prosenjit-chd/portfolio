let btnClear = document.getElementById('submit-reset');
let inputs = document.querySelectorAll('input');
btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
});