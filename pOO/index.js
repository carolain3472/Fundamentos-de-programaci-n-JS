class ElementoInstruccional{
  constructor (id, tipo, version){
    this.id = id;
    this.tipo = tipo;
    this.version = version;
  }
    nombreunarchivo(){
    return `COMP18S_ ${this.id}_${this.tipo}_${this.version}.midoc`
  }
}


var actividad1= new ElementoInstruccional (1, "interactiva", "V1")

var actividad2= new ElementoInstruccional (2, "ejercicio", "V2")

var actividad3= new ElementoInstruccional (3, "laboratorio", "V1")


console.log(actividad1.nombreunarchivo())
console.log(actividad2.nombreunarchivo())
console.log(actividad3.nombreunarchivo())

/*A continuación necesitamos que representes los eventos usando las nociones de clases en el paradigma orientado a objetos en JavaScript. Para ello, crearemos una clase Evento con un constructor que recibe: id, nombre, cantidadAsistentes y precioPorAsistente. Luego crearemos los métodos para mostrar lo siguiente:

enlace(): Es un string conformado de la siguiente manera “/evento/<id>”
dineroTotalRecaudado()
*/

class evento {
  constructor (id,nombre,cantidadAsistentes, precioPorAsistente){
    this.id= id;
    this.nombre= nombre; 
    this.cantidadAsistentes= cantidadAsistentes;
    this.precioPorAsistent; 
  }
  dineroTotalRecaudado(){
    return (this.cantidadAsistentes * this.precioPorAsistente);


  }
  enlace(){

    return `El evento ${this.id}`

  }
}

var evento1 = new evento(1,"e1", 12, 5);

console.log(evento1.enlace())
console.log(evento1.dineroTotalRecaudado())

var fecha= new Date();

console.log(fecha.toDateString())
console.log(fecha.toISOString())
console.log(fecha.getDay())
console.log(fecha.getDate())
console.log(fecha.getMonth())
console.log(fecha.getFullYear())
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getTime()) //Milisegundos dada una fecha base

//var fecha= new Date(año,mes,día,hora,minutos,segundos, milisegundos);

/