//CADENAS DE TEXTO 
/*
"Hola" + "Chao"
console.log("2"+"4")
console.log ("holaa".charAt (4))
console.log ("holaa".lenght)
console.log ("holaaaaaa".substring (2))
*/

//Nombre:Carolain Jimenez Bedoya 
//fecha: 03-03-2020
// contrato: presión: Numero -> texto  
//próposito: si está entre 120 y 180, está sano, si es menor a 120 debe tomar medicina y si es mayor a 180 debe ir al medico. 
// Ejemplo: 200-> Debe ir al medico 

/*
function presion (n){
  if (n<=120){
    return "Tomar medicina"; 
  }else{
if (n<180){
    return "Está sano";
  }else{
    return "Ir al medico";
  }
}
}
console.log (presion (180))
*/

//contrato: intervalo: Número-> texto 
//próposito:determinar si n está en el intervalo (3,7]
//ejemplos: console.log (intervalo (80))-> NO PERTENECE AL INTERVALO
/*
function intervalo (n){
  if (n<=3){
    return "NO PERTENECE AL INTERVALO";
  }else{ 
    if (n<=7){
      return "SE INCLUYE EN EL INTERVALO";
    }else{
      return "NO PERTENECE AL INTERVALO";
    }
  }
}

console.log (intervalo (2))
console.log (intervalo(7))
console.log (intervalo (3))
console.log (intervalo(8))
*/

//contrato: iva (número-> "texto" o número 
//proposito: Los productos que cuesten 2 millones o menos, no pagaran impuesto, los que cuesten 20 millones o más pagaran un impuesto del 8%, y cualquier otro pagará un impuesto del 5%

function iva (n){
  if (n<= 2000000){
    return "No paga impuesto";
  }else if (n>=20000000){
    return (n*8/100);
  }else{ 
    return (n*5/100);
  }
}

console.log (iva (17000000), iva(2000000), iva (20000000))