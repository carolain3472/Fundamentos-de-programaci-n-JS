const {cons, first, rest, isEmpty, isList, length} = require('functional-light');


function reversa (lista,contador){
  if (isEmpty(lista)){
    return contador;
  }if (length(lista)==1){
    return cons(first(lista),[])
  }else{
    return reversa(rest(lista)),cons(first(lista),contador)
}
}

console.log(reversa([]))
console.log(reversa([1]))
console.log(reversa([4,1,2,7,4,1]))
console.log(reversa([1,2,1]))