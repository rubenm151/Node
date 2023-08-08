//Requerimos la libreria http, viene integrada en Node,
// no hace falta poner la ruta cuando son librerias de Node.
// Esta libreria nos proporciona funcionalidad para comunicacion por protocolo hhtp.

const http = require("http");
//Declarando una constante para indicarle al servidor en que dominio se va a levantar.
// En un futuro (producción) aquí se pondrá la ip del hosting o el dominio.
const hostname = "127.0.0.1"; //localhost;

//otros puertos de desarrollo 4000, 4001, 8080, 3001
const port = 3000;
//Accedemos al método createServer de la libreria http al que le pasamos un callback con la configuración
// de las respuestas que dará nuestro servidor a las peticiones entrantes
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola Mundo");
});
//Levantamos el servidor que se quedará escuchando por el puerto 300 del localhost
server.listen(port, hostname, () => {
  console.log(
    "El servidor está escuchando por el puerto http:// " + hostname + "," + port
  );
});
