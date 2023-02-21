/*Abhi es un espía. Es bastante natural para él ir a una misión secreta. Una vez que usted y Abhi estaban en la misma misión secreta, cuando Abhi sintió la urgente necesidad de comunicarse con el Dr. Sabitabatra, quien los designó a ambos para esta misión. La única forma de comunicarse con él era enviando cartas. Como ambos estaban en una misión secreta, Abhi escribirá la carta con algunas palabras encriptadas de las cuales el Dr. Sabitabatra estaba al tanto.

Según el cifrado, la palabra cifrada comenzará con el caracter central de la cadena y se formará a partir de esta con los caracteres intermedios de las subcadenas izquierda y derecha (del carácter central de la palabra) y así sucesivamente. Eche un vistazo a los del casos de prueba de muestra para una mejor comprensión. Como la carta iba a ser bastante larga, Abhi quiere su ayuda para encriptar algunas palabras críticas para que pueda terminar rápidamente la carta y enviarla al Dr. Sabitabatra.

Ayuda: Se puede usar la función charAt(i), que devuelve el caracter de la cadena de texto en la posición i. Además, las funciones length y slice para devolver la longitud de la cadena de texto y una subcadena de la cadena original.
*/

/*
Nombre: Carolain Jimenez Bedoya
Fecha de creación: 14-04-2020
contrato: String-> String 
Próposito:  Determinar si la cadena es impar o si es par. 
Ejemplo: 
paroimpar ("carlos")->par
paroimpar ("Hola")->par
paroimpar ("Dedos")->Impar
paroimpar ("Sabio")->Impar
paroimpar ("Programación")->par
paroimpar ("Cartel")->par
*/

function paroimpar (x){
  if (x.length%2==0){
    return "par"; 
  }else{
    return "Impar"
  }
}
/*
Nombre: Carolain Jimenez Bedoya
Fecha de creación: 14-04-2020
contrato: String-> String 
Próposito: Determinar el centro de una determinada cadena, dependiendo si es par o impar.
Ejemplo: 
centro ("carlos")->r
centro ("Hola")->o
centro ("Dedos")->d
centro ("Sabio")->b
centro ("Programación")->a
centro ("Cartel")->r
*/

function centro (m){
  if (paroimpar (m)=="par"){
    return ((m.charAt(m.length/2-1)))
  }else{
  return ((m.charAt (m.length/2)))
}
}

/*
Nombre: Carolain Jimenez Bedoya
Fecha de creación: 14-04-2020
contrato-> String-> String 
Próposito:Separar la cadena de izquierda a derecha y repetir el proceso de encontrar en cada subcadena el término de la mitad teniendo en cuenta si es impar o par.
Ejemplo: 
cifrado ("carlos")->rcaols
cifrado ("hola")->ohla
cifrado ("dedos")->ddeos
cifrado ("sabio")->bsaio
cifrado ("programacion")->aoprgrcmaoin
cifrado ("cartel")->rcaetl
*/


function cifrado (cadena){
  if (cadena==""){
    return ("")
  } if (cadena.length==1){
    return (cadena)
  } if (paroimpar(cadena)=="Impar") {
    return (centro(cadena)+""+cifrado(cadena.substring (0,cadena.length/2))+""+ cifrado(cadena.substring (cadena.length/2+1,cadena.length)))

  }if (paroimpar(cadena)=="par"){
    return (centro (cadena)+""+cifrado(cadena.substring (0,cadena.length/2-1))+""+cifrado(cadena.substring(cadena.length/2,cadena.length))) 
  }
}

console.log (cifrado ("abc"))
console.log (cifrado ("abcd"))
console.log (cifrado ("rscdrregojwcpsxpfjlxbksvulbsugewwxaresuhkokbpslskx"))
console.log (cifrado ("sqrjprnnezoaiukjkslnhiasxceukxspkwkkewoqkirvikdmwh"))
