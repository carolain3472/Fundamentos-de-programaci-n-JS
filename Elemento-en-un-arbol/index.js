/*
//Creación de los dos árboles

const arbol=
{
  value: 8, 
  left:{
    value: 5,
    left: {
      value: 3,
      right:{
        value: 6,
      }
    }
  },
  right: {
    value: 10,
    right:{
      value: 12,
    }
  }
}



const arbol2=
{
  value: 5, 
  left:{
    value: 2,
    left: {
      value: 1,
      right:{
        value: 3,
      }
    }
  },
  right: {
    value: 7,
    left:{
      value: 6,
    }
  }
}

/*
Autora: Carolain Jimenez Bedoya
Contrato: Arbol, número-> Booleano
Próposito: Determinar si un elemento hace parte de un árbol ordenado. 

Ejemplos: 
verificar(arbol,9)-> false
verificar(arbol,6)-> true
verificar(arbol,5)-> true
verificar(arbol.left,3)-> true

verificar(arbol2,7)-> true
verificar(arbol2,11)-> false
*/


/*

function verificar (arbolito,numero){
  if (!arbolito){
    return false
  } if (arbolito.value == numero){
    return true
  }else if (arbolito.value > numero){
    return verificar(arbolito.left,numero) 
  }else if (arbolito.value< numero){
    return verificar(arbolito.right,numero)
  }
}


console.log(verificar(arbol,12))
console.log(verificar(arbol,8))
console.log(verificar(arbol,0))
console.log(verificar(arbol2,2))
console.log(verificar(arbol2,1))
console.log(verificar(arbol2,4))

*/

const {cons, first, rest, isEmpty, isList, length} = require('functional-light');

const arbol=
{
  value: 8, 
  left:{
    value: 5,
    left: {
      value: 3,
      right:{
        value: 6,
      }
    }
  },
  right: {
    value: 10,
    right:{
      value: 12,
    }
  }
}



const arbol2=
{
  value: 5, 
  left:{
    value: 2,
    left: {
      value: 1,
      right:{
        value: 3,
      }
    }
  },
  right: {
    value: 7,
    left:{
      value: 6,
    }
  }
}


function concatenar(lista1, lista2){
  if ( isEmpty (lista1) && isEmpty (lista2)){
    return ([]);
  }else if ( isEmpty(lista1)){
    return ( lista2 );
  }else if (isEmpty (lista2)){
    return ( lista1 );
  }else{
    return cons(first(lista1), concatenar(rest(lista1),lista2));
  }
}

function lista(trekis,numero){
  if (!trekis){
    return [];
  }else if (trekis.value==numero){
    return cons(trekis.value,[]) 
    } else if (trekis.value>numero){
      return concatenar([trekis.value],lista(trekis.left,numero) )
    }else if (trekis.value<numero){
    return concatenar([ trekis.value], lista(trekis.right,numero))
  }
}
console.log (lista(arbol,12))
console.log (lista(arbol,8))
console.log (lista(arbol,0))

console.log (lista(arbol2,2))
console.log (lista(arbol2,1))
console.log (lista(arbol2,4))


//OTRA FORMAAAAAAAAA MÁS PRACTICA Y CON MENOS FUNCIONES

const {cons, first, rest, isEmpty, isList, length} = require('functional-light');


function verificar (arbolito,numero){
  if (!arbolito){
    return false
  } if (arbolito.value == numero){
    return true
  }else if (arbolito.value > numero){
    return verificar(arbolito.left,numero) 
  }else if (arbolito.value< numero){
    return verificar(arbolito.right,numero)
  }
}

function lista(trekis,numero){
  if (!trekis){
    return [];
  }else if (trekis.value==numero){
    return cons(trekis.value,[]) 
    } else if (trekis.value>numero){
      return cons (trekis.value,lista(trekis.left,numero) )
    }else if (trekis.value<numero){
    return cons(trekis.value, lista(trekis.right,numero))
  }else{
      return []
  }
}

function lista2(arbolito,numero){
    if (verificar(arbolito,numero)==true){
        return (lista(arbolito,numero))
    }else{
        return []
    }
}

console.log (lista2(arbol,12))
console.log (lista2(arbol,8))
console.log (lista2(arbol,0))

console.log (lista2(arbol2,2))
console.log (lista2(arbol2,1))
console.log (lista2(arbol2,4))
