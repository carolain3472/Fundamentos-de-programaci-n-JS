/*
function f(x){
  return function(y){
return x+y
  }
}

f(8)(2)

function esmayor(x){
  return x>3
}
*/
/*

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

function double(n){
  return n*2;
}

numeros.map(double)

//console.log (numeros.map(n=>"numer"+n.toString()))
//console.log (numeros.map(n=>n*2))

//////

/*
const {cons, first, rest, isEmpty, isList, length} = require('functional-light');

function elementosDespuesDe(lista, posicion){
  if (isEmpty(lista)){
    return []
  }else if(posicion==0){
    return lista
  }else{
    return elementosDespuesDe(rest(lista), posicion-1)
  }
}


function elementosAntesDe(lista, posicion){
  if (isEmpty(lista)){
    return []
  }else if(posicion==0){
    return []
  }else{
    return cons(first(lista), elementosAntesDe(rest(lista), posicion-1))
  }
}

/**
 * encontrarEnListaOrdenadaRG: listaOrdenada, número -> booleano
 

function encontrarEnListaOrdenadaRG(lista, elem){
  if(elem==first(lista)){
    return true
  }else if(isEmpty(lista) || first(lista) > elem || length(lista)==1){
    return false
  }else{
    const mitad = Math.floor(length(lista)/2) 
    const subl = elementosDespuesDe(lista,mitad); 
    if (elem>=first(subl)){
    return encontrarEnListaOrdenadaRG(subl, elem)
    }else{
      return encontrarEnListaOrdenadaRG(elementosAntesDe(lista,mitad), elem)
    }
  }
}

console.log(encontrarEnListaOrdenadaRG([1,2,3,4,5], 2))
console.log(encontrarEnListaOrdenadaRG([1,2,3,4,6], 6))
console.log(encontrarEnListaOrdenadaRG([1,2,3,4,7], 6))


console.log(encontrarEnListaOrdenadaRG([1,2,3,4,5,6,7,9],3))
*/
/*
const lista= [-2, 1, 4, 0, 10, 2, 4]

function promedio (numeros){
  if (isEmpty (numeros)){
    return 0
  }else{
    return ((first(numeros)+suma(rest(numeros)))/ length(lista)
}
}


lista.filter(promedio)
/*
const {cons, first, rest, isEmpty, isList, length} = require('functional-light');

const lista= [-2, 1, 4, 0, 10, 2, 4]

function longitud(x){
  if (isEmpty(x)){
    return 0
  }else{
 return 1 + longitud(rest(x))
  }
}

function suma (numeros){
  if (isEmpty (numeros)){
    return 0
  }else{
    return first(numeros)+suma(rest(numeros))
}
}

function promedio(x){
  if (isEmpty(x)){
    return null
  }else{
    return suma(x)/longitud(x)
  }
}

function mayoresMedia (x){ 
return lista.filter(x=> x> promedio(lista))
}

console.log(mayoresMedia([-2, 1, 4, 0, 10, 2, 4]))
*/


function elevar(numero,exp){
  return Math.pow (numero,exp)
}

function elevaListaN (lista,exp){
  return lista.map(x=>elevar(x,exp))
}
console.log(elevar (2,3))

console.log(elevaListaN([-2, 1, 4, 0, 10, 2, 4], 3))


/*
function fold (reducer, valIn, lista){
  if(isEmpty(lista)){
    return valIn
  }else{
    return fold(reducer, reducer(valIn, first(lista)), rest(lista))
  }
}
function sumaLista(lista) {
  return fold((acum,item)=>acum+item,0, lista);
}

console.log(sumaLista([2,5,8,4,7,5]))
*/





///////////////////////////////////////////////

const {cons, first, rest, isEmpty, isList, length, append} = require('functional-light');

/*
Autora: Carolain Jimenez Bedoya
Próposito: Realizar la función reducer de manera general, para que esta acumule cada resultado y efectuar una operación indicada, que en este caso es la multiplicaión. 

*/
    
function fold(reducer, valIn, lista){
  if(isEmpty(lista)){
    return valIn
  }else{
    return fold(reducer, reducer(valIn, first(lista)), rest(lista))
  }
}


/*
Autora: Carolain Jimenez Bedoya
Fecha de creación: 17/06/2020
Contrato: Lista(numeros)-> número
Próposito: Crer una función que multiplique todos los valores de una lista.
Ejemplos: 
multiplicacionLista([1,2,6,5])->60
multiplicacionLista([3,2,7,8,-3])-> -1008
multiplicacionLista([-1,2,4])-> -8
multiplicacionLista([5,8,7,9])-> 2520
*/ 


function multiplicacionLista(lista){
  return fold((acum,item)=> acum*item, 1, lista)
}


/*
Autora: Carolain Jimenez Bedoya
Fecha de creación: 17/06/2020
Contrato: Lista(numeros)-> número
Próposito: Crer una función cuyo objetivo principal sea quitar el negativo del cero para poder realizarse en la plataforma.

Ejemplos: 

multiplicacionListaAx([-2,6,5,0])->0
multiplicacionListaAx([2,3,5,0])->0
multiplicacionListaAx([2,4,5,6])->240

*/ 
function multiplicacionListaAx(lista){
  if(multiplicacionLista(lista)== -0){
  return 0
}else{
  return multiplicacionLista(lista)
}
}

console.log(multiplicacionListaAx([-2, 1, 4, 0, 10, 2, 4]))
console.log(multiplicacionListaAx([-2, 1, 4, 10, 2, 4]))
console.log(multiplicacionListaAx([-2, 1]))
console.log(multiplicacionListaAx([1]))
console.log(multiplicacionListaAx([2, 2, 2]))
console.log(multiplicacionListaAx([-2, 1, 4, 1, 100, 1]))