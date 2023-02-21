/*Eres un hacker de cuentas bancarias. Inicialmente tienes 1 rupia en tu cuenta, y quieres exactamente N rupias en tu cuenta. Escribiste dos hacks, el primer hack puede multiplicar la cantidad de dinero que tienes por 10, mientras que el segundo puede multiplicarlo.
 por 20. Estos hacks se pueden usar cualquier cantidad de tiempo. ¿Puedes lograr la cantidad deseada de N usando estos hacks? 
 */

/*Nombre: Carolain Jimenez Bedoya
Creación: 15/04/2020
Contrato:  Número,Número-> Booleano
Próposito: Determinar si al multiplicar sucesivamente por 10 o por 20 el acumulador logre el valor de N, si no es así me remite false, y si lo cumple es true.

Ejemplos: 
dinero (30000,1)->false 
dinero (20,1)->true
dinero (15000,1)->false
dinero (2000000,1)->true
dinero (325560,1)->false
dinero (10000,1)->true
dinero (2400,1)->false

*/
function dinero (valorfinal,acumulador){
  if (acumulador==valorfinal){
    return true;
  }if (acumulador>valorfinal){
    return false;
  }else {
    return dinero (valorfinal,acumulador*10) || dinero (valorfinal,acumulador*20);
  }
}

console.log (dinero(20000,1))
console.log (dinero (325000,1))
console.log (dinero (24000,1))
console.log (dinero (50000,1))

