const {cons, first, rest, isEmpty, isList, length} = require('functional-light'); 

/*
Nombre: Carolain Jimenez Bedoya
Fecha de creación: 22/04/2020
Contrato: Número-> lista(número)
Próposito: Realizar la secuencia fibonacci 
Ejemplos: 
secuenciafibonacci(3)->2
secuenciafibonacci(2)->1
secuenciafibonacci(8)->21
secuenciafibonacci(9)->34
secuenciafibonacci(4)->3
*/
function secuenciafibonacci(posicion){
  if(posicion==1){
    return 0;
  }else if(posicion==2){
    return 1;
  }else{
    return secuenciafibonacci(posicion-1) + secuenciafibonacci(posicion-2);
  }

}// cambiale el Nombre

 /*Nombre: Carolain Jimenez Bedoya
Fecha de creación: 22/04/2020
Contrato: Número-> lista(número)
Próposito: convertir la funcion fibonacci(con los nuevos parametros) en una lista, es decir, que sea una lista desde la posición n hasta la posición 0, por eso se coloca como parametro de parada de que vaya hasta 0.

Ejemplos: 
listacompleta(3)-> [1,1,0]
listacompleta(2)-> [1,0]
listacompleta(8)-> [13,8,5,3,2,1,1,0]
listacompleta(9)-> [21,13,8,5,3,2,1,1,0]
listacompleta(4)-> [2,1,1,0]
*/

function listacompleta(posicion){
  if(posicion==0){
    return []
  }else if (posicion==1){
    return ([0])
  }else{
    return cons(secuenciafibonacci(posicion),listacompleta(posicion-1))
  }
}

 /*
 Nombre: Carolain Jimenez Bedoya
Fecha de creación: 22/04/2020
Contrato: Número-> lista(número)
Próposito: Determinar una función inversa
Ejemplos: 
inversa([5,2,5,6,7],[])-> [7,6,5,2,5]
inversa([1],[])-> [1]
inversa([144,89,55,34,21,13,8,5,3,2,1,0],[])->[0,1,2,3,5,8,13,21,34,55,89,144]
inversa([8,7,5,1,2],[])-> [2,1,5,7,8]
inversa([4,8,3],[])-> [3,8,4]
*/

function inversa(lista,contador){
  if (isEmpty(lista)){
return contador
  }else{
    return inversa(rest(lista),cons(first(lista),contador))

  }
}


 /*
 Nombre: Carolain Jimenez Bedoya
Fecha de creación: 22/04/2020
Contrato: Número-> lista(número)
Próposito: Realizar la función inversa de la función fibonacci.
Ejemplos: 
inversafibo(3)->[0,1]
inversafibo(2)->[1]
inversafibo(8)->[0,1,2,3,5,8,13]
inversafibo(9)->[0,1,2,3,5,8,13,21]
inversafibo(4)->[0,1,2]
*/

function inversafibo(posicion){
  return inversa(listacompleta(posicion),[])
}

console.log (inversafibo (0))
console.log (inversafibo (1))
console.log (inversafibo (2))
console.log (inversafibo (3))
console.log (inversafibo (6))
