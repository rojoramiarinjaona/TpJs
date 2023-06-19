//tableau contenant les carrees des nombre d'un autre tableau
function carres (){
    const tableau1=[1,2,3,4,5];
    const tableau2=tableau1.map(nb=>nb*nb);
    return tableau2;
}