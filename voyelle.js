//nombre de voyelles
function nombre(chaine) {
    let compte= 0;
    let i = 0;
    const voyelles = ['a', 'e', 'i', 'o', 'u'];
  
    while (i < chaine.length) {
      const element=chaine[i];
      if (voyelles.includes(element)) {
        compte++;
      }
      i++;
    }
  
    return compte;
  }