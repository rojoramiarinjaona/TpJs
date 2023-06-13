const object=[
    {
        nom:"Viande",
        prix:1200
    },
    {
        nom:"Huile",
        prix:800
    },
    {
        nom:"Savon",
        prix:400
    },
    {
        nom:"Sucre",
        prix:500
    }
]
for (let valeur in object){
    console.log('${valeur}:${object[valeur].nom}');
}