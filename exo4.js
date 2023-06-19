//retourner tableau des nombres premiers
function TabPremier(tableau){
    let premiers=[];
    for(let i=0;i<tableau.length;i++){
        let premier=true;

       for(let j=2;j<tableau[i];j++){
        if (tableau[i] % j === 0) {
            premier = false;
          }
       }
       if(premier===true){
        premiers.push(tableau[i]);
    }
    }
    return premiers;
}