
const {cons, first, rest, isEmpty, isList, length} = require('functional-light');


/*
Autora: Carolain Jimenez Bedoya
Contrato: Función, Número, lista(números)-> número
Próposito: Realizar la función reducer de manera general, para que esta acumule cada resultado y efectuar una operación indicada, que en este caso es determinr cuál valor de la lista es el mayor. 

*/

function fold(reducer, valIn, lista){
  if(isEmpty(lista)){
    return valIn
  }else{
    return fold(reducer, reducer(valIn, first(lista)), rest(lista))
  }
}

/*
Autora: Carolain Jimenez Bedoya
Fecha de creación: 17/06/2020
Contrato: String,String-> String 
Próposito: Concatenar o unir dos cadenas de texto. 
Ejemplos: 

concatenartext("agua", " Azul")-> agua Azul
concatenartext("perro y", " gato")-> perro y gato
concatenartext("Dia y","noche")-> Dia ynoche
concatenartext("1008","20")-> 100820
concatenartext("cocina", " y el patio")-> cocina y el patio

*/

function concatenartext(palabra1, palabra2) {
  return (palabra1 + palabra2);

}



/*
Autora: Carolain Jimenez Bedoya
Fecha de creación: 17/06/2020
Contrato: Lista(texto) -> String (cadena de texto) 
Próposito: Concatenar o unir los elementos o cadenas de texto que se encuentran en una determinada lista. 

concatenar(["text", " in", " this apple"])->
concatenar(["El", " carro", "82", " es azul"])->
concatenar(["Verde", "8"])->
concatenar(["Feliz", " Cumpleaños", " G8"])->
concatenar(["todo", "junto"])-> 

*/


function concatenar(lista){
  return fold(concatenartext,"",lista)
}



console.log(concatenar(["hola", " soy", " Brayan"]))
console.log(concatenar(["", ""]))
console.log(concatenar(["Hola", "mi nombre es ", "", "..."]))
console.log(concatenar([]))
console.log(concatenar(["    ", "", "."]))
console.log(concatenar(["-2", "1"]))
