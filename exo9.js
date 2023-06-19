//retourner la chaine la plus longue
function chaineLongue(tableau){
    let longue='';
    for(let i=0;i<tableau.length;i++){
        if(tableau[i]>longue.length){
            longue=tableau[i]
        }
    }
return longue;
}