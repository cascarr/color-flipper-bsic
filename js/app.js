const colorArr = ["red", "#f15025", "green", "rgba(133, 122, 200)"];


const resDply = document.querySelector(' .result');
const btn = document.querySelector('button');
const selBdy = document.querySelector('body')

btn.addEventListener('click', function() {

    const ranNumber = getRandomNumber();

    selBdy.style.background = colorArr[ranNumber];

    resDply.textContent = colorArr[ranNumber];
});

function getRandomNumber() {

    return Math.floor(Math.random() * colorArr.length);
}