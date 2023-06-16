//verifier si toutes les pptes d'un objet ont des valeurs definies
function verifier(objet) {
    for (let propriete in objet) {
      if (typeof objet[propriete] === 'undefined') {
        return false;
      }
    }
    return true;
  }