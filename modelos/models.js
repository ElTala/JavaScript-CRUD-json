
const propiedades = [
    { clave_catastral: 1 , descripcion: "Casa grandota", propietarios: [] },
    { clave_catastral: 2 , descripcion: "Casa chiquita", propietarios: [] },
    { clave_catastral: 3 , descripcion: "Casa mediana", propietarios: [] },
    { clave_catastral: 4 , descripcion: "Casa lujosa", propietarios: [] },
    { clave_catastral: 5 , descripcion: "Casa grandota", propietarios: [] },
    { clave_catastral: 6 , descripcion: "Casa lujosa", propietarios: [] },
   ]

   const tomarDatos = function(){
    
    return propiedades;
}

const buscar = function (clave_catastral) {
    let p = propiedades.find(e => e.clave_catastral == clave_catastral);
    return p
}

const borrar = function(clave_catastral) {
    let p = propiedades.find(e => e.clave_catastral == clave_catastral);
    p = propiedades.splice(propiedades,clave_catastral);
    return p;
}



const agregar = function (clave_catastral,descripcion,propietarios) {
    let p = propiedades.push({clave_catastral,descripcion,propietarios})
    
    return p;
}

const editar = function (clave_catastral,descripcion,propietarios) {
    let p = propiedades.find(e => e.clave_catastral == clave_catastral);
    p = propiedades.splice(propiedades,clave_catastral);
    if(p)
    p = propiedades.push({clave_catastral,descripcion,propietarios})
    return p
    
}


exports.tomarDatos = tomarDatos();
exports.buscar = buscar;
exports.borrar = borrar;
exports.agregar = agregar;
exports.editar = editar;

   
  
   
   