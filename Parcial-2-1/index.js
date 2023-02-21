/*const {cons, first, rest, isEmpty, isList, length} = require('functional-light');
const lista1= [1,2,5, "trea", "hola"]


function verificar (list){ 

return lista1.filter(x=> typeof(x) == "string")

}
*/
const arbol=
{
  value: 15, 
  left:{ value: 10, left: { value: 8,  }, right:{ value: 12  }},
  right: {value: 20, left: { value: 16}, right:{ value: 25} }

}


/*
Autora: Carolain Jimenez Bedoya 
Fecha de creación: 24/06/2020
Contrato: Arbol(nodo)-> booleano
Próposito: Determinar si un nodo es una hoja. 
Ejemplos: 

esHoja(arbol.left.left)-> false
esHoja(arbol.right.left)-> false
esHoja(arbol.left.left.right))-> true
esHoja(arbol.right.left)-> false



*/
function esHoja(nodo){
  if(nodo.left || nodo.right){
    return false
  }else{
    return true
  }
}

/*
Autora: Carolain Jimenez Bedoya 
Fecha de creación: 24/06/2020
Contrato: Arbol -> número
Próposito: Devolver la suma de los nodos de un arbol que contenga el recorrido postorden (Izquierdo, Derecho,Raiz), se recorrre en post orden el nodo izquierdo, luego se recorre en postorden el nodo derecho y por último se accede a la raiz. 

Ejemplos: 

postorden(arbol.left.right)-> 0
postorden(arbol.left.left.right))-> 12
postorden(arbol.right))-> 61
postorden(arbol.left.left)-> 8

*/


function postorden(tree){
    if (!tree){
    return 0
  } if (esHoja(tree)){
    return tree.value
  }else{ 
    return postorden(tree.left) + postorden(tree.right) + tree.value
  }
}


/*
Autora: Carolain Jimenez Bedoya 
Fecha de creación: 24/06/2020
Contrato: Arbol -> número
Próposito: Organizar el árbol que se necesita, es decir, crear una función que cree dicho árbol.  
*/

function arbolito(arbol){
  if(!arbol){
    return 0
  }else if(esHoja(arbol)){
      return {
        value: arbol.value,
        left: arbolito(arbol.left),
        right: arbolito(arbol.right),
        
      }

  }else{
    return {
        value: postorden(arbol.left) + postorden (arbol.right)+ arbol.value,
        left: arbolito(arbol.left), 
        right:arbolito(arbol.right)
      }
  }
}

console.log(arbolito(arbol))



/*
function arbolito(tree){
  return {
        value: postorden(tree.left) + postorden (tree.right)+ tree.value,
        left:postorden(tree.left),
        right:postorden(tree.right)
      }
}

console.log(arbolito(arbol))
console.log(arbol)
*/
