const numberUtils = require("./numberUtils");
const textUtils = require("./textUtils");

let { sumar, restar, dividir, multiplicar } = numberUtils;
let { nombreEnMayus, nombreEnMinus } = textUtils;

// const sumar = numberUtils.sumar;
// const restar = numberUtils.restar;
// const multiplicar = numberUtils.multiplicar;
// const dividir = numberUtils.dividir;

// destructuring
// Si la propiedad que queremos extraer se llama igual que la variable que va a recibir dicho valo podemos destructurar

console.log(sumar(5, 10));
console.log(restar(5, 10));
console.log(multiplicar(5, 10));
console.log(dividir(20, 10));

console.log(nombreEnMayus("pepe"));
console.log(nombreEnMinus("JOSE"));
