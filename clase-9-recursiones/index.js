//RECURSIONES
//Sirve para minimizar un problema deñ mismo tipo 
//Se invoca a la misma funcion 


//Autora: Carolain Jimenez Bedoya
//Fecha de creación: 24-Marzo-2020
//contrato: Número entero positivo -> Número entero positivo 
//próposito:Determinar el factorial de un Número
//Ejemplos:
//factorial (5)->120
//factorial (8)->40320
//factorial de (13)->6227020800
//factorial (3)->6
//factorial (10)->3628800
//factorial (0)->1

/*
function factorial (n){
  if (n<=1) {
    return 1;
  }else{
    return (n*factorial(n-1));
  }
}

console.log (factorial (7))
console.log (factorial (12))
console.log (factorial (18))
console.log (factorial (21))
console.log (factorial (0))
*/

//Autora: Carolain Jimenez Bedoya
//Fecha de creación: 24-Marzo-2020
//contrato: Número entero positivo -> Número entero positivo 
//próposito:Determinar el número que corresponde a cierta posición en la sucesión de fibonacci.
//Ejemplos:
//secuenciafibonacci (5)->5
//secuenciafibonacci (8)->21
//secuenciafibonacci (2)->1
//secuenciafibonacci (3)->2
//secuenciafibonacci (10)->55
//secuenciafibonacci (0)->0
/*
function secuenciafibonacci (n){
  if (n==0){
    return 0;
  }else if (n==1){
    return 1;
  }else{
    return (secuenciafibonacci (n-1) + secuenciafibonacci (n-2))
  }
}

console.log (secuenciafibonacci (0))
console.log (secuenciafibonacci (1))
console.log (secuenciafibonacci (9))
console.log (secuenciafibonacci (15))
*/
/*
function numeroslucas (numero){
    if (numero==0){
        return 2;
    }if (numero==1){
        return 1;
    }else{
        return (numeroslucas (numero-1)+ numeroslucas (numero-2))
    }
}

console.log (numeroslucas (5))
console.log (numeroslucas (32))
console.log (numeroslucas (6))
*/


function conteo (palabra){
  if (palabra==""){
      return 0
  }else {
  return (1 + conteo(palabra.slice (1)))
}


}



console.log(conteo ("hola mundo"))