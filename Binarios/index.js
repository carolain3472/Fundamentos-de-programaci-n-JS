

//Usar funciones auxiliares 
//contrato: espar(numero-> texto)
//porposito: devolver 1 si es par y cero si es impar 
//Ejemplo espar (5)->0

function espar (n){
  if (n%2==0){
  return "1";
  }else{
    return "0"
  }
}

//fecha de creación: 03- Marzo-2020
//contrato: número,número,número, número -> texto 
// próposito: Establecer la relación binaria de los números 
function binary(n1,n2,n3,n4){
  return espar(n1)+espar(n2)+espar(n3)+espar(n4);
}

console.log (binary (51,50,58,73))