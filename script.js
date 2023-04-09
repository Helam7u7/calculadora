const btnSuma = document.querySelector("#suma");
const btnResta = document.querySelector("#resta");
const btnPor = document.querySelector("#por");
const btnDividir = document.querySelector("#dividir");
let inputUno = document.querySelector("#num1");
let inputDos = document.querySelector("#num2");

btnSuma.addEventListener("click", () => {
  sumando(inputUno.value, inputDos.value);
});
btnResta.addEventListener("click", () => {
  restando(inputUno.value, inputDos.value);
});
btnPor.addEventListener("click", () => {
  multiplicando(inputUno.value, inputDos.value);
});
btnDividir.addEventListener("click", () => {
  dividiendo(inputUno.value, inputDos.value);
});

function sumando(num1, num2) {
  let resuladoH2 = document.querySelector("#texto");
  let result = +num1 + +num2;
  resuladoH2.textContent = `Resultado: ${result}`;
}
function restando(num1, num2) {
  let resuladoH2 = document.querySelector("#texto");
  let result = +num1 - +num2;
  resuladoH2.textContent = `Resultado: ${result}`;
}
function multiplicando(num1, num2) {
  let resuladoH2 = document.querySelector("#texto");
  let result = +num1 * +num2;
  resuladoH2.textContent = `Resultado: ${result}`;
}
function dividiendo(num1, num2) {
  let resuladoH2 = document.querySelector("#texto");
  console.log(num2);
  if (+num2 === 0) {
    return (resuladoH2.textContent = `No se puede dividir entre 0`);
  }
  let result = +num1 / +num2;
  resuladoH2.textContent = `Resultado: ${result.toFixed(2)}`;
}
