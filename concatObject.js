//concatener les valeus de chaque objet
function concatener(objet) {
    let res = '';
    for (let propriete in objet) {
      if (typeof objet[propriete] === 'string') {
        res += objet[propriete];
      }
    }
    return res;
  }
  