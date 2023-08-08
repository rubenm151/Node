let nombres = ["Pepe", "Jose", "María"];
exports.nombres = nombres;
let apellidos = ["García", "Sánchez", "Feijoo"];
exports.apellidos = apellidos;

//objetos globales de node
// module;
// exports;
module.exports = {
  apellidos: apellidos,
  nombres: nombres,
};
console.log("esto es module", module);
