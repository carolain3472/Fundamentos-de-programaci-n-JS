/*var cancion1= "Shape of my heart-sting"
var cancion2= "Donde nadie pueda ir- Manuel medrano"
var cancion3= "Mirrors- Charlie"
var cancion4= "Hey jude- the beatles"
var cancion5= "Hate u- selena gomez"

var x = "Mi lista de canciones preferidas"

function canciones(Nombrecancion){
    return Nombrecancion;
}

console.log (x)
console.log()
console.log(canciones(cancion1))

console.log(canciones(cancion2))

console.log(canciones(cancion3))

console.log(canciones(cancion4))

console.log(canciones(cancion5))*/
///////////////////////////////////////////////////////////

//Es una función que transforma horas y minutos, a minutos. Es decir, esa función llamada totalMinutos recibe dos parámetros horas y minutos y devuelve el total, en cantidad de minutos. 
/*
function TotalMinutos(hora,minuto){
    console.log(x)
  return ((hora*60)+minuto)
}

var x= "El tiempo total en minutos es de: "

console.log(TotalMinutos(5,25))

console.log(TotalMinutos(1,5))
 
 console.log(TotalMinutos(0,15))

//Es una función que calcula la cantidad de dinero recolectado dado un costo y la cantidad de participantes.

function cantidadRecolectadaSimple (costo,participant){
  console.log(mensaje)
return costo*participant
}

var mensaje= "La cantidad a recolectar es"

console.log(cantidadRecolectadaSimple(10,5))
console.log(cantidadRecolectadaSimple(1,5))

//Es una función que calcula la cantidad de dinero recolectado dado los siguientes parámetros, recibidos en este orden:
/*
costoEstudiante
costoAdulto
cantidadEstudiantes
cantidadAdultos*/
/*

function cantidadRecolectada (costoEstudiante,costoAdulto,cantidadEstudiantes,cantidadAdultos){
  console.log(mensaje)
  return ((costoEstudiante*cantidadEstudiantes)+(costoAdulto*cantidadAdultos))
}

/*function cantidadRecolectada(costoEstudiante, costoAdulto, cantidadEstudiantes, cantidadAdultos){
  return cantidadRecolectadaSimple(costoEstudiante, cantidadEstudiantes) + cantidadRecolectadaSimple(costoAdulto, cantidadAdultos);
}
*/

/*
console.log (cantidadRecolectada(1, 5, 20, 4))
console.log (cantidadRecolectada(0, 5, 20, 3))
///////////////////////////////////////////////////////////

//Minusculas (toLowerCase)
/*El método toLowerCase de los objetos tipo string, nos permite obtener la cadena de caracteres convertida a caracteres en minúscula*/
/*
var nombre= "VIVE LA VIDA MIRA QUE SE VA Y NO VUELVE"

nombre.toLowerCase();


/*Mayúsculas (toUpperCase)
Así como tenemos un método para obtener una cadena de caracteres en minúsculas, el método toUpperCase nos devuelve el contenido del string en mayúsculas.*/
/*
var min= "todo pasa por algo"
min.toUpperCase();

/*Recortar (trim)
El método trim de una cadena de caracteres devuelve el valor del string, eliminando los caracteres en blanco que estén al inicio y al final de la cadena, sin importar la cantidad de caracteres en blanco que contenga.*/
/*
var contrim= "    hola, como tas       "

contrim.trim();

//CONCATENAR STRING

var nombre= "Carlos"
var apellido= "Suarez"
var curso= "Js"

//El alumno// nombre// apellido// reside actualmente en el curso// curso// bienvenido

console.log("El alumno " + nombre + " "+ apellido + ", reside actualmente en el curso " + curso + " bienvenido." )

function saludar (nome,apelido,curo){
  var resultado= "Hola el alumno " + nome + " "+ apelido + ", reside actualmente en el curso " + curo + " bienvenido."

  return resultado;
}

console.log(saludar("cristina","Martinez", "c++"))

//INTERPOLACION DE STRINGS
//No se usa concatenacion
function saludar2 (nomes,apelidos,curos){
  var result= `Hola el alumno ${nomes}  ${apelidos} , reside actualmente en el curso  ${curos} bienvenido.`;

  return result;
}

console.log(saludar2("cristina","Martinez", "c++"))
*/

//El .split lo que hace es separar dos strings de forma que quede como un array apartir de un caracter divisor 
//Slice sirve para tomar una posicion y devolver el restante, charAt sirve para tomar una posicion especifica de la tring y retornarla
/*
function ordenar (x){
  return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
}

function fila (linea){
  var arreglo= linea.split(",");
  var name= arreglo[0].trim();
  var sobrename= arreglo[1].trim();

  return ordenar(name) + " " + ordenar (sobrename);

}

var filaprocess= "AnGel, maRIO"

console.log(fila(filaprocess))


var in1= "Chocolate"
var in2= "Helado"
var in3= "Fresas"
var in4=  "Galletas"
var in5= "Hielo"
var in6= "Malteada"

function receta (x,y,z,w,m,recet){
  return `Mi Bolsa de Comida: Nombre de la Receta: ${recet}  ingredientes: ${x} ${y} ${z} ${w} ${m}`

}

console.log(receta(in1,in2,in3,in4,in5,in6))

/*encabezadoEvento
Es una función que dado el nombre del evento y lugar, crea un string para la interfaz de usuario. Algunos ejemplos son:*/
/*
function encabezadoEvento(evento,lugar){
  return `Evento: ${evento} , Lugar: ${lugar}`
}

console.log (encabezadoEvento("Lectura de Poemas", "Sala A"))
/*limpiarNombreParticipante
Es una función que dado el nombre y apellido del participante lo transforma al apellido en mayúsculas, seguido de coma y luego el nombre en minúsculas. Esta función limpia los caracteres en blanco al inicio o final del nombre o apellido. Por ejemplo:*/

/*
function limpiarNombreParticipante(nombre, apellidos){
  return `${apellidos.trim().toUpperCase()}, ${nombre.trim().toLowerCase()}`;
}

console.log (limpiarNombreParticipante(" ANA", "MENDEZ   "))

///////////////////////////////////////////////////////////