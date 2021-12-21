const dados$DoSorteio = [1,60];
let historico = new Array();
let num = 0;

const janela = document.getElementById('quadro');

const ativar = document.querySelector('a');
ativar.addEventListener('click', callback);
ativar.addEventListener('click', screenChange);

function callback(){
    let sorteadosNum = new Array();

    let listaElementos = document.querySelectorAll('.numeroSorteado');
    for(let i of listaElementos){
        i.remove();
    }

    let meuIntervalo = setInterval(function() {

        let sortearNum = Math.random()* ( dados$DoSorteio[1] - dados$DoSorteio[0] ) + dados$DoSorteio[0];


        let numeroSorteado = document.createElement('span');
        numeroSorteado.className = 'numeroSorteado';
        numeroSorteado.textContent = sortearNum.toFixed(0);

        janela.appendChild(numeroSorteado);
        num++;

        for(let i of sorteadosNum){
            console.log(sortearNum.toFixed(0));
            if(sortearNum.toFixed(0) == i){
                numeroSorteado.remove();
                num--;
            }
        }
        sorteadosNum.push(sortearNum.toFixed(0));


        if (num > 5){
            clearInterval(meuIntervalo);
            num = 0;
        }

    }, 1000);

    historico.push(sorteadosNum);
}

function screenChange() {
    console.log('Easter Egg -> sources');
}