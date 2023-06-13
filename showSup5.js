//parcourir tableau de chaine de caracteres et afficher les elt de longueur>5
const tableau=["chaine","de","caracteres"];

for(let element of tableau){
    if (element.length>5){
        console.log(element);
    }
}