function mcdEstructural(numero1, numero2,divisor) {
 if (numero1%divisor == 0 && numero2%divisor==0) {
 return divisor;
 }
 else {
 if (numero1>numero2) {
 return mcdEstructural(numero1, numero2, divisor-1);
 }
 else {
 return primerDivisor(i - 1);
 }
 }
 }
return primerDivisor( Math.min(n,
m));
}

console.log (5,85)
