let botones = document.getElementsByClassName("numeros");
let resultado = document.getElementById("resultado");

let prm = "";
let operacion = "";

for (const key in botones) {
  if (Object.prototype.hasOwnProperty.call(botones, key)) {
    const boton = botones[key];
    boton.addEventListener("click", pintar);
  }
}

function pintar(e) {
  resultado.value += e.target.innerText;
}

let operadores = document.getElementsByClassName("operadores");

for (const key in operadores) {
  if (Object.prototype.hasOwnProperty.call(operadores, key)) {
    const boton = operadores[key];

    if (boton.innerText == "CE") {
      boton.addEventListener("click", borrar);
    }

    if (boton.innerText == "+") {
      boton.addEventListener("click", sumar);
    }

    if (boton.innerText == "-") {
      boton.addEventListener("click", restar);
    }

    if (boton.innerText == "*") {
      boton.addEventListener("click", multiplicar);
    }

    if (boton.innerText == "/") {
      boton.addEventListener("click", dividir);
    }

    if (boton.innerText == "=") {
      boton.addEventListener("click", igual);
    }

    boton.addEventListener("click", pintar2);
  }
}

function pintar2(e) {
  console.log(e.target.innerText);
}

function borrar() {
  resultado.value = "";
  prm = "";
  operacion = "";
}

function sumar(e) {
  prm = resultado.value;
  operacion = "+";
  resultado.value = "";
  e.target.style.backgroundColor = "red";
}

function restar(e) {
  prm = resultado.value;
  operacion = "-";
  resultado.value = "";
  e.target.style.backgroundColor = "red";
}

function multiplicar(e) {
  prm = resultado.value;
  operacion = "*";
  resultado.value = "";
  e.target.style.backgroundColor = "red";
}

function dividir(e) {
  prm = resultado.value;
  operacion = "/";
  resultado.value = "";
  e.target.style.backgroundColor = "red";
}

function igual() {
  let prm2 = resultado.value;

  if (operacion == "+") {
    resultado.value = parseInt(prm) + parseInt(prm2);
  }

  if (operacion == "-") {
    resultado.value = parseInt(prm) - parseInt(prm2);
  }

  if (operacion == "*") {
    resultado.value = parseInt(prm) * parseInt(prm2);
  }

  if (operacion == "/") {
    resultado.value = parseInt(prm) / parseInt(prm2);
  }
}
