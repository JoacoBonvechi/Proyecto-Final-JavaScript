function calcularPrecioConDescuento(valor,descuento){
    let porcentaje_a_pagar = 100 - descuento;
    let valor_a_pagar = (valor*porcentaje_a_pagar)/100;
    return valor_a_pagar;
}

function calcularPrecioConDescuentoYCupon(valor, descuento, cupon){
    let porcentaje_a_pagar = 100 - descuento - cupon;
    let valor_a_pagar = (valor*porcentaje_a_pagar)/100;
    return valor_a_pagar;
}

const cupones = ["Dhose","Joacoxox","Cerati","TomMisch"];

function calcularDescuento(){
    let precio = document.getElementById("inputPrecio");
    const precio_value = precio.value;

    let descuento = document.getElementById("inputDescuento");
    const descuento_value = descuento.value;

    const resultado = document.getElementById("resultado_descuentoh3");

    
    let precio_con_descuento = calcularPrecioConDescuento(precio_value, descuento_value);
    
     resultado.innerText ="El valor con descuento aplicado es de $"+precio_con_descuento;
}

function calcularDescuentoMasCupon(){
    const cupon = document.getElementById("inputCupones");
    const cupon_value = cupon.value;

    let cupon_valor;


    let precio = document.getElementById("inputPrecio");
    const precio_value = precio.value;

    let descuento = document.getElementById("inputDescuento");
    const descuento_value = descuento.value;

    const resultado = document.getElementById("resultado_descuentoh3");

    const error = document.getElementById("error-text");

    switch(cupon_value){
        case cupones[0]:
            cupon_valor = 15;
            error.innerText = ""
        break
        case cupones[1]:
            cupon_valor = 30;
            error.innerText = ""
        break
        case cupones[2]:
            cupon_valor = 20;
            error.innerText = ""
        break
        case cupones[3]:
            cupon_valor = 50;
            error.innerText = ""
        break    

        default:
            cupon_valor = 0;
            error.innerText = "*Error: ingresa un cupon valido"
    }
        let precio_con_descuento_y_cupon = calcularPrecioConDescuentoYCupon(precio_value, descuento_value, cupon_valor);

        resultado.innerText ="El valor con descuento aplicado es de $"+precio_con_descuento_y_cupon;

}

// CUPONES

    

