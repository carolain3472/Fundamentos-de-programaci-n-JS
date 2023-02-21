const {cons, first, rest, isEmpty, isList, length, append} = require('functional-light');

/*
Autora: Carolain Jimenez Bedoya
Contrato: Función,acum, lista-> número
Próposito: Realizar la función reducer de manera general, para que esta acumule cada resultado y efectuar una operación indicada, que en este caso es de aplanar una lista. 

*/
function fold(reducer,valIn,lista){
  if (isEmpty(lista)){
    return valIn
  }else{
    return fold(reducer,reducer(valIn,first(lista)),rest(lista))
  }
}

/*
Autora: Carolain Jimenez Bedoya
Fecha de creación: 23/06/2020
Contrato: Lista(vacia), lista(con listas)-> lista (elementos)
Próposito: Realizar una función  que logre aplanar una lista de forma efectiva en un caso sencillo o individual. 
Ejemplos:

reduceraplanar([],[1,2,[3],[4]])-> [1,2,3,4]

reduceraplanar([],[1,2,[2],[5,2,8],[5,7,89],6])-> [1, 2,2,5,2,8,5,7,89,6]

reduceraplanar([1,2],[0,[1,2,8],[5],[[[4]]]])-> [1,2, 0,1,2,8,5,4]

reduceraplanar([],[54,1,[],[],[1],3,[[8]]])-> [54,1, 1,3,8]

*/
function reduceraplanar(acum,contenido){
  if (isEmpty(contenido)){
    return acum
  } else if (!isList(contenido)){
    return append(acum, [contenido])
  }else{
    return append(acum,aplanar(contenido))
  }
}

/*
Autora: Carolain Jimenez Bedoya
Fecha de creación: 23/06/2020
Contrato: Lista(con varias listas)-> lista (elementos)
Próposito: Realizar una función que aplane una lista usando una función de orden superior como lo es fold. 
Ejemplos:

aplanar([1,[5],[3],[1,2,3],[[3]]])-> [1,5,3,1,2,3,3]

aplanar(["hola"],[5,2],2,[1])-> ['hola',5,2,2,1]

aplanar([0,1,2,3,[[[[4]]]],5,[6,7]])-> [0,1,2,3,4,5, 6,7]

aplanar([89,2,[[0]],2,6,[2,1],[6]])-> [89,2,0,2,6,2, 1,6]
*/

function aplanar(lista){
  return fold(reduceraplanar, [], lista)
}

console.log(aplanar([[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8, []]))
console.log(aplanar([[1, 2, 3], [4, 5, 6], 7, [8, 9]]))
console.log(aplanar([[[1, 2, 3], [4, 5]], 6]))
console.log(aplanar([[],[[1, 2, 3], [4, 5]], 6]))
console.log(aplanar([0, 10, [20, 30], 40, 50, [60, 70, 80], [90, 100, 110, 120]]))
console.log(aplanar([1, 2, [3, [4, [5]]], 6]))