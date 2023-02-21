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



function menor(tree){
  if(!tree.left){
    return tree.value;
  }else{
    return menor(tree.left);
  }
}



function esHoja(nodo){
  if(nodo.left || nodo.right){
    return false
  }else{
    return true
  }
}


function unhijo(nodo){
  if(nodo.left && !nodo.right || !nodo.left && nodo.right){
    return true 
  }else{
    return false
  }
}
function remove(arbol, nodo){
  if (arbol.value == nodo){
    if (esHoja(arbol)){
      return undefined
    }else if(unhijo(arbol)){
      if (!arbol.left){
        return arbol.right
      }else if (!arbol.right){
        return arbol.left
       }
    }else{
      arbol.value= menor(arbol.right)
      arbol.right= remove(arbol.right,arbol.value)
      return arbol
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

console.log(remove(tree,12))
console.log(remove(tree,6))
console.log(remove(tree2,2))
console.log(remove(tree2otro,6))