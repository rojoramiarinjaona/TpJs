//trouver le plus grand nombre
function grand(liste){
    let i=0;
    let max=0;
    while(i<liste.length){
        if(liste[i]>max){
            max=liste[i];
        }
    }
    return max;
}