//trouver le plus petit nombre
function grand(liste){
    let i=0;
    let min=0;
    while(i<liste.length){
        if(liste[i]<min){
            min=liste[i];
        }
    }
    return min;
}