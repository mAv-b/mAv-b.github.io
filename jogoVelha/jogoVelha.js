let tabuleiro = [
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"]
];

let espaçoAmos = [0,1]

let posiçoes = document.querySelectorAll(".parte");
//posições não funciona no metodo .slice, ele não é considerado um array...

let arrayPosiçoes = new Array(posiçoes.length);
for (var i = 0 ; i < arrayPosiçoes.length; i++){
    arrayPosiçoes[i] = posiçoes[i];
}

let arrayPosiçoesDiv = new Array(posiçoes.length/3);

for (var Div = 0; Div < posiçoes.length/3; Div++){
    arrayPosiçoesDiv[Div] = arrayPosiçoes.slice(3*Div, 3*(Div+1));
}

var rodada = 0;
var naoRoube = 0;

//============================================

function jogada(linha,coluna) {

    let linhaRec = linha;
    let colunaRec = coluna;
//etapa 1: Fazer o movimento.
    let movimento = realizarJogada(rodada%2,linhaRec,colunaRec);
//etapa 2: verificar se foi valido.
    if( !(isNaN(movimento)) ) {
//etapa 3: ver se temos um vencedor;
        let vencedor = verificarVencedor();
        console.log(vencedor);
//etapa 4: vreificar quem é o vencedor
        if ( !(isNaN(vencedor)) ) {

            if (vencedor == 0) {var InserirVencedor = "(O) GANHOU!";}
            else {var InserirVencedor = "(X) GANHOU!";}
            document.getElementById("resultadoMostrar").innerText = InserirVencedor;
            naoRoube++;
        }
        rodada++;
    }
    else {
        alert("Movimento ilegal! -_-");
    }
//etapa 5: verificar se o jogo acabou.
    if(rodada >= 9){
        document.getElementById("resultadoMostrar").innerText = "Velha!";
    }

}


function realizarJogada(jogador,linha,coluna) {

    if ( isNaN(tabuleiro[linha][coluna]) && (naoRoube == 0) ) {
        tabuleiro[linha][coluna] = espaçoAmos[jogador];

        if (rodada%2 == 0) {var inserir = "O";}
        else {var inserir = "X";}

        arrayPosiçoesDiv[linha][coluna].innerText = inserir;

        return 1;
    }
    else {
        return;
    }
}

function verificarVencedor() {

    for(var i1 = 0; i1 < tabuleiro.length; i1++){
        var linha = 0;
        for(var j1 = 0; j1 < tabuleiro[i1].length; j1++) {
            linha += tabuleiro[i1][j1];
            //se declararmos linha sem definir seu valor, e adicionarmos um numero a linha com +=, ira retorna um NaN;
        }
        console.log(linha);
        if ( (linha == (rodada%2)*tabuleiro[i1].length) && ( linha === (rodada%2)*tabuleiro[i1].length ) ) {
            return rodada%2;
        }
    }

    for(var j2 = 0; j2 < tabuleiro[0].length; j2++){
        var coluna = 0;
        for(var i2 = 0; i2 < tabuleiro.length; i2++){
            coluna += tabuleiro[i2][j2];
        }
        if ( ( coluna == (rodada%2)*tabuleiro.length ) && ( coluna === (rodada%2)*tabuleiro[i1].length ) ){
            return rodada%2;
        }
    }

    var index = 0;
    for(var i3 = 0 ; i3 <= 2; i3 += 2) {
        index++;
        var diagonal = 0;
        for(var j3 = 0; j3 < 3; j3++){
            diagonal += tabuleiro[j3][(i3-j3)*(-1)**(index)];
        }
        if ( ( diagonal == (rodada%2)*tabuleiro.length ) && ( diagonal === (rodada%2)*3 ) )  {
            //bug  em cima era pra ser .lenght não 3.
            return rodada%2;
        }
    }
}

function resetar() {
    for(var i = 0 ; i < posiçoes.length; i++){
        posiçoes[i].innerText = "";
    }
    document.getElementById('resultadoMostrar').innerText = "";
    rodada = 0;
    naoRoube = 0;
    console.log(rodada);
    console.log(naoRoube);
    for(var i1 = 0 ; i1 < tabuleiro.length ; i1++){
        for(var j1 = 0 ; j1 < tabuleiro.length ; j1++){
            tabuleiro[i1][j1] = "resetado";
        }
    }
}