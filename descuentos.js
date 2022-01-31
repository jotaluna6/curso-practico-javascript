let precioOriginal= 120;
let porcDescuento=15;
// let precioConDescuento= precioOriginal * porcNetoAPagar / 100;

function calcularPrecioConDescuento(precio, desc) {
    porcNetoAPagar= 100 - desc;
    precioConDescuento= precio * porcNetoAPagar / 100;
    console.log ({
        precioOriginal, porcDescuento , porcNetoAPagar, precioConDescuento
    });
    
    return precioConDescuento
}


function ButtonPriceDiscount(){
    const InputPrice= document.getElementById("InputPrice");
    const priceValue= InputPrice.value;
    const InputDiscount= document.getElementById("InputDiscount");
    const discountValue= InputDiscount.value;     
    console.log({priceValue, discountValue});
    const precioConDescuento= calcularPrecioConDescuento(priceValue, discountValue );

    const resultPrice=document.getElementById("resultPrice");
    resultPrice.innerText= "El precio con descuento es $ " + precioConDescuento;

}