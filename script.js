
const container = document.querySelector('.container');
const btnUp = document.getElementById('btn-sing-up');
const btnIn = document.getElementById('btn-sing-in');

btnIn.addEventListener('click', () => {
    container.classList.remove('toggle');
})

btnUp.addEventListener('click', () => {
    container.classList.add('toggle');
})