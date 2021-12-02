const digits = 4;
let recVal = new Array(digits);
var verificador = 0;
var onOff = 1;

// ===========================

function armazenarNumeros() {
    verificador++;
    var contadorVazio = 0;

    let arr = document.querySelectorAll('.entradaNum');

    for(l = 0; l < arr.length; l++){
        // if(arr[l].value !== /[0-9]+/) 
        
        if( isNaN(arr[l].value) ){
            alert("Apenas numeros.");
            return;
        }
    }

    let salvar = document.getElementById("arraySalvo");
    
    for(var i = 0; i < arr.length; i++) {
        
        // recVal.push(arr[i].value);
        recVal[i] = arr[i].value;
        if(arr[i].value == ""){contadorVazio++}
    }

    if (contadorVazio !== 0) {
        alert("Por favor, preencha todos os campos.");
    }
    else {
        document.getElementById("apagar").remove();
        let displayArray = document.createElement("span");
        displayArray.id = "apagar"
        displayArray.innerHTML = "[" + recVal[0] + "," + recVal[1] + "," + recVal[2] + "," + recVal[3] + "]";
        salvar.appendChild(displayArray);
    }

}

// ================

function inverseMatrix() {
    if (verificador == 0) {
        alert("Salve um vetor primeiro");
        return;
    }

    let resultado = document.getElementById('arrayResultado');

    let inverse = [];

    for(var i = 0; i < digits; i++) {
        // inverse.push(recVal[digits-i]);
        inverse[i] = recVal[digits-1-i];
    }

    document.getElementById('apagar2').remove();
    let arrayResultado = document.createElement('span');
    arrayResultado.id = "apagar2";
    arrayResultado.innerHTML = "[" + inverse[0] + "," + inverse[1] + "," + inverse[2] + "," + inverse[3] + "]";
    resultado.appendChild(arrayResultado);

    document.getElementById('mostrar').style.display = "inline";
    

}

function crescenteMatrix() {
    if (verificador == 0){
        alert("Salve um vetor primeiro");
        return;
    }

    let crescente = new Array(digits);
    let rascunho = new Array(digits);

    for(var i = 0; i < digits; i++) {
        rascunho[i] = recVal[i];
    }
    console.log(rascunho);
    

    for(var i = 0; i < digits; i++) {
        console.log(i);

        crescente[i] = Math.min(...rascunho);
        console.log(Math.min(...rascunho));
        

        var index = 0;
        var indexArray = 0;
        while (index == 0) {
            if (rascunho[indexArray] == Math.min(...rascunho)) {
                for(var k = 0; k < rascunho.length-1; k++){
                    console.log(k);
                    if (k < indexArray){
                        rascunho[k] = rascunho[k];
                    }
                    else {
                        rascunho[k] = rascunho[k+1];
                    }
                }
                rascunho[rascunho.length-1-i] = Math.max(...rascunho)+1;
                console.log(rascunho);
                index++;
            }
            else {
                indexArray++;
            }
        }
    }

    console.log(crescente);

    document.getElementById("apagar2").remove();

    let resultado = document.getElementById("arrayResultado");

    let arrayResultado = document.createElement('span');
    arrayResultado.id = "apagar2";
    arrayResultado.innerHTML = "[" + crescente[0] + "," + crescente[1] + "," + crescente[2] + "," + crescente[3] + "]";
    resultado.appendChild(arrayResultado);

    document.getElementById('mostrar').style.display = "inline";

}

function show$off() {
    let show$offList = document.querySelectorAll(".opçoes")
    if (onOff ==  1){
        for(var i = 0; i < show$offList.length;i++){
            show$offList[i].style.opacity = "1";
        }
        onOff = 0;
    }
    else {
        for(var i = 0; i < show$offList.length;i++){
            show$offList[i].style.opacity = "0";
        }
        onOff = 1;
    }
}