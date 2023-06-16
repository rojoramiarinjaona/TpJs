//nombre premier
function premier (nombre){
    let liste=[];
for(let i=2;i<=nombre;i++){
    let estPremier=true;
    
    for(let j=2;j<=i;j++){
        if(i%j===0){
            estPremier=false;
        }
        
    }
    if(estPremier=true){
        liste.push(i);
    }
}
return liste;

}