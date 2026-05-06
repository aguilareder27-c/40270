let botones = document.getElementsByClassName("numeros");
let resultado = document.getElementById("resultado");
for (const key in botones) {
  if (Object.prototype.hasOwnProperty.call(botones, key)) {
    const boton = botones[key];
    console.log(boton);
    boton.addEventListener("click", pintar);
  }
}
function pintar(e) {
  //console.log(e.target.ClassName);
  resultado.value += e.target.innerText;
}

let operadores = document.getElementsByClassName("operadores");
for (const key in operadores) {
  if (Object.prototype.hasOwnProperty.call(operadores, key)) {
    const boton = operadores[key];
    console.log(boton);
    if (boton.target.innerText == "CE") {
      boton.addEventListener("click", borrar);
    }
    boton.addEventListener("click", pintar2);
  }
}

function pintar2(e) {
  console.log(e.target.innerText);
}

function borrar() {
  resultado.value = "";
}
function sumar(e) {
  prm = resultado.value;
  operacion = e.target.innerText;
  resultado.value = "";
  e.target.style.backgraundColor = "red";
}
function igual() {
  let prm2 = resultado.value;
  if (operacion == "+") {
    resultado.value = parseInt(prm) + parseInt(prm2);
  }
}
