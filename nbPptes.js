//compter le nombre de proprietes d'un objet
function nombre(objet){
    let nombrePpte=0;
    for (let propriete in objet){
        nombrePpte++;
    }
return nombrePpte;
}