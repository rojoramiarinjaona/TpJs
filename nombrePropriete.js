//fonction qui prend un objet litteral comme param et renvoie le nombre de propriete qu'il contient
function nombreProprietes(object){

let nombre=0;

for (let valeur in object){
    nombre++;
} 
return nombre;
}
