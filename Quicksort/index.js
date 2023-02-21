const {cons, first, rest, isEmpty, isList, length, append} = require('functional-light');

/*
Nombre: Carolain Jimenez Bedoya.
Fecha de creación: 13/06/2020.
Contrato: Lista (Números), número-> Lista (Números).
Próposito: Realizar una función que me de la lista de los números mayores a un número dado en una determinada lista.

Ejemplos: 
mayortodos([2,12,5,8,7,3,0],0)->[2,12,5,8,7,3]
mayortodos([3,4,5,8,2,7],7)-> [8]
mayortodos([2,3,6,9],5)-> [6,9]
mayortodos([6,2,8],4)-> [6,8]


*/
function mayortodos(lista,numero){
  if (isEmpty(lista)){
    return []
  }else if (first(lista)>numero){
 return cons(first(lista), mayortodos(rest(lista),numero))
  }else{
    return mayortodos(rest(lista),numero)
  }
}


 /*
Nombre: Carolain Jimenez Bedoya.
Fecha de creación: 13/06/2020.
Contrato: Lista (Números), número-> Lista (Números).
Próposito: Realizar una función que me de la lista de los números menores a un número dado en una determinada lista.

Ejemplos: 
menortodos([2,12,5,8,7,3,0],0)->[]
menortodos([3,4,5,8,2,7],7)-> [3,4,5,2]
menortodos([2,3,6,9],5)-> [2,3]
menortodos([6,2,8],4)-> [2]

*/

function menortodos(lista,numero){
  if (isEmpty(lista)){
    return []
  }else if (first(lista)<numero){
 return cons(first(lista), menortodos(rest(lista),numero))
  }else{
    return menortodos(rest(lista),numero)
  }
}

/*
Nombre: Carolain Jimenez Bedoya.
Fecha de creación: 13/06/2020.
Contrato: Lista (Números)-> Lista (Números).
Próposito: Realizar una función con recursión generativa que con el uso de append logre ordenar de manera ascendente una lista. 

Ejemplos: 
ordenarascendenteRG([2,12,5,8,7,3,0])->[0,2,3,5,7,8,12]
ordenarascendenteRG([3,4,5,8,2,7])-> [2,3,4,5,7,8]
ordenarascendenteRG([2,3,6,9])-> [2,3,6,9]
ordenarascendenteRG([6,2,8])-> [2,6,8]

*/


function ordenarascendenteRG (lista){
  if (isEmpty(lista)){
    return []
  }else{
    return append(append(ordenarascendenteRG(menortodos(lista, first(lista))), [first(lista)]) , ordenarascendenteRG(mayortodos(lista, first(lista))))

    } 
  }

console.log (ordenarascendenteRG([1,4,3,2]))

/*
ordenarascendenteRG([1,4,3,2])
   mayortodos([1,4,3,2], 1) ->[4,3,2]
   menortodos([1,4,3,2],1) ->[]
append(append(ordenarascendenteRG([]),[1]), ordenarascendenteRG([4,3,2]))
ordenarascendenteRG([])->[]

ordenarascendenteRG([4,3,2])
  mayortodos([4,3,2],4)
  ->[]
  menortodos([4,3,2],4)
 ->[3,2] 


append(append([],[1]),append(append(ordenarascendenteRG([3,2]),[4]),ordenarascendenteRG([])))
   ordenarascendenteRG([3,2])
      mayortodos([3,2],3)
      ->[]
      menortodos([3,2],3)
      ->[2]
   ordenarascendenteRG([])
      ->[]

append([1],append(append(append(append(ordenarascendenteRG([2]),[3]),ordenarascendenteRG([])),[4]),[]))

   ordenarascendenteRG([2])
      mayortodos([2],2) ->[]
      menortodos([2],2) ->[]
   ordenarascendenteRG([])
      ->[]


append([1],append(append(append(append(append(append([],[2]),[]),[3]),[]),[4]),[]))

append([1],append(append(append(append(append([2],[]),[3]),[]),[4]),[]))

append([1],append(append(append(append([2],[3]),[]),[4]),[]))

append([1],append(append(append([2,3],[]),[4]),[]))

append([1],append(append([2,3],[4]),[]))

append([1],append([2,3,4],[]))

append([1],[2,3,4])

[1,2,3,4]

*/


console.log (ordenarascendenteRG([7,8,2,1,3,12,14,21]))

/*
ordenarascendenteRG([7,8,2,1,3,12,14,21])
   mayortodos([7,8,2,1,3,12,14,21], 7)
   ->[8,12,14,21]
   menortodos([7,8,2,1,3,12,14,21],7)
   ->[2,1,3]


append(append(ordenarAscendenteRG([2,1,3]),[7]), ordenarascendenteRG([8,12,14,21]))
   ordenarascendenteRG([2,1,3])
    mayortodos([2,3,1],2)
    ->[3]
    menortodos([2,3,1],2)
    ->[1]
   ordenarascendenteRG([8,12,14,21])
      mayortodos([8,12,14,21],8)
      ->[12,14,21]
      menortodos([8,12,14,21],8)
      ->[] 

append(append(
append(append(ordenarascendenteRG([1]), [2]),ordenarascendenteRG([3]))
,[7]),
append(append(ordenarascendenteRG([]),[8]),ordenarascendenteRG([12,14,21])))

   ordenarascendenteRG([3])
      mayortodos([3],3)
      ->[]
      menortodos([3],3)
      ->[]

   ordenarascendenteRG([1])
      mayortodos([1],1)
      ->[]
      menortodos([1],1)
      ->[] 

   ordenarascendenteRG([])
      ->[]

   ordenarascendenteRG([12,14,21])
      mayortodos([12,14,21],12)
      ->[14,21]
      menortodos([12,14,21],12)
      ->[]

append(append(
append(append(append(append(ordenarascendenteRG([]),[1]),ordenarascendenteRG([])), [2]),append(append(ordenarascendenteRG([]),[3]),ordenarascendenteRG([])))
,[7]),
append(append([],[8]),append(append(ordenarascendenteRG([]),[12]), ordenarascendenteRG([14,21]))))

     ordenarascendenteRG([])
      ->[]

     ordenarascendenteRG([])
      ->[]

     ordenarascendenteRG([14,21])
     mayortodos([14,21],14)
     ->[21]
     menortodos([14,21],14)
     ->[]

append(append(
append(append(append(append([],[1]),[]), [2]),append(append(ordenarascendenteRG([]),[3]),[]))
,[7]),
append([8]),append(append([],[12]), append(append(ordenarascendenteRG([]),[14]),ordenarascendenteRG([21])))))

     ordenarascendenteRG([21])
     mayortodos([21],21)
     ->[]
     menortodos([21],21)
     ->[]
     ordenarascendenteRG([])
      ->[]

append(append(
append(append(append([1],[]), [2]),append([3],[]))
,[7]),
append([8],append([12], append([14],
append(append(ordenarascendenteRG([]), [21]),ordenarascendenteRG([]))))))

     ordenarascendenteRG([])
      ->[]
     ordenarascendenteRG([])
      ->[]

append(append(append(append([1], [2]),[3]),[7]),append([8],append([12], append([14],  append([21],[])))))

append(append(append([1,2],[3]),[7]),append([8],append([12], append([14], [21]))))
append(append([1,2,3],[7]),append([8],append([12], [14,21])))
append([1,2,3,7],append([8],[12,14,21]))
append([1,2,3,7],[8,12,14,21])

[1,2,3,7,8,12,14,21]

*/

console.log (ordenarascendenteRG([1,2,3,4,5,7,6,9,0,10,17,16,14,12,13,15,11]))

/*
paso a paso
ordenarascendenteRG([1,2,3,4,5,7,6,9,0,10,17,16,14,12,13,15,11])
   mayortodos([1,2,3,4,5,7,6,9,0,10,17,16,14,12,13,15,11], 1)
   menortodos([1,2,3,4,5,7,6,9,0,10,17,16,14,12,13,15,11],1)

append(append(ordenarascendenteRG([0]),[1]), ordenarascendenteRG([2,3,4,5,7,6,9,10,17,16,14,12,13,15,11]))
   ordenarAscendenteRG([0])

      menortodos([0],0)
      mayortodos([0],0)

   ordenarascendenteRG([1,2,3,4,5,7,6,9,10,17,16,14,12,13,15])

      menortodos([2,3,4,5,7,6,9,10,17,16,14,12,13,15,11],2)
      mayortodos([2,3,4,5,7,6,9,10,17,16,14,12,13,15,11],2)

append(append(append(append(ordenarascendenteRG([]),[0]),ordenarascendenteRG([])),[1]), append(append(ordenarascendenteRG([]),[2]),ordenarascendenteRG([3,4,5,7,6,9,10,17,16,14,12,13,15,11])))

   ordenarAscendenteRG([3,4,5,7,6,9,10,17,16,14,12,13,15])
      mayortodos([3,4,5,7,6,9,10,17,16,14,12,13,15,11],3)
      menortodos([3,4,5,7,6,9,10,17,16,14,12,13,15,11],3)

append(append(append(append([],[0]),[]),[1]), append(append([],[2]),
append(append(ordenarascendenteRG([]),[3]),ordenarascendenteRG([4,5,7,6,9,10,17,16,14,12,13,15,11]))))

   ordenarascendenteRG([4,5,7,6,9,10,17,16,14,12,13,15,11])
      menortodos([4,5,7,6,9,10,17,16,14,12,13,15,11],4)
      mayortodos([4,5,7,6,9,10,17,16,14,12,13,15,11],4)

append(append(append([0],[]),[1]), append([2],append(append([],[3]),append(append(ordenarascendenteRG([]),[4]),ordenarascendenteRG([5,7,6,9,10,17,16,14,12,13,15]]))
)))

   ordenarascendenteRG([5,7,6,9,10,17,16,14,12,13,15,11])
      menortodos([5,7,6,9,10,17,16,14,12,13,15,11],5)
      mayortodos([5,7,6,9,10,17,16,14,12,13,15,11],5)

append(append([0],[1]), append([2], append([3],append(append([],[4]),append(append(ordenarascendenteRG([]),[5]),ordenarascendenteRG([7,6,9,10,17,16,14,12,13,15,11]]))
))))

   ordenarascendenteRG([7,6,9,10,17,16,14,12,13,15,11])
      menortodos([7,6,9,10,17,16,14,12,13,15,11],7)
      mayortodos([7,6,9,10,17,16,14,12,13,15,11],7)


append([0,1], append([2], append([3],append([4],append(append([],[5]),append(append(ordenarascendenteRG([6]),[7]),ordenarascendenteRG([9,10,17,16,14,12,13,15,11]])))
))))
   ordenarascendenteRG([6])
      menortodos([6],6)
      mayortodos([6],6)

   ordenarascendenteRG([9,10,17,16,14,12,13,15,11])
      menortodos([9,10,17,16,14,12,13,15,11],9)
      mayortodos([9,10,17,16,14,12,13,15,11],9)

append([0,1], append([2],append([3],append([4],append([5],append(append(append(append(ordenarascendenteRG([]),[6]), ordenarascendenteRG([])),[7]),append(append(ordenarascendenteRG([]),[9]),ordenarascendenteRG([10,17,16,14,12,13,15,11]]))))
))))
 ordenarAscendenteRG([10,17,16,14,12,13,15,11])
      menortodos([10,17,16,14,12,13,15,11],10)
      mayortodos([10,17,16,14,12,13,15,11],10)

append([0,1], append([2], append([3],append([4],append([5],append(append(append(append([],[6]),[]),[7]),append(append([],[9]),
append(append(ordenarascendenteRG([]),[10]),ordenarascendenteRG([17,16,14,12,13,15,11]])))))
))))

 ordenarascendenteRG([17,16,14,12,13,15,11])
      menortodos([17,16,14,12,13,15,11],17)
      mayortodos([17,16,14,12,13,15,11],17)

append([0,1], append([2], append([3],append([4],append([5],append(append(append([6],[]),[7]),append([9],
append(append([],[10]),append(append(ordenarascendenteRG([16,14,12,13,15,11]),[17]),ordenarascendenteRG([]))))))
))))
 ordenarascendenteRG([16,14,12,13,15])
      menortodos([16,14,12,13,15],16)
      mayortodos([16,14,12,13,15],16)

append([0,1], append([2], append([3],append([4],append([5],append(append([6],[7]),append([9],
append([10],append(append(append(append(ordenarascendenteRG([14,12,13,15,11]),[16]),ordenarA+ascendenteRG([])),[17]),[])))))
))))
 ordenarascendenteRG([14,12,13,15,11])
      menortodos([14,12,13,15],14)
      mayortodos([14,12,13,15],14)

append([0,1], append([2],
append([3],append([4],append([5],append(append([6],[7]),append([9],
append([10],append(append(append(append(append(append(ordenarascendenteRG([12,13,11]),[14]),ordenarascendenteRG([15])),[16]),[]),[17]),[])))))
))))
   rdenarascendenteRG([15])
      menortodos([15],15)
      mayortodos([15],15)

 ordenarascendenteRG([12,13,15,11])
      menortodos([12,13,15,11],12)
      mayortodos([12,13,15,11],12)


append([0,1], append([2],
append([3],append([4],append([5],append([6,7],append([9],
append([10],append(append(append(append(append(append(append(append(ordenarascendenteRG([11]),[12]),ordenarascendenteRG([13])),[14]),append(append(ordenarascendenteRG([]),[15]), ordenarascendenteRG([]))),[16]),[]),[17]),[])))))
))))

   ordenarAscendenteRG([11])
      menortodos([11],11)
      mayortodos([11],11)

   ordenarAscendenteRG([13])
      menortodos([13],13)
      mayortodos([13],13)

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],
append([10],append(append(append(append(append(append(append(append([],[11], append([],[12]),append(append(ordenarascendenteRG([]),[13]), ordenarascendenteRG([]))),[14]),append(append([],[15]), [])),[16]),[]),[17]),[])))))
))))

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],
append([10],append(append(append(append(append(append, append([11],(append([12],append(append([],[13]),[])),[14]),append([15], [])),[16]),[]),[17]),[])))))
))))

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],
append([10],append(append(append(append(append(append,append([11],(append([12],append([13],[])),[14]),[15]),[16]),[]),[17]),[])))))
))))

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],
append([10],append(append(append(append(append(append,append([11],(append([12],[13]),[14]),[15]),[16]),[]),[17]),[])))))
))))

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],
append([10],append(append(append(append(append(append,append([11,12],[13],[14]),[15]),[16]),[]),[17]),[])))))
))))

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],
append([10],append(append(append(append(append([11,12,13],[14],[15]),[16]),[]),[17]),[])))))
))))

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],
append([10],append(append(append(append([11,12,13,14],[15],[16]),[]),[17]),[])))))
))))

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],
append([10],append(append(append([11,12,13,14,15],[16],[]),[17]),[])))))
))))

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],
append([10],append(append([11,12,13,14,15],[16],[17]),[])))))))))

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],
append([10],append(append([11,12,13,14,15,16],[17],[])))))))))

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],
append([10],append([11,12,13,14,15,16,17],[]))))))))

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],append([10],[11,12,13,14,15,16,17]))))))))

append([0,1], append([2], append([3],append([4],append([5],append([6,7],append([9],[10,11,12,13,14,15,16,17]))))))))

append([0,1], append([2], append([3],append([4],append([5],append[6,7],[9,10,11,12,13,14,15,16,17]))))))))

append([0,1], append([2],append([3],append([4],append[5],[6,7,9,10,11,12,13,14,15,16,17]))))))))

append([0,1], append([2],append([3],append[4],[5,6,7,9,10,11,12,13,14,15,16,17]))))))))

append([0,1], append([2],append[3],[4,5,6,7,9,10,11,12,13,14,15,16,17]))))))))

append([0,1],append[2],[3,4,5,6,7,9,10,11,12,13,14,15,16,17]))))))))

append([0,1,2],[3,4,5,6,7,9,10,11,12,13,14,15,16,17])


[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17]
*/

