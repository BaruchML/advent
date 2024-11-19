//funcion que manufactura strings si tenemos caracteres necesarios

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

function manufacture(gifts, materials) {
    let useMaterials = []
    let listaGifts = []
    let finalGift = []

    for (let i = 0; i < materials.length; i++) {
        useMaterials.push(materials[i]);
    }
    for (let i = 0; i < gifts.length; i++) {
        const element = gifts[i]
        const largo = element.length
        let cantidadCaracteres = 0

        for (let index = 0; index < largo; index++) {
           
            if (useMaterials.find(e => e === element[index])) {
                cantidadCaracteres += 1
                
                if(cantidadCaracteres === largo){
                    finalGift.push(element);
                }     
            }   
        }
    }
    return finalGift
}
console.log(

    manufacture(gifts, materials)
);
