//retourne la somme des nombre pairs d'un tableau
function somme(tableau){
    let sum=0;
    for(let i=0;i<tableau.length;i++){
        if(tableau[i]%2===0){
            sum+=tableau[i];
        }
    }
    return sum;
}