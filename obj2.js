//creer une fonction dans un objet
let objet={
    nom:'Rojo',
    age:16,
    donnerAdresse:()=>{
        console.log('Ankofafa');
    }
};
//appeler une fonction a l'interieur d'un objet
objet.donnerAdresse();
//acceder a une ppte a l'aide d'une notation pointee
console.log(objet.nom);
//acceder a une ppte a l'aide d'une notation crochet
console.log(objet[nom]);
