// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento; //en toda funcion hay que retornar algun valor

};

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById('InputCoupon');
    const couponValue = inputCoupon.value;

    
    resultCoupon = document.getElementById('ResultCoupon');
   
    
    switch(true) {
        case couponValue === "JuanDC_es_Batman":
          descuento = 15;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
        break;
        case couponValue === "pero_no_le_digas_a_nadie":
          descuento = 30;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
        break;
        case couponValue === "es_un_secreto":
          descuento = 25;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
        break;
        default:
          resultCoupon.innerText = "el cupón ingresado no es valido"
      }
  }
  










// console.log({ //objeto con las variables que queremos imprimir
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,

// });