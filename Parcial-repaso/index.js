/*
Usar una función que retorne la suma de los dígitos*/ 

/*function suma (x){
  if (x>0){
    return (x%10) + suma (Math.floor(x/10));
  }else{
    return x;
   }
    }
 

console.log (suma (22))*/

/*Factorial */

/*function factorial (num){
  if (num==0){
    return 1;
  }else{
    return (num*factorial(num-1))
  }
  
}
console.log (factorial (6))*/

/*
function numero (num){
  return (++num);//Incremento en 1
}

console.log (numero (2))
*/

//Multiplicación de dos numeros, resursiva
/*function multiply(a, b){
	if (b === 1){
		return a; 
	}
	return a + multiply(a, b-1); 
}

multiply(8, 10)*/

//Dado un número "n", retorna la lista de números desde el 0 hasta el N incluído. Por ejemplo: rangoHasta(5) -> [0,1,2,3,4,5].

function rango (num){
  if (num==0){
    return 0;
  }else{
    return [num + rango (num-1)] //Da los numeros de atras a adelante. 
  }
}
console.log (rango (5))

// poner los numeros hacia atrás

/*function atras (x){
  return x + rango (x-1)
}
 console.log (atras (5))
*/


/*function suma (x){

if (x==0){
    return 0;
  }else{
    return x + suma (x-1) //Da la suma del rango (0+1+2+3+4+5)
  }
} 

console.log (suma (5))*/


function otro (x){
  return x
}

function rangototal (num){
  if (num==0){
    return 0
  }else 
  return [1 + otro (num)]
}

console.log (rangototal(5))