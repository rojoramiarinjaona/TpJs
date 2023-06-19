//renvoie le deuxieme plus grand nombre
function grand(tableau){
    let grand=tableau[0];
    let grand2=tableau[0];
    for(let i=0;i<tableau.length;i++){
        if(tableau[i] > grand) {
            grand2=grand;
            grand=tableau[i];
        }
    }
    return grand2;
}