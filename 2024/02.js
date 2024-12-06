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


    // Large name
    for (const name of names) {
        namesLength.push(name.length)
    }
    const lengthLargeName = Math.max(...namesLength)
    // const indexLargeName = namesLength.indexOf(lengthLargeName)
    

    //Border Lenght
    for (let i = -2; i < lengthLargeName+2; i++) {
        frameBorder.push('*')
    }
    for (const name of names) {
            let spaces = ['*', ' ', ' ', '*']
            for (let i = 0; i < lengthLargeName; i++) {
                spaces.splice(1, 0, ' ')
    
            }
            let indexSpace = 2
            for (const element of name) {
                spaces.splice(indexSpace,1,element)
                indexSpace = indexSpace + 1
            
            }
            frame.push(spaces)
        }
    frame.unshift(frameBorder)
     frame.push(frameBorder)


     
    return frame.map(el => el.join('')).join('\n')


}
console.log(
    createFrame(['a', 'bb', 'ccc']) 
    
);
