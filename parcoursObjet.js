//parcours et affichage des pptes et valeur d'un objet litteral
let personne = {
    nom: "Rojo",
    age: 20,
    profession: "princesse"
  };
  for(let propriete in personne){
    console.log(personne[propriete]);
  }