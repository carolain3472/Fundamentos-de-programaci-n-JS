//Simran está subiendo una escalera con N escalones y puede saltar (saltar) ya sea 1 escalón, 2 escalones o 3 escalones a la vez. Tiene que contar cuántas maneras posibles Simran puede correr hasta las escaleras.

/*
Nombre: Carolain Jimenez Bedoya 
Fecha de creación: 19/04/2020 
Contrato: Número -> Número 
Proposito, contar las positibilidades 

*/

function escalera (numero){
  if (numero==1){
    return 1
  }if (numero==2){
    return 2
    } if (numero==3){
      return 4
    }else {
      return (escalera(numero-1)+ escalera (numero-2)+ escalera(numero-3))
    }
    
  }

console.log (escalera (6))

// Se presenta con fibonacci porque es la suma de las probabilidades de los 3 últimos escalones.
