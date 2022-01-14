const prompt = require('prompt-sync')();

function printArray(matrix, size_I, size_J){
    let arr = new Array();
    function readArray(matrix, size_I, size_J){
        if(size_J === 0){
            arr.push(matrix[size_I][size_J]);

            if(size_I === 0){
                return arr;
            }
            else{
                return readArray(matrix, size_I-1, matrix[0].length -1);
            }
        }
        else{
            arr.push(matrix[size_I][size_J]);
            return readArray(matrix, size_I, size_J-1);
        }
    };

    readArray(matrix, size_I, size_J);

    let msg_Elements = '';
    arr.reverse().forEach((elemento) => {
        msg_Elements += elemento + ',';
    });

    console.log(arr);
    console.log(msg_Elements);
}

const input = prompt('Insira o array(formato->array1/array2/...):');

const regexVerifyInput = /\d/g;

const verifyInput = input.match(regexVerifyInput).length / input.split('/').length;

if( Number.isInteger(verifyInput) ){
    const inputTransform = function(){
        let arr = new Array();

        for(let i of input.split('/')){
            let rows = i.split(',');
            //console.log(rows);
            arr.push(rows);
        };
        
        return arr;
    };
    printArray(inputTransform(), inputTransform().length-1, inputTransform()[0].length-1);
}
else{
    console.log('O array inserido deve ser uma matriz valida w~w');
}


