const tree=
{
 value: 18,
 left:{
 value:2,
 left:{
   value:6,
   left:{
   value:21,
   },
   right:{
   value:5,
   }
   },right:{
     value:3,
     left:{
   value:15,
   left:{
   value:24,
   }
 }
 }
 },
 right:{
   value:3,
   left:{
     value:7,
     },
     right:{
       value:12,
     left:{
         value:2,
         },right:{
         value:3
       }
     }
   
  }
  
  }
  
 console.log(tree)
 
const arbolnuevo=
{
value: 11 ,
  left: {
    value: 12 ,
    left: {
      value: 4
    }, right: {
      value: 16
    }
  }, right: {
    value: 3 , 
    left: {
      value: 7
    }, right: {
      value: 8
    }
  }
}

console.log(arbolnuevo)

/*
Autora: Carolain Jimenez Bedoya
Contrato: Arbol-> booleano
Próposito: Determinar si un nodo es hoja o no
Ejemplos:
esHoja(arbolnuevo.left.right)-> true
esHoja(arbolnuevo.right)-> false
esHoja(tree.right.left)-> true
*/
 
 function esHoja(nodo){
  if (nodo.left || nodo.right){
    return false
  }else{
    return true
  }
}

/*
Autora: Carolain Jimenez Bedoya
Contrato: Arbol-> booleano
Próposito: Determinar cual es la profundidad de un arbol, se pone como caso de parada de que el árbol (nodo) sea una hoja, en ese momento se devuelve un 1, si esto no se cumple se halla el máximo entre la parte izquierda y derecha, hasta llegar a una hoja. 
se aumenta uno porque debe tenerse en cuenta el uno, ya que la cantidad de niveles es la cantidad de nodos que hay sobre el árbol hasta llegar a la raiz +1 . 

Ejemplos:
profundidad(arbolnuevo.left.right)-> 1
profundidad(arbolnuevo.right)-> 2
profundidad(tree.right)-> 3
profunidad(arbolnuevo.left)-> 2
*/

 function profundidad (arbol){
   if(!arbol){
   return 0
   }if (esHoja(arbol)){
     return 1
   }else{
     return Math.max(profundidad(arbol.left), profundidad(arbol.right))+1
   }
   }

   console.log(profundidad(tree))
   console.log(profundidad(arbolnuevo))
   console.log(profundidad(tree.left))

  