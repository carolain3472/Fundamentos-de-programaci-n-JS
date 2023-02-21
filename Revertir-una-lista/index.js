/*
Nombre: Carolain Jimenez Bedoya
Fecha de creación: 22/04/2020
Contrato: lista(numeros)->lista(numeros)
próposito: usar  la función para concatenar,es decir, juntar dos listas.
Ejemplos: 
concatenar ([3,4,5,7],[2])->[3,4,5,7,2]
concatenar ([5,4,2,0],[])->[5,4,2,0]
concatenar ([0,4,5,28,7],["JOIN",9,1,3])->[ 0,4,5,28,7,'JOIN',
9,1,3]
concatenar ([1,7,9,5,2],[4])->[1,7,9,5,2,4]
concatenar ([],[8,7])->[8,7]
*/
const {cons, first, rest, isEmpty, isList, length} = require('functional-light');

function concatenar (listauno,listados){
  if (isEmpty(listauno) && isEmpty (listados)){
    return []
  } if (isEmpty(listauno)){
   return listados
  }if (isEmpty(listados)){
    return listauno
  }else{
    return cons(first(listauno),concatenar(rest(listauno),listados))
  }
  }

/*
Nombre: Carolain Jimenez Bedoya
Fecha de creación: 22/04/2020
Contrato: lista(numeros)->lista(numeros)
próposito: Invertir una lista teniendo en cuenta que el primer termino va de último. 
Ejemplos: 

reversa([4,2,0,1])->[1,0,2,4]
reversa([88,5,2,6,3])->[3,6,2,5,88]
reversa([5])->[5]
reversa([0,2,5,3])->[3,5,2,0]
reversa([1,2,3,4,5,6])->[6,5,4,3,2,1]
reversa([9,2,5,8])->[8,5,2,9]
*/

function reversa (lista){
  if (isEmpty(lista)){
    return [];
  }if (length(lista)==1){
    return cons(first(lista),[])
  }else{
    return concatenar(reversa(rest(lista)),cons(first(lista),[]))
}
}

console.log(reversa([]))
console.log(reversa([1]))
console.log(reversa([4,1,2,7,4,1]))
console.log(reversa([1,2,1]))