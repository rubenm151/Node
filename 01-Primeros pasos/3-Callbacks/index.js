//CALLBACK: Es una función a la que se le pasa como argumento a
// otra función y que se ejecuta dentro de dicha función
//  después de que se realizar algún proceso

function hacerMayus(text, callback) {
  const textoMayusculas = text.toUpperCase(); // Convierte el texto a mayúsculas
  callback(textoMayusculas); // Llama al callback con el texto modificado como argumento
}

function addText(text) {
  console.log(text); // Imprime el texto recibido
}

hacerMayus("buenos dias", addText); // Llamada a la función hacerMayus con callback

function saludaryDespedir(nombre, callback) {
  nombre = "Señor Don " + nombre.toUpperCase();
  callback(nombre);
  console.log("hasta luego", nombre);
}

function saludar(nombre) {
  console.log("Hola " + nombre);
}

saludaryDespedir("Pepe", saludar);
