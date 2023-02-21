//Mirar en una cadena de textos de paréntesis si todos los paréntesis tienen el correspondiente que cierra después. 

/* 
Nombre: Carolain Jimenez Bedoya 
Fecha de creación: 14/04/2020
Contrato: String-> Booleano
Próposito: Determinar si un parentesis posee su determinada pareja, es decir, si se cierra al abrirlo, para esto usamos substring. 
Para esto recortamos y sumamos la cadena sucesivamente, así al tener un parametro de 1 a -1, si el parentesis se cierra, esté dará un resultado de 0 a partir dela suma con el contador (1-1=0)

Ejemplos: 
parentesis ("((())")->false
parentesis ("(")->false
parentesis ("()")->true
parentesis ("())(")->false
parentesis ("(())")->true
parentesis ("()))")->false
*/

function parentesis (cadena,contador){
  if (cadena.length==0){
     if(contador==0){
    return true
   } else{
  return false
  }
  }if(contador>0){
   return false
 }else if (cadena.charAt (cadena.length-1)==")"){
  return parentesis (cadena.substring(0,cadena.length-1),contador-1)
}else if (cadena.charAt(cadena.length-1)=="("){
  return parentesis (cadena.substring(0,cadena.length-1),contador+1)
} 
}

function conteoparentesis (cadena){
  return parentesis (cadena,0)
}

console.log(conteoparentesis("()()"))
console.log(conteoparentesis("(())"))

console.log(conteoparentesis("(())()"))

console.log(conteoparentesis(")("))
console.log(conteoparentesis("(())("))
console.log(conteoparentesis("(()"))

console.log(conteoparentesis("())("))
