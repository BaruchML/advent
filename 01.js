
//FUNCION QUE ENCUENTRA EL MISMO NUMERO EN UN ARRAY


//INSTRUCCIONES
/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

EJEMPLOS 
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
** Aunque el 2 y el 3 se repiten
** el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
** Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5


*/
const gifts1 = [2, 1, 3, 5, 3, 2]
const gifts2 = [1, 2, 3, 4]
const gifts3 = [5, 1, 5, 1]


function findFirstRepeated(gifts) {
  let giftsNumbers = []
  let giftsNumbersRepeated = []

  for (let i = 0; i < gifts.length; i++) {
    const repeatedNumber = giftsNumbers.find(e => e === gifts[i])

    if (repeatedNumber) giftsNumbersRepeated.push(repeatedNumber)
    giftsNumbers.push(gifts[i])
  }
   
 return giftsNumbersRepeated.length > 0 
  ?  giftsNumbersRepeated 
  : -1

}

console.log(
  findFirstRepeated(gifts1),
  findFirstRepeated(gifts3),
  findFirstRepeated(gifts2),
);
