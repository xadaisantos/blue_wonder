const minusten = document.getElementById("minus-ten");
const minusone = document.getElementById("minus-one");
const plusone = document.getElementById("plus-one");
const plusten = document.getElementById("plus-ten");
const zero = document.getElementById("zero");

const display = document.getElementById("number");

function counter(element, number){
    element.addEventListener("click", (e) => {
        e.preventDefault();
        display.textContent = parseInt(display.textContent) + number;
    })
}

counter(minusten, -10)
counter(minusone, -1)
counter(plusone, +1)
counter(plusten, +10)

zero.addEventListener("click", (e) => {
    e.preventDefault();
    display.textContent = 0;
})