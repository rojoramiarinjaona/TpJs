//creer un objet vide
let personne={};
//ajouter une nouvelle propriete a un objet
personne.nom='Rojo';
//modifier la valeur d'une propriete
personne.nom='Tiana';
//supprimer une ppte
delete personne.nom;
//verifier si une propriete existe dans un objet
console.log(personne.hasOwnProperty('profession'));
