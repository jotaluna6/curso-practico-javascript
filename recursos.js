function calcularFaltante() {
    let recaudMes= document.getElementById("recMes").value;   
    let gsFijMes= document.getElementById("fijMes").value;       
    let gsVarMes= document.getElementById("varMes").value;       
    recaudMes= parseFloat(recaudMes);
    gsFijMes= parseFloat(gsFijMes);
    gsVarMes= parseFloat(gsVarMes);    
    let difer = recaudMes - gsFijMes - gsVarMes;
    let texto1, texto2, texto3 = '';
    console.log(restan);
    if (difer == 0) {
        texto1 = "Alcanzaste el equilibrio!!!";
    } else
        if (difer > 0) {
            let proye= difer / parseInt(diaFec) * restan;
            texto1 = "Bravo, ya tienes un superavit";
            texto2 = "de $" + difer;
            texto3 = 'puedes alcanzar un superavit de '+ proye.toFixed(2);

        } else { 
            promDia= difer / restan;
            texto1= "Todavia te faltan $ " + difer;
            texto2= "para alcanzar el equilibrio";
            texto3= "a un promedio diario de $ " + promDia.toFixed(2);
    }
    document.getElementById("linea1").innerHTML =texto1;    
    document.getElementById("linea2").innerHTML =texto2; 
    document.getElementById("linea3").innerHTML =texto3;    
}


const lastDay= [31,28,31,30,31,30,31,31,30,31,30,31];
const mesFec= ["Enero", "Febrero"]
const weekDay= ["Domingo","Lunes","Martes","Miercoles", "Jueves","Viernes","Sabado"]
const d = new Date();
let anoFec= d.getFullYear();
let mes= d.getMonth();
let diaSem= d.getDay();
let diaFec= d.getDate();
const restan= lastDay[mes] - diaFec;
let forFec= weekDay[diaSem] + ", "+ diaFec + " de "+ mesFec[mes]+ " de "+ anoFec ;
document.getElementById("fecha").innerHTML =forFec;
document.getElementById("restan").innerHTML = "Restan " + restan + " dias.";

