let optionsOp = document.querySelectorAll('.operação');



optionsOp[0].addEventListener("click", function(){calculateOp(1)});
optionsOp[1].addEventListener("click", function(){calculateOp(2)});
optionsOp[2].addEventListener("click", function(){calculateOp(3)});
optionsOp[3].addEventListener("click", function(){calculateOp(4)});

function calculateOp(selectOp) {
    const errorType = "Error"
    let num1 = parseFloat(document.getElementById('entradaUma').value);
    let num2 = parseFloat(document.getElementById('entradaDois').value);
    let returnNum1 = document.getElementById('entradaUma');
    let returnNum2 = document.getElementById('entradaDois')
    let result = document.getElementById('resultado');

    if ( (isNaN(num1) === false) && (isNaN(num2) === false) ) {
        
        if (selectOp == 1) {
            let resultOp = num1 + num2;
            result.innerHTML = resultOp.toFixed(3);
            returnNum1.value = resultOp.toFixed(3);
            //innerHtml não funciona.
            
            returnNum2.focus();
        }
        else if (selectOp == 2) {
            let resultOp = num1 - num2;
            result.innerHTML = resultOp.toFixed(3);
            returnNum1.value = resultOp.toFixed(3);
            returnNum2.focus();
        }
        else if (selectOp == 3) {
            let resultOp = num1 / num2;
            result.innerHTML = resultOp.toFixed(3);
            returnNum1.value = resultOp.toFixed(3);
            returnNum2.focus();
        }
        else if (selectOp == 4) {
            let resultOp = num1 * num2;
            result.innerHTML = resultOp.toFixed(3);
            // se eu colocar == 0*n ira retornar vazio.
            returnNum1.value = resultOp.toFixed(3);
            returnNum2.focus();
        }
        else {
            result.innerHTML = errorType + ". Use as opções."
        }

    }
    else {
        result.innerHTML = errorType;
    }

}



