//creer de nouvelles ppte en utilisant des boucles
let personne = {
    nom: 'Rojo',
    age: 20,
    profession: 'Reine'
  };

  let vaovao ={
      adresse:'Paris',
  };

  for (let propriete in vaovao) {
    personne[propriete] = vaovao[propriete];
  }