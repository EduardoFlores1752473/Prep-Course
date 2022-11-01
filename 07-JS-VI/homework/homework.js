// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //"MARIO"
  // 01234 -------->> charAt(1)<- posicion (A) seria letra A la posicion 1
 
  return nombre.charAt(0).toUpperCase() + nombre.slice(1)// to UpperCase Sirve para convertir en Mayusculas las letras 
  //                                      (Metodo donde se puede aplicar al parametro nombre y va a hacer lo mismo y pasa 2 parametros donde inicia y donde corta )
 //                                         En este caso solo se le pone un numero para que pase por todo el string
 //                                         Para hacer lo contrario usamos el metodo toLowercase
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

cb()
  
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  return cb (n1,n2);

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  /*var valorInicial = 0;
 var sumArr= numeros.reduce((acc, el)=> acc + el,0)
    cb(sumArr)*/

    var sumaReduce = numeros.reduce(function(acumulador, elemento){
       return acumulador + elemento;
      
    },0);
    cb(sumaReduce)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  array.forEach((elemento)=>{ // this is a method that the name is arrow (=>), is anohter form tu use the traditional functions
    cb(elemento);
  });
  

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  // Array con for
  /*
   var newArray = [];
  for ( var i = 0; 1 < array.length; i++){
    newArray.push(cb(array[i]));
  }
  return newArray; 
    */

// metodo
   var newArray = array.map((elemento)=>{
    return cb(elemento); // aquí se pasa al CB(Elemento) para que se ejecute la funcion de CB por eso siempre se debe de retornar en la funcion, CB la accion de la funcion del callback
  })
  return newArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  // con For of
 /* var newFilter = []
  for( var i of array){ // Itera con cada elemento y pushea y pasa al segundo segun las restricciones
    if(i [0] == 'a') newFilter.push(i)// (of) recorre elemento por elemento del string 
  }
  return newFilter;*/

  // con metodo  FILTER es una plabra reservada es un metodo donde le podemos pasar un elemento adentro () que haga algo, se le pasa la funcion y que la funcion dentro le retorne elements si en su posicion 0 es igual a "a"
   /* return array.filter(function(elements){
      return elements[0] == "a;"
    })*/

    var newFilter = []
    for ( var i = 0; i < array.length; i++){
      if( array[i] [0] == "a"){
        newFilter.push(array[i]);
      }
    }
    return newFilter;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
