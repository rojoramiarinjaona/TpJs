//afficher la table de multiplication 
function table(nombre){
    let i=1;
    let resultat=0;
    while(i<=10){
        resultat=nombre*i;
        i++;
    }
    return resultat;
}