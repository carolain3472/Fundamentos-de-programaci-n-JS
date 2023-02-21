
/*

var persona;
persona={
  nombre: "Luisa",
  apellido: "torres",
  telefono: ["225525","25552"],
  direccion: {
    estado: "principal",
    ciudad: "Cali",
    calle: "7",
    casa: 5
  }
}

//Un objeto dentro de otro objeto, las sgtes son formas de acceder a los objetos. 

console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona["nombre"])


var propiedad= "nombre";
console.log(persona[propiedad])

console.log(persona.telefono[0])
console.log(persona.telefono.length)

console.log(persona.direccion.estado)
*/


////Ejercicio 

/*
var evento = {
    nombre: "Evento 1",
    descripcion: "Esto es una descripción",
    fecha: new Date(2018,10,1)
};


function stringValido(string, largo){
  if (string== null || string== undefined){
  return false;
  }if (string.trim().length < largo) {
    return false;
  }
    return true;
}

function fechaValida(fecha,minimaFecha){
  if (fecha== null || fecha==undefined){
    return false;
  } if( fecha.getTime() < minimaFecha.getTime()){
    return false;
  }
    return true;
  }

function eventoValido(evento){
  if (evento==null || evento==undefined){
    return false;
  }
    return ( 
    stringValido(evento.nombre, 3)&&
    stringValido(evento.descripcion,10)&&
    fechaValida(evento.fecha,new Date(2018,0,1,0,0,0))
    )

  }


console.log(eventoValido(evento))
*/
/*
var vehiculos = [    {tipo: "sedan"    }    ];var carros= vehiculos;carros.push({    modelo: "comonuevo",    a: 1967});console.log (carros);console.log (vehiculos);

//Estan unidas por una referencia, lo que hace que ambas tengan el mismo valor y se imprima el mismo contenido luego del cambio. 


/* Necesitamos que nos ayudes creando un objeto que describa el deporte Judo, este objeto debe incluir, nombre, origen y una lista de clubes donde se practica esta disciplina deportiva. De cada club se tendrá el nombre del dojo y la ciudad donde se encuentra. Luego, define una función que reciba el objeto de Judo e imprima por consola el nombre del dojo y ciudad para todos los clubes.*/
/*
var deporte = {
     nombre: "judo",
     origen: "japón",
     club1:
      { dojo: "Sensei VU",
        ciudad: "Inmaculada",
         dojo: "sensei sato",
        ciudad: "Tokio"  
        }
        
    }



function deportere(depor){
  return "Club de judo " + depor.club1.dojo + ", ciudad:  " + depor.club1.ciudad
}
console.log(deportere(deporte))
*/
 //////////////////////////////////////////////////
        //PROGRAMACIÓN ORIENTADA A OBJETOS//


class persona { 
  constructor (){////Vacio porque los atributos serán permanentes
     this.nombre= "Luis";
     this.apellido= "Rodriguez";  //Atributos 

  }
}