const propietarios = [
    { nombre: "Jose Andres" , rfc: "JA213" }
    ,{ nombre: "Jose Angel" , rfc: "JO391" }
    ,{ nombre: "Jose Mario" , rfc: "JM3912" }
    ,{ nombre: "Imelda mendoza" , rfc: "IM1203" }
    ,{ nombre: "Alvaro Mendoza" , rfc: "AM12993" }
    ,{ nombre: "Gilberto Gonzalez" , rfc: "GG19293" }
    ,{ nombre: "Edgar Beltran" , rfc: "EB123" }
    ,{ nombre: "Maria Gonzalez" , rfc: "MG3294" }
    ,{ nombre: "Jazmin Elenes" , rfc: "JE694" }
    ,{ nombre: "Magui Gonzalez" , rfc: "MG1233" }
    ,{ nombre: "Elena Danae" , rfc: "ED1203" }
    ,{ nombre: "Dahomy Beltran" , rfc: "DB0003" }
   ]

   const tomarDatos = function(){
    
    return propietarios;
}

const buscar = function (nombre) {
    let p = propietarios.find(e => e.nombre == nombre);
    return p
}

const borrar = function(rfc) {
    
    let p = propietarios.splice(propietarios,rfc);
    return p;
}



const agregar = function (nombre,rfc,) {
    let p = propietarios.push({nombre,rfc,})
    
    return p;
}

const editar = function (nombre,rfc,) {
    let p = propietarios.find(e => e.nombre == nombre);
    p = propietarios.splice(propietarios,nombre);
    if(p)
    p = propietarios.push({nombre,rfc,})
    return p
    
}


exports.tomarDatos = tomarDatos();
exports.buscar = buscar;
exports.borrar = borrar;
exports.agregar = agregar;
exports.editar = editar;