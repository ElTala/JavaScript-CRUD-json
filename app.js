
const express= require("express")
const fs = require("fs");
const https = require("https");
const bodyParser = require('body-parser');
const app = express();
const prop = require('./controlador')
app.use(bodyParser.json());

app.get("/propiedades", prop.tomarDatos);
app.get("/propiedades/:clave_catastral",prop.buscar)
app.get("/borrar/:clave_catastral",prop.borrar)
app.get("/agregar/:clave_catastral/:descripcion/:propietarios",prop.agregar)
app.get("/editar/:clave_catastral/:descripcion/:propietarios",prop.editar)


app.get("/propietarios", prop.tomarDatosPropietarios);
app.get("/propietarios/:nombre",prop.buscarpropietario)
app.get("/propietarios/borrar/:nombre",prop.borrarpropietario)
app.get("/propietarios/agregar/:nombre/:rfc",prop.agregarpropietario)
app.get("/propietarios/editar/:nombre/:rfc",prop.editarpropietario)

process.env.port = 443;
const llavePrivada = fs.readFileSync("private.key");
const certificado = fs.readFileSync("certificate.crt");
const credenciales= {
key: llavePrivada,
cert: certificado,
passphrase: "lolo1212"
};
const httpsServer = https.createServer(credenciales,app);




httpsServer.listen(process.env.port,()=>{
    var http= require("http");
console.log("Server running on port",process.env.port);
}).on('error',err => {
    console.log('Error al iniciar el servidor:',err);
})

