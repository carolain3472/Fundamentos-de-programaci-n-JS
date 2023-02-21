
const {cons, first, rest, isEmpty, isList, length} = require('functional-light');

const tree = {
  value: 6,
  left: {
    value: 3,
    left: {
      value: 1
    },
    right: {
      value: 5,
      left: {
        value: 4
      }
    }
  },
  right: {
    value: 9,
    left: {
      value: 8
    },
    right: {
      value: 13,
      left: {
        value: 11,
        left: {
          value: 10
        },
        right: {
          value: 12
        }
      }
    }
  }
}

const tree2 = {
  value: 5,
  left: {
    value: 2,
    left: {
      value: 1
    },
    right: {
      value: 3
    }
  },
  right: {
    value: 7,
    left: {
      value: 6
    }
  }
}

const tree3=
{
 value: 3,
 left:{
 value:2,
 left:{
   value:1,
   left:{
   value:0,
   },right:{
     value:3,
  
 }
 }
 },
 right:{
   value:7,
   left:{
     value:6,
     },
     }
  }

console.log(tree3)

/*
Autora: Carolain Jimenez Bedoya 
Contrato: Arbol(nodo)-> booleano
Próposito: Determinar si un nodo es una hoja. 
Ejemplos: 

esHoja(tree2.left)-> false
esHoja(tree2.right)-> false
esHoja(tree2.left.right)->true

esHoja(tree.left)-> false
esHoja(tree.right)-> false
esHoja(tree.right.left)-> true

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
Contrato: Arbol,lista -> lista (número)
Próposito: Devolver un arbol en una lista que contenga el recorrido preorden (Raiz, izquierda, derecha), se accede a la raiz, luego al preorden del nodo izquierdo y luego al preorden del nodo derecho. 

Ejemplos: 

preorden(tree2.left,[])-> [ 2, 1, 3 ]
preorden(tree2.right,[])-> [ 7, 6 ]
preorden(tree.right,[])-> [ 9, 8, 13, 11, 10, 12 ]
preorden(tree.left,[])-> [ 3, 1, 5, 4 ]

*/


function preorden (tree,lista){
  if (!tree){
    return lista
  } if (esHoja(tree)){
    return cons(tree.value,lista)
  }else{
    return cons(tree.value,preorden(tree.left, preorden(tree.right,lista)))
  }
  
}



/*
Autora: Carolain Jimenez Bedoya 
Contrato: Arbol,lista -> lista (número)
Próposito: Devolver un arbol en una lista que contenga el recorrido inorden (Izquierda,Raiz,Derecha), se recorrre en inorden el nodo izquierdo, se accede a la raiz, y se recorre en inorden el nodo derecho.

Ejemplos: 

inorder(tree2.left,[])-> [ 1, 2, 3 ]
inorder(tree2.right,[])-> [ 6, 7 ] 
inorder(tree.right,[])-> [ 8, 9, 10, 11, 12, 13 ]
inorder(tree.left,[])-> [ 1, 3, 4, 5 ]

*/

function inorder (tree,lista){
  if (!tree){
    return lista
  } if (esHoja(tree)){
    return cons(tree.value,lista)
  }else{
    return inorder(tree.left,cons(tree.value,inorder(tree.right,lista)))
  }
  
}

console.log(inorder(tree3,[]))



/*
Autora: Carolain Jimenez Bedoya 
Contrato: Arbol,lista -> lista (número)
Próposito: Devolver un arbol en una lista que contenga el recorrido postorden (Izquierdo, Derecho,Raiz), se recorrre en post orden el nodo izquierdo, luego se recorre en postorden el nodo derecho y por último se accede a la raiz. 

Ejemplos: 

postorden(tree2.left,[])-> [ 1, 3, 2 ]
postorden(tree2.right,[])-> [ 6, 7 ]
postorden(tree.right,[])-> [ 8, 10, 12, 11, 13, 9 ]
postorden(tree.left,[])-> [ 1, 4, 5, 3 ]

*/


function postorden(tree,lista){
    if (!tree){
    return lista
  } if (esHoja(tree)){
    return cons(tree.value,lista)
  }else{
    return postorden(tree.left,postorden(tree.right, cons(tree.value,lista)))
  }

}

/*
console.log(postorden(tree,[]))
console.log(postorden(tree2,[]))
*/
/*
console.log(postorden(tree1,[]))
console.log(inorder(tree1,[]))
*/