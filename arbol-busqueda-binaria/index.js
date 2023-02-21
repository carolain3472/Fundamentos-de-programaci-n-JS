
const tree=
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

const tree2=
{
  value: 15, 
  left:{
    value: 10,
    left: {
      value: 8,
      right:{
        value: 12,
      }
    }
  },
  right: {
    value: 20,
    right:{
      value: 25,
    }
  }
}

function condicion (arbol){
  if (!arbol){
    return true
  }else if ( arbol.value==arbol.left || arbol.value==arbol.left) {
    return false 
  } if (arbol.value>arbol.left){
    return condicion (arbol.left)
  }else if (arbol.value<arbol.right){
    return condicion (arbol.right)
  }
}

console.log(condicion(tree))
console.log(condicion(tree2))