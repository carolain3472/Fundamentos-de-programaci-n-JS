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

const tree2otro = {
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

/*
function esHoja(nodo){
  if (nodo.left || nodo.right){
    return false
  }else{
    return true
  }
}



// encontrar hijo
function unhijo (nodo){
  if (nodo.left || nodo.right){
  return true
  }else{
  return false
  }
  }
//borrar hoja
function borrar(arbol,nodo){
  if (!arbol){
    return 0
  } if (arbol.value== nodo && esHoja(nodo)){
    return null

  }if (nodo < arbol.value){
    return {
    value: arbol.value,
    left: borrar(arbol.left,nodo),
    right: arbol.right
    }

  }if(nodo > arbol.value){
  
    return {
    value: arbol.value,
    left: arbol.left,
    right:borrar(arbol.right,nodo),
  }
}
 }

console.log(borrar(arbol2,6))
*/
/*
function unhijo (nodo){
  if (nodo.left && !nodo.right || !nodo.left && nodo.right){
  return true;
  }else{
  return false;
  }
  }

function reemplazar(arbol,nodo){
   if (arbol.value== nodo){
     if (esHoja(nodo)){
       return null
     } else if (unhijo(nodo)){
       if (!nodo.right){
         return nodo.left
       } else if (!nodo.left){
         return nodo.right
       }
     }
  

    }else{
    if(nodo>arbol.value){
      return {
        value: arbol.value,
        left: arbol.left,
        right: reemplazar(arbol.right, nodo)
      }
    }else{
      return {
        value: arbol.value,
        left: reemplazar(arbol.left, nodo),
        right: arbol.right
      }
    }
  }
}
*/


/*
Autora: Carolain Jimenez Bedoya 
Fecha de creación: 20/05/2020
Contrato: Arbol(nodo)-> Booleano
Próposito: Determinar las hojas de un árbol

Ejemplos: 

esHoja(tree.left.left)-> true
esHoja(tree.left.right)-> false
esHoja(tree2.left.left)-> true
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
Fecha de creación: 20/05/2020
Contrato: Arbol(nodo)-> Booleano
Próposito: Determinar si un nodo posee un hijo en su lado derecho o izquierdo, pero solo puede ser uno.

Ejemplos: 

unhijo(tree2.left.left)-> false
unhijo(tree2.right)-> true
unhijo(tree.right.left)-> false

*/

function unhijo(nodo){
  if(nodo.left && !nodo.right || !nodo.left && nodo.right){
    return true 
  }else{
    return false
  }
}


/*
Autora: Carolain Jimenez Bedoya 
Fecha de creación: 20/05/2020
Contrato: Arbol(numerico)->número
Próposito: 

Ejemplos: 
menor(tree.right)-> 8
menor(tree.left)-> 1
menor(tree2.right)-> 6
menor(tree2.left)-> 1
menor(tree.right.left)-> 8

*/



function menor(tree){
  if(!tree.left){
    return tree.value;
  }else{
    return menor(tree.left);
  }
}

/*
Autora: Carolain Jimenez Bedoya 
Fecha de creación: 21/05/2020
Contrato: árbol, nodo-> árbol (números)

Próposito:Eliminar un nodo especifico de un árbol teniendo en cuenta si es hoja, si solo tiene un hijo o si posee los dos, en cada uno de los casos se realiza un procedimiento distinto.

Ejemplos: 

remove(tree,10)-> {
  value: 6,
  left: { value: 3, left: { value: 1 }, right: { value: 5, left: [Object] } },
  right: {
    value: 9,
    left: { value: 8 },
    right: { value: 13, left: [Object] }
  }
}

remove (tree2,3)-> {
  value: 5,
  left: { value: 2, left: { value: 1 }, right: null },
  right: { value: 7, left: { value: 6 } }
}

remove (tree,4)-> {
  value: 5,
  left: { value: 2, left: { value: 1 }, right: null },
  right: { value: 7, left: { value: 6 } }
}


*/
function remove(arbol,nodo){
  if (arbol.value == nodo){
    if (esHoja(arbol)){
      return undefined
    }else if(unhijo(arbol)){
      if (!arbol.left){
        return arbol.right
      }else if (!arbol.right){
        return arbol.left
        
  }else{
    arbol.value = menor(tree.right)
    tree.right = remove(tree.right,tree.value)
    return tree
  }
  }else{
    if(nodo>arbol.value){
      return {
        value: arbol.value,
        left: arbol.left,
        right: remove(arbol.right, nodo)
      }
    }else{
      return {
        value: arbol.value,
        left: remove(arbol.left, nodo),
        right: arbol.right
      }
    }
  }
  }
  }





console.log(remove(tree,12))
console.log(remove(tree,6))
console.log(remove(tree2,2))
console.log(remove(tree2otro,6))

