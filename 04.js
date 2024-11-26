//INSTRUCCIONES
/*
En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

Paso a paso:
1. Invertimos el anidado -> sa(ualcatn)s
2. Invertimos el que queda -> santaclaus
Notas:

Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
En el mensaje final no deben quedar paréntesis.
El nivel máximo de anidamiento es 2.
*/

function decode(message) {
    let letters = []
    let parenthesesIndex = []
    let firstReversedLetters = []
    let secondReversedLetters = []

    for (let i = 0; i < message.length; i++) {
        letters.push(message[i])
    }

    let openingParentheses = letters.indexOf('(');
    let closureParentheses = letters.indexOf(')');

    while (openingParentheses != -1) {
        parenthesesIndex.push(openingParentheses)
        openingParentheses = letters.indexOf('(', openingParentheses + 1)
    }
    while (closureParentheses != -1) {
        parenthesesIndex.push(closureParentheses)
        closureParentheses = letters.indexOf(')', closureParentheses + 1)
    }


    //DOBLE
    if (parenthesesIndex.length > 2 && parenthesesIndex[1] > parenthesesIndex[2]) {

        for (let i = parenthesesIndex[0]; i <= parenthesesIndex[2]; i++) {
            firstReversedLetters.push(letters[i])
        }

        firstReversedLetters.reverse()

        let index = 0
        let sum = parenthesesIndex[0]

        
        for (let i = parenthesesIndex[0]; i <= parenthesesIndex[2]; i++) {

            letters.splice(sum, 1, firstReversedLetters[index])
            index = index + 1
            sum = sum + 1

        }
        for (let i = parenthesesIndex[1]; i <= parenthesesIndex[3]; i++) {
            secondReversedLetters.push(letters[i])
        }

        secondReversedLetters.reverse()
        index = 0
        sum = parenthesesIndex[1]
        
        for (let i = parenthesesIndex[1]; i <= parenthesesIndex[3]; i++) {

            letters.splice(sum, 1, secondReversedLetters[index])
            index = index + 1
            sum = sum + 1
        }
        return letters.filter(l => l != '(' && l != ')').join('')



   //ANIDADO
    }else if(parenthesesIndex.length > 2){
       
        for (let i = parenthesesIndex[0]; i <= parenthesesIndex[3]; i++) {
            firstReversedLetters.push(letters[i])
        }

        firstReversedLetters.reverse()

        let index = 0
        let sum = parenthesesIndex[0]
        
        for (let i = parenthesesIndex[0]; i <= parenthesesIndex[3]; i++) {

            letters.splice(sum, 1, firstReversedLetters[index])
            index = index + 1
            sum = sum + 1
        }
        
        closureParentheses = letters.indexOf(')');
        while (closureParentheses != -1) {
            parenthesesIndex.push(closureParentheses)
            closureParentheses = letters.indexOf(')', closureParentheses + 1)
        }
        openingParentheses = letters.indexOf('(')
        while (openingParentheses != -1) {
            parenthesesIndex.push(openingParentheses)
            openingParentheses = letters.indexOf('(', openingParentheses + 1)
        }
        for (let i = parenthesesIndex[5]; i <= parenthesesIndex[6]; i++) {
            secondReversedLetters.push(letters[i])
        }

        secondReversedLetters.reverse()
        index = 0
        sum = parenthesesIndex[5]
        
        for (let i = parenthesesIndex[5]; i <= parenthesesIndex[6]; i++) {

            letters.splice(sum, 1, secondReversedLetters[index])
            index = index + 1
            sum = sum + 1
        }
        return letters.filter(l => l != '(' && l != ')').join('')
        
        
   //SIMPLE
    }else{
        for (let i = parenthesesIndex[0]; i <= parenthesesIndex[1]; i++) {
            firstReversedLetters.push(letters[i])
        }

        firstReversedLetters.reverse()

        let index = 0
        let sum = parenthesesIndex[0]

        
        for (let i = parenthesesIndex[0]; i <= parenthesesIndex[1]; i++) {

            letters.splice(sum, 1, firstReversedLetters[index])
            index = index + 1
            sum = sum + 1

        }
        return letters.filter(l => l != '(' && l != ')').join('')
        
    }

    console.log(parenthesesIndex, letters,firstReversedLetters);

}


console.log(
    decode('hola (odnum)')
)