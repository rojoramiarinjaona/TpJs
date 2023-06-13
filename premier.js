//fonction qui genere tous les nombres premiers
function listePremier(n){
    const premier=[];

    for(let i=1;i<=n;i++){
        let estPremier=true;
            for (let j=2;j<i;j++){
                if (n % j===0){
                    estPremier=false;
                }
            }
    }
    if (estPremier=true){
        premier.push(i);
    }
return premier;
}