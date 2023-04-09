const btnSuma = document.querySelector("#suma");
const btnResta = document.querySelector("#resta");
const btnPor = document.querySelector("#por");
const btnDividir = document.querySelector("#dividir");
let inputUno = document.querySelector("#num1");
let inputDos = document.querySelector("#num2");
let resuladoH2 = document.querySelector("#texto");
let simboloH2 = document.querySelector("#simbolo");

btnSuma.addEventListener("click", () => {
  sumando(inputUno.value, inputDos.value);
  validar(inputUno.value, inputDos.value);
  simboloH2.textContent = btnSuma.value;
  // setTimeout(() => {
  //   sumando(inputUno.value, inputDos.value);
  // }, 3000);
});
btnResta.addEventListener("click", () => {
  restando(inputUno.value, inputDos.value);
  validar(inputUno.value, inputDos.value);
  simboloH2.textContent = btnResta.value;
});
btnPor.addEventListener("click", () => {
  multiplicando(inputUno.value, inputDos.value);
  validar(inputUno.value, inputDos.value);
  simboloH2.textContent = btnPor.value;
});
btnDividir.addEventListener("click", () => {
  dividiendo(inputUno.value, inputDos.value);
  validar(inputUno.value, inputDos.value);
  simboloH2.textContent = btnDividir.value;
});

function sumando(num1, num2) {
  // validar(num1, num2);
  // let mensajeError = validar(num1, num2);
  // if (mensajeError) {
  //   return (resuladoH2.textContent = mensajeError);
  // }
  let result = +num1 + +num2;
  resuladoH2.textContent = `Resultado: ${result}`;
}
function restando(num1, num2) {
  // validar(num1, num2);
  // let mensajeError = validar(num1, num2);
  // if (mensajeError) {
  //   return (resuladoH2.textContent = mensajeError);
  // }
  let result = +num1 - +num2;
  resuladoH2.textContent = `Resultado: ${result}`;
}
function multiplicando(num1, num2) {
  // validar(num1, num2);
  // let mensajeError = validar(num1, num2);
  // if (mensajeError) {
  //   return (resuladoH2.textContent = mensajeError);
  // }
  let result = +num1 * +num2;
  resuladoH2.textContent = `Resultado: ${result}`;
}
function dividiendo(num1, num2) {
  // validar(num1, num2);
  // let mensajeError = validar(num1, num2);
  // if (mensajeError) {
  //   return (resuladoH2.textContent = mensajeError);
  // }
  if (+num2 === 0) {
    return (resuladoH2.textContent = `No se puede dividir entre 0`);
  }
  let result = +num1 / +num2;
  resuladoH2.textContent = `Resultado: ${result.toFixed(2)}`;
}

function validar(num1, num2) {
  if (num1 === "" || num2 === "") {
    // return `Rellena ambas casillas`;
    resuladoH2.style.color = "#CF5956";
    return (resuladoH2.textContent = "Rellene ambas casillas");
  } else {
    resuladoH2.style.color = "#fff";
  }
}
