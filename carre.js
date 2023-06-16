//renvoyer les carres d'une liste
function carres(list){
    let carre=[];
    for(let i=0;i<list.length;i++)
    {
        carre[i]=Math.pow(list[i],2);
    }
    return carre;
}