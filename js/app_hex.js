const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const grbbody = document.querySelector('body');
const btn = document.querySelector('button');
const shwRes = document.querySelector(' .result');


btn.addEventListener('click', function() {

    const getRand = randLoad();

    let hxCode = "#";

    for (let i = 0; i < 6; i++) {

        hxCode += hex[getRand];
    }

    console.log(hxCode);

    // manipulating the DOM
    grbbody.style.background = hxCode;
});

function randLoad() {

    return Math.floor(Math.random() * hex.length);
}