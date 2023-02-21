

/*
console.log({value: "banana"})

console.log ({
 value: "banana",
 left: {
 value: "apple"
 }
})


const banana =
{
 value: "banana",
 left: {
 value: "apple"
 }
}

banana.right={
  value: "strawberry"
}

console.log (banana.right.value)
console.log (banana)
console.log(banana.left)
*/
/*
const tree=
{
 value: "banana",
 left: {
 value: "apple",
 right: {
   value: "apricort",
   right: {
     value: "avocado"
   }
 }
 },
 right: {
   value: "cherry",
   left: {
     value: "cataloupe",
     right: {
       value: "cucumber",
       right: {
         value: "grape"
       }
     }
   }
 }
}

console.log(tree)
*/

const tree=
{
 value: "banana",
 left:{
 value:"apple",
 right:{
   value:"apricort",

  
   right:{
     value:"avocado",
   }
 }
 },
 right:{
   value:"cherry",
   left:{
     value:"cataloupe",
     },
     right:{
       value:"cucumber",
       right:{
         value:"grape"
       }
     }
   }
 }



console.log(tree)




//Determinar si es una hoja con booleano 

function esHoja(nodo){
  if (nodo.left || nodo.right){
    return false
  }else{
    return true
  }
}

console.log(esHoja(tree.left.right.right))
console.log(esHoja(tree.right.right))
console.log(esHoja(tree.right.left))


// Izquierdo
/*
function izquierda(nodo){
  return nodo.left;
}

console.log (izquierda(banana))

function derecha (nodo){
  return nodo.right;
}
console.log (derecha(banana))
*/

//CONTAR

function cuentaNodos(bt){
  if(!bt){
 return 0
 }else{

 return 1+cuentaNodos(bt.left)+cuentaNodos(bt.right)
 }
 }


console.log (cuentaNodos(tree))
console.log (cuentaNodos(tree.left))
console.log (cuentaNodos(tree.right))