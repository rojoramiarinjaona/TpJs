//filtrer un tableau en fonction d'une condition
function condition (element){
    return element.length > 5;
}
let tableau=['koto','bozy','akondro','chainelongue'];
let filtre = tableau.filter(condition);

//compter le nombre d'element qui repond a la condition donnee
let nombre=filtre.length;
