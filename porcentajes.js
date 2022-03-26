//const preciooriginal = 100;

//const descuento= 15;

//const porcentajesPrecioConDescuento = 100 - descuento;

function calcularPrecioconDescuento(precio,descuento){
    const porcentajesPrecioConDescuento = 100 - descuento;
    const preciocondescuento = (precio* porcentajesPrecioConDescuento)/100;

    return preciocondescuento

}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
  

//const preciocondescuento = (preciooriginal* porcentajesPrecioConDescuento)/100;

console.log("El precio original es"+ preciooriginal);