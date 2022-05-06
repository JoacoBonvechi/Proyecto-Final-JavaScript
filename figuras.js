//Codigo del cuadrado

console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd()

//Codigo del triangulo

console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 +lado2 + base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

console.groupEnd()


//CIRCULOS


console.group("Circulos")


function diametroCirculo(radio){
    return radio*2;
}


const PI = Math.PI;

function perimetroCirculo(radio){
    return diametroCirculo(radio) *PI;
}



function areaCirculo(radio){
    return (radio*radio)*PI;
}

console.groupEnd()



//Aqui interactuamos con el HTML

//CUADRADOS

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    const text_perimetro_cuadrado = document.getElementById("perimetro-text-square");
    text_perimetro_cuadrado.innerText = "Perimetro: "+perimetro;

}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    const text_area_cuadrado = document.getElementById("area-text-square");
    text_area_cuadrado.innerText = "Area: "+area;

}

/// TERMINAN CUADRADOS, EMPIEZAN TRIANGULOS

function calcularPerimetroTriangulo(){
    const base = document.getElementById("InputTrianguloBase");
    const ladoA = document.getElementById("InputTrianguloLadoA");
    const ladoB = document.getElementById("InputTrianguloLadoB");

    const value1 = Number(base.value);
    const value2 = Number(ladoA.value);
    const value3 = Number(ladoB.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);

    const text_perimetro_triangulo = document.getElementById("perimetro-text-triangulo");
    text_perimetro_triangulo.innerText = "Perimetro: "+perimetro;
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputTrianguloBase");
    const altura = document.getElementById("InputTrianguloAltura");

    const value1 = Number(base.value);
    const value2 = Number(altura.value);

    const area = areaTriangulo(value1, value2);

    const text_area_triangulo = document.getElementById("area-text-triangulo");
    text_area_triangulo.innerText = "Area: "+area;
}

// CIRCULOS

function calcularDiametroCirculo(){
    const radio = document.getElementById("InputCirculo");
    const value = Number(radio.value);

    const diametro = diametroCirculo(value);

    const text_diametro_circulo = document.getElementById("diametro-text-circulo");
    text_diametro_circulo.innerText = "Diametro: "+diametro;
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("InputCirculo");
    const value = Number(radio.value);

    const perimetro = perimetroCirculo(value);

    const text_perimetro_circulo = document.getElementById("perimetro-text-circulo");
    text_perimetro_circulo.innerText = "Perimetro: "+perimetro;
}

function calcularAreaCirculo(){
    const radio = document.getElementById("InputCirculo");
    const value = Number(radio.value);

    const area = areaCirculo(value);
    
    const text_area_circulo = document.getElementById("area-text-circulo");
    text_area_circulo.innerText = "Area: "+area;
}

