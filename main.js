/*função definida*/

function soma(num1, num2){
    return num1+num2;
}
console.log(soma(5,3));
function areaQuadrado(lado1){
    return lado1*lado1;
}
console.log(areaQuadrado(7));

/*função anonima*/

let media = function (me1, me2, me3) {
    return (me1+me2+me3)/3;
}
console.log(media(1,3,26));