const propiedades = require("./modelos/models");
const propietarios = require("./modelos/propietarios")

const tomarDatos =async function (req,res) {
   let p = propiedades.tomarDatos
   await res.json(p);
}

const buscar = async function(req,res) {
   await res.json(propiedades.buscar(req.params.clave_catastral))
}

const borrar = async function(req,res){
   await res.json(propiedades.borrar(req.params.clave_catastral))
}

const agregar = async function(req,res){
   await res.json(propiedades.agregar(req.params.clave_catastral,req.params.descripcion,req.params.propietarios))
   
}

const editar = async function(req,res){
   await res.json(propiedades.editar(req.params.clave_catastral,req.params.descripcion,req.params.propietarios))
}


const tomarDatosPropietarios =async function (req,res) {
   let p = propietarios.tomarDatos
   await res.json(p);
}

const buscarpropietario = async function(req,res) {
   await res.json(propietarios.buscar(req.params.clave_catastral))
}

const borrarpropietario = async function(req,res){
   await res.json(propietarios.borrar(req.params.clave_catastral))
}

const agregarpropietario = async function(req,res){
   await res.json(propietarios.agregar(req.params.nombre,req.params.rfc))
   
}

const editarpropietario = async function(req,res){
   await res.json(propietarios.editar(req.params.nombre,req.params.rfc))
}

exports.tomarDatos = tomarDatos;
exports.buscar = buscar;
exports.borrar = borrar;
exports.agregar = agregar;
exports.editar = editar;


exports.tomarDatosPropietarios = tomarDatosPropietarios
exports.buscarpropietario = buscarpropietario;
exports.borrarpropietario = borrarpropietario;
exports.agregarpropietario = agregarpropietario;
exports.editarpropietario = editarpropietario;