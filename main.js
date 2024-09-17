const button = document.getElementById('numero');
const contadorButton = document.querySelector('.contadorButton');

let count = 0;

button.addEventListener('click', function(){
    count++;
    contadorButton.textContent = count;
});
