
function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i= 0; i < lista.length; i++) {
    //     sumaLista+= lista[i];
    // }
    if (lista.length > 0)    {
    const sumaLista= lista.reduce(
        function(sumita=0, elemento ) {
           return sumita+= elemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }
    else{
        console.log("la lista esta vacia");
    }
}

function calcularMediana(lista) {
    // const lista1=[ 100, 200, 300, 3500, 50000, 65000];
        let lista1=[];
        lista1 = lista;
        lista1.sort(function(a, b){return a-b});
        let mitadLista1= 0;
        if (lista1.length > 0) {
            mitadLista1= lista1.length / 2;
            mitadLista1=parseInt(mitadLista1);
            if (lista1.length % 2 === 0){
                return calcularMediaAritmetica([lista1[mitadLista1],
                                            lista1[mitadLista1-1]]);
            }
            else {  
            return lista1[mitadLista1];
            }   
        }
        else{
        console.log("la lista esta vacia");
        }
    }


const salariosCol= colombia.map(
    function(tipo) {
        return tipo.salary;
    })

salariosOrd= salariosCol;
salariosOrd.sort(function(a, b){return a-b});
let cuantos = (salariosOrd.length * .9);
const top10 = salariosOrd.slice(cuantos, salariosCol.length-1)


console.log(calcularMediana(salariosCol));
console.log(calcularMediana(top10));