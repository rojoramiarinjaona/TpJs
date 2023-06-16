//verifier si deux str sont anagrammes
function anagramme (chaine1, chaine2){

  let phrase1=chaine1.split(' ').reverse().join(' ');
  if(phrase1===chaine2){
    return true;
  }
  else{
    return false;
  }

}