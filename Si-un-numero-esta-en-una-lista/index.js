


const { cons, first, rest, isEmpty, isList, length } = require('functional-light');


function concatenar(listauno, listados) {
  if (isEmpty(listauno) && isEmpty(listados)) {
    return []
  } if (isEmpty(listauno)) {
    return listados
  } if (isEmpty(listados)) {
    return listauno
  } else {
    return cons(first(listauno), concatenar(rest(listauno), listados))
  }
}


function reversa(lista) {
  if (isEmpty(lista)) {
    return [];
  } if (length(lista) == 1) {
    return cons(first(lista), [])
  } else {
    return concatenar(reversa(rest(lista)), cons(first(lista), []))
  }
}
//FFFFFFFFFFFFFFFFFFGSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSDGGGGGGGGGGGGGGGGGGSDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDG

function palindroma(lista) {
  if (isEmpty(lista)) {
    return true
  } if (first(lista) == first(reversa(lista))) {
    return palindroma (rest(lista))
  } else {
    return false
  }
}


console.log(palindroma[1, 2, 2, 1])
console.log(palindroma[1, 2, 2, 3])