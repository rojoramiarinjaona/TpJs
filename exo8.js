//nombre de chiffre present
function nombreChiffre(nb){
    let nombre=0;
    let number=nb.split('');
    for(let i=0;i<number.length;i++){
        nombre++;
    }
    return nombre;
}