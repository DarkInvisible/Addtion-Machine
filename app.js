const ip1 = document.getElementById('ip1');
const ip2 = document.getElementById('ip2');
const calc = document.getElementById('calc');
const rand = document.getElementById('rand');
const clr = document.getElementById('clr');
const result = document.getElementById('results');

calc.addEventListener('click', function () {
    const one = parseFloat(ip1.value);
    const two = parseFloat(ip2.value);

    result.innerHTML = one + two;
})

rand.addEventListener('click', function () {
    ip1.value = random();
    ip2.value = random();

})

clr.addEventListener('click', function () {
    ip1.value = '';
    ip2.value = '';
    result.innerHTML = '';

})



function random() {
    return Math.floor(Math.random() * 1000);
}