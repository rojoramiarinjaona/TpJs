//fonction qui verifie si une chaine de caractere est palindrome
function palindrome(cchar){
   let ccharInverse=cchar.split('').reverse();
   if (ccharInverse===cchar){
    return true;
   }
   else{
    return false;
   }
}