//fonction quii prend un tableau en parametre et renvoie leur somme
function sommeElt(tableau){
    let somme=0;
    for(element of tableau){
        somme+=element;
    }
    return somme;
}