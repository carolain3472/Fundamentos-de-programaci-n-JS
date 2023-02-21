//console.log (!false)
//typeof 100
//4==5
// 45%8   MODULO
 // Math.pow( 5,2) Potencia
// Math.sin (180) Buscar por qué no es exacto 
//Math.sqrt (4 Raiz)

/*if(2%2==0){
  console.log ("2 es par");
}else {
  console.log("2 es impar");
}


if (5*3<5){
  console.log ("False");
}else{
  console.log ("True");
}


function area (a,b){
  return (a*b);
}
area(4,5)
*/
/*
function hipotenusa (a,b){
return Math.sqrt (Math.pow (a,2) + Math.pow (b,2));
}
console.log ("La hipotenusa de un triangulo rectangulo de catetos 2 y 1 es: ");
hipotenusa (2,1)
*/

// Autor: Carolain Jimenez Bedoya
//Fecha de creación: 26/02/2020
//contrato: presupmes : número,número,número -> número
//próposito: Determinar los valores del mes usando los valores del transporte
//Ejemplo: presupmes (4400,5000,3000) -> 248000


function presupmes (transporte, fotocopia, comida){
return (transporte*20) +(fotocopia*20) + (comida*20);
}

//Autor: Carolain Jimenez Bedoya
//Fecha de creación: 26/02/2020
//contrato: gastomes : número, número -> número
//próposito: Determinar los gastos que tendría en el mes al empezar a ahorrar 
//Ejemplo: gastomes (4400,3000)->112800

function  gastomes (transporte, fotocopia){
  return (transporte*12)+ (fotocopia*20);
}

//Autor: Carolain Jimenez Bedoya 
//Fecha de creación: 26/02/2020
//contrato: totalmes: número, número, número -> número 
//próposito: Determinar el ahorro que se tiene en el mes al aplicar en el presupmes la resta del gastomes
// ejemplo: totalmes  (4400,3000,5000)->135200

function totalmes (transporte, fotocopia, comida){
return presupmes (transporte,fotocopia, comida) - gastomes( transporte, fotocopia);
}




//contrato: posoneg : Número-> texto
//próposito: Determinar si un número es negativo o positivo 
// ejemplos: posoneg : (-2)-> negativo

/*
function posoneg (x){
  if (x>=0){
    return "positivo";
  }else{ 
   return  "negativo"
  }
  
}

//contrato: program : número -> texto 
//proposito: determinar si un numero es cerp, positivo, negativo

function program (y){
  if (y==0){
    return "cero";
  }else if (y>0)
      return "positivo";
    else{
      return "negativo" }   
  
}
*/

 //contrato: número -> numero
 //proposito:Para un número negativo, ejecutar el cuadrado de este y para un número positivo, ejecutar la raiz  cuadrada

/*
function cuadraiz (a){
  if (a>0){
    return Math.sqrt(a) ;
  }else{
    return Math.pow (x,2);
  }
}

cuadraiz (4)
*/