

//=================== DADOS/VARIAVEIS ==============================]
let dados$DeExp = {
    expRapida : {
        primeiroLugar:200,
        segundoLugar: 120,
        terceiroLugar : 50
    },
    expGrande : {
        primeiroLugar : 220,
        segundoLugar : 130,
        terceiroLugar : 75
    },
    expEnduro : {
        primeiroLugar : 250,
        segundoLugar : 150,
        terceiroLugar : 90
    }
}

let dados$DosCarros = {
    velocidadeMinima : {
        popular : [110,130],
        sport : [125,145],
        superSport : [140,160]
    },
    velocidadeMaxima : {
        popular : [180,200],
        sport : [195,215],
        superSport : [210,230]
    },
    derrapagem : {
        popular : [3,4],
        sport : [2,3],
        superSport : [1,1.75]
    }
}

let garagem = [carrinhos$DoPedro = {}, carrinhos$DoJuca = {}, carrinhos$DaEdna = {}];
index$CarroDo = [1,1,1];

//PERFIL DOS JOGADORES
let jogadores = {
    Pedro : {exp:0,nivel:1},
    Juca : {exp:0,nivel:1},
    Edna : {exp:0,nivel:1} 
}

//====================== GERAR-CARRO =============================]

function gerarCarros(jogador) {
    if (index$CarroDo[jogador]<=5 ){

        let car = new Object();

        for (let i in dados$DosCarros ){
            let eventoAleatorio = Math.random();

            if (eventoAleatorio<0.6){
                car[i] = dados$DosCarros[i].popular;
            }
            else if (eventoAleatorio<0.95){
                car[i] = dados$DosCarros[i].sport;
            }
            else if (eventoAleatorio<1){
                car[i] = dados$DosCarros[i].superSport;
            }
        }

        garagem[jogador]['Carro' + index$CarroDo[jogador] ] = car;
        console.log(garagem);
        inserir$CarroNaGaragem(jogador);
        index$CarroDo[jogador] ++;
    }
    else {alert('Você não pode montar mais carros :/');}
}

//======================= CONFIGURAR CARRO PARA A VOLTA =====================================

function configurarCarro() {
    let config$DosCarros = {};

    for(let i in jogadores){
        var index = 0;
        let carrosDisponiveis = [];
        let list = document.querySelectorAll('.meuCarro' + i).forEach(element => carrosDisponiveis.push(element.checked));
        console.log(carrosDisponiveis);
        let carroEscolhido = carrosDisponiveis.indexOf(true);
        console.log(garagem[index]['Carro' + carroEscolhido]);
        config$DosCarros[i].velocidadeMinima = Math.random()*(garagem[index]['Carro' + carroEscolhido][velocidadeMinima][1]-garagem[index]['Carro' + carroEscolhido][velocidadeMinima][0]) + garagem[index]['Carro' + carroEscolhido][velocidadeMinima][0];
        config$DosCarros[i].velocidadeMaxima = Math.random()*(garagem[index]['Carro' + carroEscolhido][velocidadeMaxima][1]-garagem[index]['Carro' + carroEscolhido][velocidadeMaxima][0]) + garagem[index]['Carro' + carroEscolhido][velocidadeMaxima][0];
        config$DosCarros[i].derrapagem = Math.random()*(garagem[index]['Carro' + carroEscolhido][derrapagem][1]-garagem[index]['Carro' + carroEscolhido][derrapagem][0]) + garagem[index]['Carro' + carroEscolhido][derrapagem][0];
        config$DosCarros[i].voltasVencidas = 0;

        let numUpdates = Math.floor(jogadores[i].exp/450);
        for(let i = 0; i < numUpdates; i++){
            config$DosCarros[i].velocidadeMinima += config$DosCarros[i].velocidadeMinima*(1/100);
            config$DosCarros[i].velocidadeMaxima += config$DosCarros[i].velocidadeMaxima*(1/100);
        }
        index++;
    }
    return config$DosCarros;
}

//=========================== REALIZAR A CORRIDA =============================================

function corrida(numVoltas) {
    console.log('isWOrk')
    for(let i = 0; i < numVoltas; i++){

        var config = configurarCarro();
        console.log(config);
        for (let i in jogadores){
            config[i].velocidadeVolta = Math.random()*( config[i].velocidadeMaxima - config[i].velocidadeMinima)+config[i].velocidadeMaxima;
            config[i].velocidadeVolta -= config[i].velocidadeVolta*(config[i].derrapagem/100);
        }
        let vencedorVolta = ['ninguem',0];
        for (let i in jogadores){
            if(config[i].velocidadeVolta > vencedorVolta[1]){
                vencedorVolta[1] = config[i].velocidadeVolta;
                vencedorVolta[0] = i;
            }
        }
        config[vencedorVolta[0]].voltasVencidas++;
    }
    return config;
}



function insirirHtml(resultado,empateVer) {
    
    let primeiroLugar = resultado[0];
    let segundoLugar = resultado[1];
    let terceiroLugar = resultado[2];
   
    

    document.getElementById("trofeuImagem").style.opacity = "1";
    document.getElementById("vencedorSentença").innerHTML = "O vencedor é <span>" + listaNames[primeiroLugar] + "</span>";
    document.getElementById("participante1").innerText = "Pedro";
    document.getElementById("participante2").innerText = "Juca";
    document.getElementById("participante3").innerText = "Edna";

    let elementosVoltasContador = document.querySelectorAll(".voltasInserir");
    elementosVoltasContador[0].innerHTML = placarRodadaJogador[0];
    elementosVoltasContador[1].innerHTML = placarRodadaJogador[1];
    elementosVoltasContador[2].innerHTML = placarRodadaJogador[2];

    let ranking = document.querySelectorAll(".participanteAoPremio");
    console.log(ranking)
    ranking[0].innerHTML = primeiroLugar;
    ranking[1].innerHTML = segundoLugar;
    ranking[2].innerHTML = terceiroLugar;


}

//=================================== EMPATE? ================================================

function empateVerificador(numVoltas, tipo$DaCorrida){
    uparLeveis();

    let empateVer = corrida(numVoltas);
    console.log(empateVer);

    if ((empateVer['Pedro'].voltasVencidas == empateVer['Juca'].voltasVencidas) || (empateVer['Pedro'].voltasVencidas == empateVer['Juca'].voltasVencidas) || (empateVer['Edna'].voltasVencidas == empateVer['Juca'].voltasVencidas)){
        let algo$QuePrecisoCopia = [['Pedro','Juca','Edna'],[empateVer['Pedro'].voltasVencidas,empateVer.Juca.voltasVencidas,empateVer.Edna.voltasVencidas]];
        let algo$QuePreciso = [['Pedro','Juca','Edna'],[empateVer.Pedro,voltasVencidas,empateVer.Juca.voltasVencidas,empateVer.Edna.voltasVencidas]];
        let menorTermo = algo$QuePreciso[1].indexOf(Math.min(empateVer.Pedro.voltasVencidas,empateVer.Juca.voltasVencidas,empateVer.Edna.voltasVencidas));
        algo$QuePreciso[0].splice(menorTermo,1);
        algo$QuePreciso[1].splice(menorTermo,1);

        if(algo$QuePreciso[1][0] == algo$QuePreciso[1][1]){
            for(let i = 0; i<2 ; i++){

                empateVer[algo$QuePreciso[0][i]].velocidadeVolta = (Math.random()*(empateVer[algo$QuePreciso[0][i]].velocidadeMaxima-empateVer[algo$QuePreciso[0][i]].velocidadeMinima)+empateVer[algo$QuePreciso[0][i]].velocidadeMinima)- (empateVer[algo$QuePreciso[0][i]].derrapagem)*1/100;
            }
            if(empateVer[algo$QuePreciso[0][0]].velocidadeVolta > empateVer[algo$QuePreciso[0][1]].velocidadeVolta){
                empateVer[algo$QuePreciso[0][0]].voltasVencidas++;
                empateVer[algo$QuePreciso[0][0]].placar = ['Primeiro Lugar', [algo$QuePreciso[0][0],algo$QuePreciso[1][0]] ];
                empateVer[algo$QuePreciso[0][1]].placar = ['Segundo Lugar' [algo$QuePreciso[0][1],algo$QuePreciso[1][1]] ];
                empateVer[algo$QuePrecisoCopia[0][menorTermo]].placar = ['Terceiro Lugar', [algo$QuePrecisoCopia[0][menorTermo],algo$QuePreciso[1][menorTermo]] ];
                var resultado = [algo$QuePreciso[0][0],algo$QuePreciso[0][1].algo$QuePrecisoCopia[0][menorTermo]];
                
            }
            else{
                empateVer[algo$QuePreciso[0][1]].voltasVencidas++;
                empateVer[algo$QuePreciso[0][0]].placar = ['Segundo Lugar', [algo$QuePreciso[0][0],algo$QuePreciso[1][0]] ];
                empateVer[algo$QuePreciso[0][1]].placar = ['Primeiro Lugar' [algo$QuePreciso[0][1],algo$QuePreciso[1][1]] ];
                empateVer[algo$QuePrecisoCopia[0][menorTermo]].placar = ['Terceiro Lugar', [algo$QuePrecisoCopia[0][menorTermo],algo$QuePreciso[1][menorTermo]] ];
                var resultado = [algo$QuePreciso[0][1],algo$QuePreciso[0][0].algo$QuePrecisoCopia[0][menorTermo]];
                
            }
            jogadores['Pedro'].exp +=  empateVer['Pedro'].placar[2];
            jogadores['Juca'].exp +=  empateVer['Juca'].placar[2];
            jogadores['Edna'].exp +=  empateVer['Edna'].placar[2]
        }
    }
    else {
        let vencedor = ['ninguem',0];
        for (let i in jogadores){
            if(empateVer[i].voltasVencidas > vencedor[1]){

                vencedor[0] = i;
                vencedor[1] = empateVer[i].voltasVencidas;
            }
        }
        let terceiroLugar = ['ninguem',-1];
        for (let i in jogadores){
            if(empateVer[i].voltasVencidas < vencedor[1]){

                terceiroLugar[0] = i;
                terceiroLugar[1] = empateVer[i].voltasVencidas;
            }
        }
        let segundoLugar = ['ninguem', -1];
        for(let i in jogadores){
            if((i !== terceiroLugar[0]) && (i !== primeiroLugar[0])) {

                segundoLugar[0] = i;
                segundoLugar[1] = empateVer[i].voltasVencidas;
            }
        }
        empateVer[vencedor[0]].placar = ['Primeiro Lugar',vencedor, dados$DeExp[tipo$DaCorrida].primeiroLugar];
        empateVer[segundoLugar[0]].placar = ['Segundo Lugar', segundoLugar, dados$DeExp[tipo$DaCorrida].segundoLugar];
        empateVer[terceiroLugar[0]].placar = ['Terceiro Lugar', terceiroLugar, dados$DeExp[tipo$DaCorrida].terceiroLugar];

        jogadores[0][1].exp +=  empateVer['Pedro'].placar[2];
        jogadores[1][1].exp +=  empateVer['Juca'].placar[2];
        jogadores[2][1].exp +=  empateVer['Edna'].placar[2];

        var resultado = [vencedor[0],segundoLugar[0],terceiroLugar[0]];
        
    }
    insirirHtml(resultado,empateVer);
}

function uparLeveis(){
    for(i in jogadores){

        jogadores[i].nivel += Math.floor(jogadores[i].exp/450);
    }
}

function inserir$CarroNaGaragem(jogador){
    let lista = ['Pedro','Juca','Edna'];

    let cardCarro = document.createElement('div');
    cardCarro.className = 'card';
    cardCarro.style.width = '100%';
    cardCarro.id= lista[jogador] + index$CarroDo[jogador];
    let img$OfCard = document.createElement('img');
    img$OfCard.src = 'Assets/carro.png';
    img$OfCard.style.borderRadius = '100%';
    let infoCard = document.createElement('div');
    infoCard.className = 'info';
    infoCard.id = 'info' + lista[jogador] + index$CarroDo[jogador];
    let nameOfCard = document.createElement('span');
    nameOfCard.innerHTML = 'Carro' + index$CarroDo[jogador];
    let velMax = document.createElement('span');
    velMax.innerHTML = 'Max:' + garagem[jogador]['Carro' + index$CarroDo[jogador] ].velocidadeMaxima;
    let velMin = document.createElement('span');
    velMin.innerHTML = 'Min:' + garagem[jogador]['Carro' + index$CarroDo[jogador] ].velocidadeMinima;
    let der = document.createElement('span');
    der.innerHTML = 'der:' + garagem[jogador]['Carro' + index$CarroDo[jogador] ].derrapagem;

    document.getElementById('C' + lista[jogador] + index$CarroDo[jogador]).appendChild(cardCarro);
    document.getElementById(lista[jogador] + index$CarroDo[jogador]).appendChild(img$OfCard);
    document.getElementById(lista[jogador] + index$CarroDo[jogador]).appendChild(infoCard);
    document.getElementById('info' + lista[jogador] + index$CarroDo[jogador]).appendChild(nameOfCard);
    document.getElementById('info' + lista[jogador] + index$CarroDo[jogador]).appendChild(velMax);
    document.getElementById('info' + lista[jogador] + index$CarroDo[jogador]).appendChild(velMin);
    document.getElementById('info' + lista[jogador] + index$CarroDo[jogador]).appendChild(der); 

}


function trocarPagina() {
    document.getElementById('pagina1').style.display = 'none' ;
    document.getElementById('pagina2').style.display = 'initial';
}