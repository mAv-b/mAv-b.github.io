const prompt = require("prompt-sync")();

function factorial(number){
    if(number === 0){
        return 1;
    }
    else {
        return factorial(number-1)*number;
    };
    rl.close();
};

const input = prompt('Insira o numero:');
console.log('\n Resultado de factorial():' + factorial(input) + '\n');


