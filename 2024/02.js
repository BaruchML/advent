/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:
*/

//ejemplo

/*

createFrame(['midu', 'madeval', 'educalvolpz'])

Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
*/
function createFrame(names){
    let namesLength = []
    let frame = []
    let frameBorder = []


    // High name
    for (const name of names) {
        namesLength.push(name.length)
    }
    const lengthLargeName = Math.max(...namesLength)
    const indexLargeName = namesLength.indexOf(lengthLargeName)
    

    //Border Lenght
    for (let i = -1; i < lengthLargeName+1; i++) {
        frameBorder.push('*')
        
    }


    return frameBorder.join('')
    
}
console.log(
    createFrame(['midu', 'madeval', 'educalvolpz']) 
    
);
