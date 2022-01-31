let base=0;
let hipo=0;
function periCuad(lado){
    return lado * 4;
}
function areaCuad(lado){
    return lado * lado;
}
function periTri(lado1, lado2, lado3){
    return lado1 + lado2 + lado3
}
function areaTri(baseTri, altTri){
    return (baseTri * altTri) / 2; 
}
function periCir(radio){
    PI= Math.PI;
    return radio * PI * 2;
}
function areaCir(radio){
    PI= Math.PI;
    return (radio * radio) * PI ;
}
// console.group("Cuadrado");
// const ladoCuad= 5;
// console.log ("los lados del cuadrado miden:" + ladoCuad);
// const perimCuad= ladoCuad * 4;
// console.log ("el perímetro del cuadrado es:" + perimCuad);
// const areaCuad= ladoCuad * ladoCuad
// console.log ("el área del cuadrado es:" + areaCuad);
// console.groupEnd();

// console.group("Triangulo");
// const ladoTri1= 6;
// const ladoTri2= 6;
// const baseTri= 4;
// const altTri= 5.5;
// perimTri= ladoTri1 + ladoTri2 + baseTri;
// areaTri= (baseTri * altTri) / 2
// console.log ("los lados del Triángulo miden:" + ladoTri1 +', '+ ladoTri2 + ', '+ baseTri + 'cm.');
// console.log ("el perímetro del Triangulo es:" + perimTri);
// console.log ("el área del Triangulo es:" + areaTri);
// console.groupEnd();

// console.group("Circulo");
// const radioCir= 5;
// const PI= Math.PI;
// perimCir= Math.round(2 * PI * radioCir);
// areaCir= PI + (radioCir * radioCir);
// console.log ("El radio del circulo mide:" + radioCir + 'cm.');
// console.log ("el perímetro del circulo es:" + perimCir + 'cm.');
// console.log ("el área del circulo es:" + areaCir+ 'cm.');
// console.log ("con un pi de " + PI)
// console.groupEnd();
function calcularPerimetroCuadrado(){
    lado= document.getElementById("ladoCuad").value;
    perimetro= periCuad(lado);
    alert(perimetro); 
}
function calcularAreaCuadrado(){
    lado= document.getElementById("ladoCuad").value;
    area= areaCuad(lado);
    alert(area); 
}
function esIso(ladoTri1, ladoTri2, ladoTri3){
    if (ladoTri1 === ladoTri2 && ladoTri1 !== ladoTri3){
        base= ladoTri3;
        hipo= ladoTri1;
        return true;
    } else
        if (ladoTri1 !== ladoTri2 && ladoTri1 === ladoTri3) {
            base= ladoTri2;            
            hipo= ladoTri1;
            return true;
    } else  
        if (ladoTri2 === ladoTri3 && ladoTri1 !== ladoTri3){
            base= ladoTri1;
            hipo= ladoTri2;
            return true;
    } else
        return false;
}
function calcularPerimetroTriangulo(){
    
    ladoTri1= parseFloat(document.getElementById("lado1Tri").value);
    ladoTri2= parseFloat(document.getElementById("lado2Tri").value);
    ladoTri3= parseFloat(document.getElementById("lado3Tri").value);
    vale= esIso(ladoTri1, ladoTri2, ladoTri3);
    if (vale){
        perimetro= ladoTri1 + ladoTri2 + ladoTri3;
        alert(perimetro); 
    }
    else
        alert('el triangulo no es isosceles');

}
function calcularAreaTriangulo() {

    ladoTri1= parseFloat(document.getElementById("lado1Tri").value);
    ladoTri2= parseFloat(document.getElementById("lado2Tri").value);
    ladoTri3= parseFloat(document.getElementById("lado3Tri").value);
    vale= esIso(ladoTri1, ladoTri2, ladoTri3);
    if (vale){
        base= base /2;
        let altura= Math.sqrt((hipo * hipo) - (base * base) );
        area= altura * base;
        area= Math.round((area * 100))/ 100;
        alert(area); 
    }
    else
        alert('el triangulo no es isosceles');        
}

function calcularCircunferencia() {
    radio= parseFloat(document.getElementById("radioCir").value);
    alert(periCir(radio));
}
function calcularAreaCirculo() {
    radio= parseFloat(document.getElementById("radioCir").value);
    alert(areaCir(radio));
}