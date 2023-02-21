
/*
Autora: Carolain Jimenez Bedoya
Próposito: Creación de dos árboles
*/

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
Contrato: árbol(números)-binario-> número
Próposito: Determinar la cantidad de nodos pares que posee un árbol binario

Ejemplos:
contarpares(tree.left)->3
contarpares(tree.right)->2
contarpares(arbolnuevo.left)->3
contarpares(arbolnuevo.right)->1
*/
/*
 function contarpares (nodos){
   if (!nodos){
     return 0
   }if (nodos.value%2==0){
     return 1+contarpares(nodos.left)+contarpares(nodos.right)
   }else{
     return contarpares(nodos.left)+contarpares(nodos.right)
   }
    }

 
 console.log(contarpares(tree))
 console.log(contarpares(arbolnuevo))

*/