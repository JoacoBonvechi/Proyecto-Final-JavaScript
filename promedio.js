// MEDIA

let lista = [];

function enviar_lista(){
    const elemento = document.getElementById("numeros_lista");
    const elemento_value = Number(elemento.value);

    lista.push(elemento_value);

    lista_texto = document.getElementById("lista-numeros");
    lista_texto.innerText = "Lista: "+lista;
}

function eliminar_lista(){
    lista = [];
    lista_texto.innerText = "Lista: "+lista;

    let promedio = document.getElementById("texto-promedios");
    let promedio_value = promedio;
    promedio_value.innerText ="Media: ";
}

function Promedio(lista){
    let suma_lista = 0;

    for(let i = 0; i < lista.length; i++){
    suma_lista += lista[i];
}
    promedio_lista = suma_lista / lista.length;
    return promedio_lista
}

function calcular_promedio(){
    let promedio = document.getElementById("texto-promedios");
    let promedio_value = promedio;

    let promedio_numero = Promedio(lista);

    promedio_value.innerText ="Media: "+promedio_numero;
}


//MEDIANA


let lista_mediana = [];

function enviar_lista_mediana(){
    const lista = document.getElementById("numeros_lista_mediana");
    const lista_value = Number(lista.value);

    lista_mediana.unshift(lista_value);


    lista_mediana.sort(function(a, b) {
        return a - b;
      });

    const lista_text = document.getElementById("lista-mediana");
    lista_text.innerText = "Lista: "+ lista_mediana;

    

}
function eliminar_lista_mediana(){
    lista_mediana = [];

    const lista_text = document.getElementById("lista-mediana");
    lista_text.innerText = "Lista: "+ lista_mediana;
}


function esPar(numero){
    if(numero % 2 === 0){
        return true
    }
    else{
        return false
    }
}

function calcularMediana(){
    let mediana;

    const mitadLista = parseInt(lista_mediana.length / 2);

    if (esPar(lista_mediana.length)){
    const elemento1 = lista_mediana[mitadLista - 1];
    const elemento2 = lista_mediana[mitadLista];

    mediana = (elemento1 + elemento2) / 2;

    const mediana_text = document.getElementById("texto-mediana");
    mediana_text.innerText = "Mediana: "+ mediana;
}
    else {
     mediana = lista_mediana[mitadLista];
    
     const mediana_text = document.getElementById("texto-mediana");
    mediana_text.innerText = "Mediana: "+ mediana;
}
}



// MODA


let lista_moda = [];

let lista_moda_count = {};

function enviar_lista_moda(){
    const elemento = document.getElementById("numeros_lista_moda");
    const elemento_value = elemento.value;

    lista_moda.push(elemento_value);

    let texto_lista_moda = document.getElementById("lista-moda");
    texto_lista_moda.innerText = "Lista: "+lista_moda;

}
function eliminar_lista_moda(){
    lista_moda = [];
    let texto_lista_moda = document.getElementById("lista-moda");
    texto_lista_moda.innerText = "Lista: "+lista_moda;
}


function calcularModa(){
    lista_moda.map(
        function(elemento) {
    
        if(lista_moda_count[elemento]){
            lista_moda_count[elemento] += 1;
        }
        else lista_moda_count[elemento] = 1
        }
    );

    const lista_moda_array = Object.entries(lista_moda_count).sort(function(a,b){
        return a[1] - b[1];
    });
    
    const moda = lista_moda_array[lista_moda_array.length - 1];
    
    const valor_que_se_repite = moda[0];

    let texto_moda = document.getElementById("texto-moda");
    texto_moda.innerText = "Moda: "+valor_que_se_repite;
}


// MEDIA ARMONICA 

let lista_armonica = [];

function enviar_lista_media_armonica(){
    const lista_armonica_funct = document.getElementById("numeros_lista_media-armonica");
    const lista_armonica_value = lista_armonica_funct.value;

    lista_armonica.push(lista_armonica_value);

    const lista_armonica_text = document.getElementById("lista-media-armonica");
    lista_armonica_text.innerText = "Lista: "+lista_armonica;
}

function eliminar_lista_media_armonica(){
    lista_armonica=[];
    const lista_armonica_text = document.getElementById("lista-media-armonica");
    lista_armonica_text.innerText = "Lista: "+lista_armonica;

}


function calcularMediaArmonica (){
    let lista_armonica_valor = 0;
    for(let i = 0;i<lista_armonica.length;i++){
        let elemento_armonica = (1/lista_armonica[i]);
        lista_armonica_valor += elemento_armonica;
    }
    const lista_armonica_resultado = lista_armonica.length/lista_armonica_valor;

    const armonica_text = document.getElementById("texto-media-armonica");
    armonica_text.innerText = "Media Armonica: "+lista_armonica_resultado;
}


