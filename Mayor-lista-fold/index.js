const {cons, first, rest, isEmpty, isList, length} = require('functional-light');


/*
Autora: Carolain Jimenez Bedoya
Contrato: Función, Número, lista(números)-> número
Próposito: Realizar la función reducer de manera general, para que esta acumule cada resultado y efectuar una operación indicada, que en este caso es determinr cuál valor de la lista es el mayor. 

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
Contrato: Número,Número-> Número 
Próposito: Determinar cuál es el mayor entre dos números.

Ejemplos: 
mayormenor (5,7)-> 7
mayormenor (8,4)-> 8
mayormenor (14,22)-> 22
mayormenor (35,80)-> 80



*/

function mayormenor(num1, num2){
  if (num1>num2){
    return num1
  }else {
    return num2
  }
}


/*
Autora: Carolain Jimenez Bedoya
Fecha de creación: 17/06/2020
Contrato: Lista(números)-> Número 
Próposito: Determinar cuál es el valor mayor en una determinada lista.
Ejemplos: 
mayorLista([1,2,8,9,6,52])-> 52
mayorLista([8,7,2,9])-> 9
mayorLista([3,2,1])-> 3 
*/

function mayorLista (lista) {
  return  fold(mayormenor,first(lista), lista);
}

console.log(mayorLista([-2, 1, 4, 0, 10, 2, 4])
console.log(mayorLista([-2, 1, 4, 10, 2, 4, 11, 7])
console.log(mayorLista([-2, 1])
console.log(mayorLista([1])
console.log(mayorLista([2, 2, 2])
console.log(mayorLista([-2, 1, 4, 1, 100, 1])


/////////////////////////////////////////////////
const {cons, first, rest, isEmpty, isList, length} = require('functional-light');


/*
Autora: Carolain Jimenez Bedoya
Contrato: Función, Número, lista(números)-> número
Próposito: Realizar la función reducer de manera general, para que esta acumule cada resultado y efectuar una operación indicada, que en este caso es determinr cuál valor de la lista es el mayor. 

*/

function fold(reducer, valIn, lista){
  if(isEmpty(lista)){
    return valIn
  }else{
    return fold(reducer, reducer(valIn, first(lista)), rest(lista))
  }
}

}
function concatenar(palabra1, palabra2) {
  return "palabra1"+"" "palabra2"

}