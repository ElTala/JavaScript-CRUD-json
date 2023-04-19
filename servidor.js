//const cors = require("cors");
const express= require("express")
var bodyParser = require("body-parser");
const app = express();

app.get("/datos",(req,res)=> {
    let URL_tomado=req.url;
    let headers=JSON.stringify(req.headers);
    let codigohtml=
    `<html>
        <head>
        </head>
        <body>
        <h1>Request Headers:</h1>
       
        <form id="formulario" method='POST'>
        <input name="campo1"  type="text" id="nombre" value="Nombre"/>
        <input name="campo2" type="text" id="apellido" value="Apellido"/>
        <button class="boton" type="submit" >Enviar</button>
        
        ${headers}

        <h1>Metodo: GET</h1>

        <h1>URL: ${URL_tomado}</h1>
        </form>
        </body>
        </html>`;
        
    res.send(codigohtml);
    
});

app.post("/datos",(req,res)=> {
    let URL_tomado=req.url;
    let headers=JSON.stringify(req.headers);
    let codigohtml=
    `<html>
        <head>
        </head>
        <body>
        <h1>Request Headers:</h1>
       
        <form id="formulario">
        <input name="campo1"  type="text" id="nombre" value="Nombre"/>
        <input name="campo2" type="text" id="apellido" value="Apellido"/>
        <button class="boton" type="submit" >Enviar</button>
        
        ${headers}

        <h1>Metodo: POST</h1>

        <h1>URL: </h1>

        <h1>Datos enviados: ${URL_tomado} </h1>
        </form>
        </body>
        </html>`;
        res.send(codigohtml);
   
});



app.listen(4000,()=>{
    var http= require("http");
console.log("Server running on port",4000);
}).on('error',err => {
    console.log('Error al iniciar el servidor:',err);
})