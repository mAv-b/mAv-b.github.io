
let namesObj = ["Pedro","Juca","Edna"];
let propNames = ["velMin","velMax","der"];
let min = [[110,130],[125,145],[140,160]];
let max = [[180,200],[195,215],[210,230]];
let derra = [[3,4],[2,3],[1,1.75]];
let valuesObj = [min,max,derra];

let meuObjeto = {
    Pedro: {
        velMin: "",
        velMax: "",
        der: ""
    },
    Juca: {
        velMin: "",
        velMax: "",
        der: ""
    },
    Edna: {
        velMin: "",
        velMax: "",
        der: ""
    }
}

//===================================================

function determinaCarro() {
    for(var i = 0; i< namesObj.length; i++){
        for(var j = 0; j<3; j++){
            let n = Math.random();
            if (n < 0.6) {
                var escolha = 0;
            }
            else if (n < 0.95) {
                var escolha = 1;
            }
            else if (n < 1) {
                var escolha = 2;
            }
            meuObjeto[namesObj[i]][propNames[j]] = valuesObj[j][escolha];
        }
        
    }
    console.log(meuObjeto);



    var Pedro = [
        Math.random()*(meuObjeto['Pedro']['velMin'][1]-meuObjeto['Pedro']['velMin'][0])+meuObjeto['Pedro']['velMin'][0],
        Math.random()*(meuObjeto['Pedro']['velMax'][1]-meuObjeto['Pedro']['velMax'][0])+meuObjeto['Pedro']['velMax'][0],
        Math.random()*(meuObjeto['Pedro']['der'][1]-meuObjeto['Pedro']['der'][0])+meuObjeto['Pedro']['der'][0]
    ];
    var Juca = [
        Math.random()*(meuObjeto['Juca']['velMin'][1]-meuObjeto['Juca']['velMin'][0])+meuObjeto['Juca']['velMin'][0],
        Math.random()*(meuObjeto['Juca']['velMax'][1]-meuObjeto['Juca']['velMax'][0])+meuObjeto['Juca']['velMax'][0],
        Math.random()*(meuObjeto['Juca']['der'][1]-meuObjeto['Juca']['der'][1])+meuObjeto['Juca']['der'][0],
    ];
    var Edna = [
        Math.random()*(meuObjeto['Edna']['velMin'][1]-meuObjeto['Edna']['velMin'][0])+meuObjeto['Edna']['velMin'][0],
        Math.random()*(meuObjeto['Edna']['velMax'][1]-meuObjeto['Edna']['velMax'][0])+meuObjeto['Edna']['velMax'][0],
        Math.random()*(meuObjeto['Edna']['der'][1]-meuObjeto['Edna']['der'][0])+meuObjeto['Edna']['der'][0],
    ];


    console.log(Pedro);
    console.log(Juca);
    console.log(Edna);
    var PJE = [Pedro,Juca,Edna];

    return PJE;

}

// let listaJogadores = [Pedro, Juca, Edna];
// let dados = listaJogadores.slice();
// let placarRodadaJogador = [0,0,0];
let listaNames = ["Pedro", "Juca", "Edna"];

function modoRapido() {

    var pje = determinaCarro();

    var listaJogadores = [pje[0], pje[1], pje[2]];
    var dados = listaJogadores.slice();
    var placarRodadaJogador = [0,0,0];
    // var listaNames = ["Pedro", "Juca", "Edna"];

    let outros = [listaJogadores,dados, placarRodadaJogador];

    placarRodadaJogador[0] = 0;
    placarRodadaJogador[1] = 0;
    placarRodadaJogador[2] = 0;

    for (var numeroVolta = 0; numeroVolta < 10; numeroVolta++) {
        for (var turnoJogador = 0; turnoJogador < listaJogadores.length; turnoJogador++ ) {

            listaJogadores[turnoJogador] = (Math.random()*(dados[turnoJogador][1]-dados[turnoJogador][0]) + dados[turnoJogador][0]);
            
            listaJogadores[turnoJogador] -= listaJogadores[turnoJogador]*(dados[turnoJogador][2]/100);
           

        }
        let vencedor = Math.max(listaJogadores[0],listaJogadores[1],listaJogadores[2]);

        // console.log(listaJogadores);

        

        if (vencedor == listaJogadores[0]) {placarRodadaJogador[0]++;}
        else if (vencedor == listaJogadores[1]) {placarRodadaJogador[1]++;}
        else if (vencedor == listaJogadores[2]) {placarRodadaJogador[2]++;}
        else {console.log('Error1');}
    }
    // console.log(placarRodadaJogador);
    return outros;
}


 function modoMedio() {
    
    var pje = determinaCarro();

    let listaJogadores = [pje[0], pje[1], pje[2]];
    let dados = listaJogadores.slice();
    let placarRodadaJogador = [0,0,0];
    // let listaNames = ["Pedro", "Juca", "Edna"];

    let outros = [listaJogadores,dados, placarRodadaJogador];

    placarRodadaJogador[0] = 0;
    placarRodadaJogador[1] = 0;
    placarRodadaJogador[2] = 0;

    for (var numeroVolta = 0; numeroVolta < 70; numeroVolta++) {
        for (var turnoJogado = 0; turnoJogado < listaJogadores.length; turnoJogado++) {
            listaJogadores[turnoJogado] = Math.random()*(dados[turnoJogado][1]-dados[turnoJogado][0]) + dados[turnoJogado][0];

            listaJogadores[turnoJogado] -= listaJogadores[turnoJogado]*(dados[turnoJogado][2]/100);
        }
        let vencedor = Math.max(listaJogadores[0],listaJogadores[1],listaJogadores[2]);

        // console.log(listaJogadores);

        
        
        if (vencedor == listaJogadores[0]) {placarRodadaJogador[0]++;}
        else if (vencedor == listaJogadores[1]) {placarRodadaJogador[1]++;}
        else if (vencedor == listaJogadores[2]) {placarRodadaJogador[2]++;}
        else {console.log('Error1');}

    }
    // console.log(placarRodadaJogador);
    return outros;
 }

function modoGrande() {

    var pje = determinaCarro();

    let listaJogadores = [pje[0], pje[1], pje[2]];
    let dados = listaJogadores.slice();
    let placarRodadaJogador = [0,0,0];
    // let listaNames = ["Pedro", "Juca", "Edna"];

    let outros = [listaJogadores,dados, placarRodadaJogador];
    
    placarRodadaJogador[0] = 0;
    placarRodadaJogador[1] = 0;
    placarRodadaJogador[2] = 0;

    for (var numeroVolta = 0; numeroVolta < 160; numeroVolta++) {
        for (var turnoJogado = 0; turnoJogado < listaJogadores.length; turnoJogado++) {
            listaJogadores[turnoJogado] = Math.random()*(dados[turnoJogado][1]-dados[turnoJogado][0]) + dados[turnoJogado][0];

            listaJogadores[turnoJogado] -= listaJogadores[turnoJogado]*(dados[turnoJogado][2]/100);
        }
        let vencedor = Math.max(listaJogadores[0],listaJogadores[1],listaJogadores[2]);

        // console.log(listaJogadores);

        
        
        if (vencedor == listaJogadores[0]) {placarRodadaJogador[0]++;}
        else if (vencedor == listaJogadores[1]) {placarRodadaJogador[1]++;}
        else if (vencedor == listaJogadores[2]) {placarRodadaJogador[2]++;}
        else {console.log('Error1');}

    }
    console.log(placarRodadaJogador);

    return outros;
}


function insirirHtml(Outros) {
    
    var listaJogadores = Outros[0];
    var dados = Outros[1];
    var placarRodadaJogador = Outros[2];

    let sortPlacar = placarRodadaJogador.slice();
    sortPlacar.sort();
    var segundoLugar = placarRodadaJogador.indexOf(sortPlacar[1]);
    let primeiroLugar = placarRodadaJogador.indexOf(sortPlacar[2]);
    var terceiroLugarValor = placarRodadaJogador.indexOf(sortPlacar[0]);

    if (segundoLugar == terceiroLugarValor) {
        var terceiroLugarValor = placarRodadaJogador.indexOf(sortPlacar[0],segundoLugar + 1 );
    }

    // console.log(sortPlacar);
    // console.log(segundoLugar);
    // console.log(terceiroLugarValor);
    // console.log(placarRodadaJogador);
   
    

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
    ranking[0].innerHTML = listaNames[primeiroLugar];
    ranking[1].innerHTML = listaNames[segundoLugar]
    ranking[2].innerHTML = listaNames[terceiroLugarValor];


}



function empateVerificador(tipoDaCorida){
    let functionsList = [modoRapido , modoMedio, modoGrande];
    var Outros = functionsList[tipoDaCorida]();

    var listaJogadores = Outros[0];
    var dados = Outros[1];
    var placarRodadaJogador = Outros[2];

    if ((placarRodadaJogador[0] == placarRodadaJogador[1]) || (placarRodadaJogador[1] == placarRodadaJogador[2]) || (placarRodadaJogador[0] == placarRodadaJogador[2])) {

        let descartaMinimo = placarRodadaJogador.indexOf(Math.min(placarRodadaJogador[0],placarRodadaJogador[1],placarRodadaJogador[2]));

        let newPlacarJogador = placarRodadaJogador.slice();
        newPlacarJogador.splice(descartaMinimo,1);
        // console.log(descartaMinimo);
        // console.log(newPlacarJogador);

        if (newPlacarJogador[0] == newPlacarJogador[1]) {
            for (var turnoJogado = 0; turnoJogado < newPlacarJogador.length; turnoJogado++) {

                newPlacarJogador[turnoJogado] = Math.random()*(dados[turnoJogado][1]-dados[turnoJogado][0]) + dados[turnoJogado][0];

                newPlacarJogador[turnoJogado] -= newPlacarJogador[turnoJogado]*(dados[turnoJogado][2]/100)
            }
            vencedor = newPlacarJogador.indexOf(Math.max(newPlacarJogador[0],newPlacarJogador[1]));

             if (descartaMinimo == 0) {
                placarRodadaJogador[vencedor+1]++;
            }
            else if (descartaMinimo == 2) {
                placarRodadaJogador[vencedor]++;
            }
            else if (descartaMinimo == 1) {
                if (vencedor == 0) {
                    placarRodadaJogador[vencedor]++;
                }
                else if (vencedor == 1){
                    placarRodadaJogador[vencedor+1]++;
                }
            }
            // console.log(newPlacarJogador);
            // console.log(vencedor);
        }
    }

    
    

    insirirHtml(Outros);

}






