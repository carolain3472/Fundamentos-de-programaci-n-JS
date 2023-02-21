/*
function parimpar(x){
  if (x%2==0){
    return "Par";
  }else{
    return "Impar";
  }
  
}

console.log (parimpar(29))
console.log (parimpar (5))
console.log (parimpar (728))
console.log (parimpar (322))
*/

//Nombre: Carolain Jimenez Bedoya 
//creación: 10-Marzo- 2020
//Contrato: primo (número (Entre 1 y 5)-> texto)
//próposito: Determinar si un número es primo 
//Ejemplos: primo (5)-> Primo 
/*
function primo (x);
  if (x<5){
    return (x/2);
  }if (x/2==0){
    return "No es primo";
  }else {
    return "Es primo"
  }
}

console.log (primo (1))
console.log (primo (2))
console.log (primo (4))

//Nombre: Carolain Jimenez Bedoya 
//creación: 10-Marzo- 2020
//Contrato: (número, número, número -> número, número, número)
//próposito: ordenar 3 números de mayor a menor 
//Ejemplos:mayormenor (2,45,3))-> 45,3,2 
//mayormenor ()
/*
function suma (a,b,c){
if (a+b==c){
  return "Sí es igual"
}else{
return "No es igual"
}
}

console.log (suma (2,3,5))
console.log (suma (1782,3999,8523))
console.log (suma (1562,-9854,-8292))

//Nombre: Carolain Jimenez Bedoya 
//creación: 10-Marzo- 2020
//Contrato: Número positico (x>0) -> Texto 

//próposito: Determinar si un jugador al terminar el juego merece una medalla de oro, de plata o de bronce dependiendo de su puntaje , el cual es siempre positivo 

//Ejemplos: console.log (juego (100))->
// console.log (juego (5))->
// console.log (juego (30))->
/
/*
function juego (x){
  if (x<=10){
    return "Bronce"
  }if (10<x<=20){ 
    return "Plata"
  }else{ 
    return "Oro"
  }
}

console.log (juego (7))
console.log (juego (3))
console.log (juego (457))
console.log (juego (14))


//Nombre: Carolain Jimenez Bedoya 
//creación: 10-Marzo- 2020
//Contrato: (número, número, número -> número, número, número)
//próposito: ordenar 3 números de mayor a menor 
//Ejemplos:mayormenor (2,45,3))-> 45,3,2 
*/

function mayormenor (a,b,c){
  if (a<b && b<c) {
    return (c+""+b+""+""+a);
  }
  }
  console.log (mayormenor  (1,2,3))