
//FUNCION QUE ENCUENTRA EL MISMO NUMERO EN UN ARRAY


const gifts1 = [2, 1, 3, 5, 3, 2]
const gifts2 = [1, 2, 3, 4]
const gifts3 = [5, 1, 5, 1]


function findFirstRepeated(arr) {
let newArr = []

    for (let i = 0; i < arr.length; i++) {
      const element = newArr.find(e => e === arr[i])
      if (!element) {
        newArr.push(arr[i])
      }else {
        return arr[i]
      }
      
    }
    return -1
}

