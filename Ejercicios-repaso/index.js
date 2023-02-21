//Autor: Carolain Jimenez Bedoya
//Fecha de creación: 28/08/2020
//Contrato: número -> número
//Próposito:Pasar un número de centimetros a metros
//Ejemplo: metros (20)-> 0.2
/*
function metros (x){
  return (x/100);
}

console.log ("los metros equivalen a:" )

//metros (1560)
//metros (20)
*/

//Autor: Carolain Jimenez Bedoya
//Fecha de creación: 28/08/2020
//Contrato: número, número -> número
//Próposito:obtener el iva total a pagar por la compra de dos producto, al primero  se le aplica el 20% y al segundo se le aplica un iva  del 16%
//Ejemplo: iva (250000,300000) -> (50000), (48000)

function iva (x){
  return (x*20/100);
  }

function iva2 (y){
  return (y*16/100);
}

function total (x1,y1){

  return iva(x1)+" "+""+iva2(y1);
}

console.log (total(100000,80000))


// materias


