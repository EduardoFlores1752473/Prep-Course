// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

/*var opciones ={
  usuario: "",
  nombre: "",
  email: "",
  password: ""
}*/

function Usuario (opciones){

  this.usuario = opciones.usuario;
  this.nombre = opciones.nombre;
  this.email = opciones.email;
  this.password = opciones.password;
};

Usuario.prototype.saludar = function(){
  return 'Hola, mi nombre es ' + this.nombre;
};

return Usuario;

}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:

  Constructor.prototype.saludar = function(){
    return "Hello World!"
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
String.prototype.reverse = function(){
  var stringInver = '';
  for (let i = this.length -1; i >= 0 ; i-- ){ // se agrega lenght para saber que tan largo es la palabra.. Se agrega this para referirnos a la palabra o array THIS
  stringInver = stringInver + this.charAt (i)  //Se agrega por que representa al objeto del string, a la variable que hay que modificar, In addition, we add -1 to know  //what is the final data position for the array              
}                                              //ChartAt (Metodo) devuelve el valor en su indice [i] this para referir 
return stringInver;
}
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre,apellido,edad,domicilio) {
      // Crea el constructor:
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.domicilio = domicilio,
    this.detalle = function(){ //esta NO ES UNA PROTOTYPE FUNCTION directamente en el contructuro deveulve las 
      return{                  //propidades de la clase persona si no no se deveulve nada y se creara una Persona
        Nombre: this.nombre,
        Apellido: this.apellido,
        Edad: this.edad,
        Domicilio: this.domicilio
      }
    } 
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada


  const persona = new Persona (nombre, apellido, edad, dir);

  return persona;
}



  
function agregarMetodo(datos) {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
Persona.prototype.datos= function(){
  //return this.nombre + " "+ this.edad + "años"; another form to solve this problem 
  return `${this.nombre}, ${this.edad} años` // with this alternative is posible to concatenate string it doesn´t need to concatenate with ""
};
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
