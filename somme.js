//calculer la somme des valeur dont les pptes sont des nbs

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

let somme=0;
for (let valeur in object){
    if (typeof object[valeur]===Number){
        somme+=object[valeur];
    }
}