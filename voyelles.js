// fonction qui compte le nombre de voyelles dans une chaine de caracteres
function nombreVoyelle(cchaine){
    const voyelle= ['a','e','i','o','u','y'];
    let nombre=0;
    let chaine=cchaine.split('');
    let i=0;
    let j=0;

    for (i=0; i<chaine.lenght;i++){
        for(j=0;j<voyelle.length;j++){
            if(chaine[i]=voyelle){
                nombre ++;
            }
        }
    }
    return nombre;
}