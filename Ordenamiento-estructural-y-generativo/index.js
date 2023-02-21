//ORDENAMINETO ESTRUCTURAL

function insert(n, list) {
 if (isEmpty(list)) {
 return cons(n, []);
 }
 else {
 if (n >= first(list)) {
 return cons(n, list);
 }
 else {
 return cons(first(list),
insert(n, rest(list)));
 }
 }
}

function ordenamientoEstructural(list) {
 if (isEmpty(list)) {
 return [];
 }
 else {
 return insert(first(list),
ordenamientoEstructural (rest(list)));
 }
}
//ORDENAMINETO R.GENERATIVA 

const {cons, first, rest, isEmpty, isList, length, append} = require('functional-light');

function mayortodos(lista,numero){
  if (isEmpty(lista)){
    return []
  }else if (first(lista)>numero){
 return cons(first(lista), mayortodos(rest(lista),numero))
  }else{
    return mayortodos(rest(lista),numero)
  }
}

function menortodos(lista,numero){
  if (isEmpty(lista)){
    return []
  }else if (first(lista)<numero){
 return cons(first(lista), menortodos(rest(lista),numero))
  }else{
    return menortodos(rest(lista),numero)
  }
}

function ordenarascendenteRG (lista){
  if (isEmpty(lista)){
    return []
  }else{
    return append(append(ordenarascendenteRG(menortodos(lista, first(lista))), [first(lista)]) , ordenarascendenteRG(mayortodos(lista, first(lista))))
    } 
  }

const l1 = ((new Array(500))).fill(2).map(x => {return Math.round(Math.random()* 100))}


const l2 = ((new Array(1000))).fill(2).map(x => {return Math.round(Math.random()* 100))}

  function time() {
 var today = new Date();
 return today.getTime();
}

var ini = time()
ordenamientoEstructural(l1)
console.log(time()-ini)

var ini = time()
ordenarascendenteRG(l1)
console.log(time()-ini)



/*
En la primer prueba con l1 se pudo evidenciar que la recursión generativa demoraba mucho menos en realizar los procesos que la recursón estructural, y 
 con una diferencia amplia ya que fue por al rededor de 150 milisegundos menos que la estructural, de las 4 pruebas que realicé con l1, la que mejor resultado brindaba era la recursión generativa. 

 En las pruebas con l2 ocurrió lo mismo, la diferencia es que en listas mucho más grandes la diferencia entre tiempos se hace cada vez mayor, por esto se concluye que es más eficiente la recursión generativa, ya que esta divide los procesos para ahorrar tiempon y hacer el proceso de una manera mucho más eficiente. 

 Sin embargo, no fue posible realizar las pruebas correspondientes a l3, y l4, debido a que repl.it ni Inginious lograba procesarlas. 

 /*


