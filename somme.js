//calculer somme des longuerus des caracteres 
function somme(objet) {
    let somme = 0;
    for (let propriete in objet) {
      if (typeof objet[propriete] === 'string') {
        somme += objet[propriete].length;
      }
    }
    return somme;
  }