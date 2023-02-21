/*
Autora: Carolain Jimenez Bedoya 
Fecha de creación: 04/06/2020 
Contrato: número, número -> número
Próposito: Realizar la potenciación de un número con un determinado esponente de forma estructural. 

Ejemplos: 

potenciacion(80,28) -> 1.9342813113834066e+53
potenciacion(2,120) -> 1.329227995784916e+36
potenciacion(24,5) -> 7962624
potenciacion(125,55) -> 2.1382117680737563e+115
potenciacion(4,9) -> 262144

*/
function potenciacion (base,exponente){
  if (exponente==1){
    return base;
  }if (exponente==0){
    return 1
  }else{
    return base*potenciacion (base, exponente-1)
  }
  }

console.log (potenciacion(2,5))
/*
potenciacion ( 2, 5)-> 2 * potenciacion ( 2, 5-1 )
potenciacion ( 2, 4)-> 2 * potenciacion ( 2, 4-1 )
potenciacion ( 2, 3)-> 2 * potenciacion ( 2, 3-1 )
potenciacion ( 2, 2)-> 2 * potenciacion ( 2, 2-1 )
potenciacion ( 2, 1)-> 2 * potenciacion ( 2, 1-1 )
potenciacion ( 2, 0 )-> 1

 2*2*2*2*2*1

 */


console.log (potenciacion(4,4))

/*
potenciacion ( 4, 4)-> 4 * potenciacion ( 2, 4-1 )
potenciacion ( 4, 3)-> 4 * potenciacion ( 2, 3-1 )
potenciacion ( 4, 2)-> 4 * potenciacion ( 2, 2-1 )
potenciacion ( 4, 1)-> 4 * potenciacion ( 2, 1-1 )
potenciacion ( 4, 0 )-> 1
 
  4*4*4*4*1
 */

console.log (potenciacion(2,1000))
/*
potenciacion ( 2, 1000)-> 2 * potenciacion ( 2, 1000-1)
potenciacion ( 2, 999)-> 2 * potenciacion ( 2, 999-1)
potenciacion ( 2, 998)-> 2 * potenciacion ( 2, 998-1)
potenciacion ( 2, 997)-> 2 * potenciacion ( 2, 997-1)
 * .
 * .
 * .
potenciacion ( 2, 2)-> 2 * potenciacion ( 2, 2-1)
potenciacion ( 2, 1)-> 2 * potenciacion( 2, 1-1)
potenciacion ( 2, 0)-> 2 * 1
 
 1.0715086071862673e+301
 */

console.log (potenciacion(100,99))

/*
potenciacion ( 100, 99)-> 2 * potenciacion ( 100, 99-1)
potenciacion( 100, 98)-> 2 * potenciacion ( 100, 98-1)
potenciacion ( 100, 97)-> 2 * potenciacion ( 100, 97-1)
potenciacion ( 100, 96)-> 2 * potenciacion ( 100, 96-1)
  .
  .
  .
potenciacion ( 100, 2)-> 100 * potenciacion ( 100, 2-1)
potenciacion ( 100, 1)-> 100 * potenciacion ( 100, 1-1)
potenciacion ( 100, 0)-> 100 * 1

  9.999999999999999e+197
 */

/*
Autora: Carolain Jimenez Bedoya 
Fecha de creación: 04/06/2020 
Contrato: número, número -> número
Próposito: Realizar la potenciación de un número con un determinado esponente de forma generativa. 

Ejemplos: 

generativa(80,28) -> 1.9342813113834066e+53
generativa(2,120) -> 1.329227995784916e+36
generativa(24,5) -> 7962624
generativa(125,55) -> 2.1382117680737563e+115
generativa(4,9) -> 262144

*/

  function generativa(base, exponente){
 if (exponente == 0){
 return 1
 }
 if (exponente == 1){
 return base
 }
 if (exponente%2!=0){
 return base * generativa( base *
base, (exponente- 1) / 2 )
 }
 else{
 return generativa( base * base,
exponente / 2 )
 }
}

console.log (generativa(2,5))

/*
generativa (2, 5) -> 2* generativa (2*2, (5-1)/2)
generativa (4, 2) -> generativa (4*4, 2/2)
generativa (16, 1) -> 16

2*16-> 32
*/

console.log (generativa(4,4))

/*
generativa (4, 4) -> generativa (4*4, 4/2)
generativa (16, 2) -> generativa(16*16, 2/2)
generativa (256, 1) -> 256
 */

console.log (generativa(2,1000))

/**
generativa(2, 1000) -> potGE(2*2, 1000/2)

generativa(4, 500) -> generativa(4*4, 500/2)

generativa(16, 250) -> generativa(16*16, 250/2)

generativa(256, 125) -> 256*generativa(256*256, (125-1)/2)

generativa(65536, 62) -> generativa(65536*65536, 62/2)

generativa(4294967296, 31) -> 4294967296*generativa(4294967296*4294967296, (31-1)/2)
generativa(18446744073709552000, 15) -> 18446744073709552000*generativa(18446744073709552000*18446744073709552000, (15-1)/2)

generativa(3.402823669209385e+38, 7) -> 3.402823669209385e+38*generativa(3.402823669209385e+38*3.402823669209385e+38, (7-1)/2)

generativa(1.157920892373162e+77, 3) -> 1.157920892373162e+77*generativa(1.157920892373162e+77*1.157920892373162e+77, (3-1)/2)

generativa(1.3407807929942587e+154, 1) 1.3407807929942587e+154*1.157920892373162e+77*3.402823669209385e+38*18446744073709552000*4294967296*256

  1.0715086071862665e+301
 */

/*
console.log (generativa(100,99))

generativa(100, 99) -> 100*generativa(100*100, (99-1)/2)

generativa(10000, 49) -> 10000*generativa(10000*10000, (49-1)/2)

generativa(100000000, 24) -> generativa(100000000*100000000, 24/2)

generativa(10000000000000000, 12) ->generativa(10000000000000000*10000000000000000, 12/2)

generativa(1e+32, 6) ->generativa(1e+32*1e+32, 6/2)

generativa(1.0000000000000002e+64, 3) -> 1.0000000000000002e+64*generativa(1.0000000000000002e+64*1.0000000000000002e+64, (3-1)/2)

generativa(1.0000000000000003e+128, 1) -> 1.0000000000000003e+128*1.0000000000000002e+64*10000*100

  1.0000000000000004e+198
 */