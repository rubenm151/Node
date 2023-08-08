function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  if (a === 0 || b === 0) {
    console.log("Uno de los números es 0 y no se puede dividir");
  } else {
    return a / b;
  }
}
exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
