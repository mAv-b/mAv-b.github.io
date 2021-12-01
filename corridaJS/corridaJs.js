let Pedro = [150,230,3];
let Juca = [120,260,5];
let Edna = [180,220,1];
let listaJogadores = [Pedro, Juca, Edna];
let dados = listaJogadores.slice();
let placarRodadaJogador = [0,0,0];
let listaNames = ["Pedro", "Juca", "Edna"];


function modoRapido() {

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
    console.log(placarRodadaJogador);
    
}


 function modoMedio() {
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
    console.log(placarRodadaJogador);

 }

function modoGrande() {

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

}


function insirirHtml() {

    let primeiroLugar = placarRodadaJogador.indexOf(Math.max(placarRodadaJogador[0],placarRodadaJogador[1],placarRodadaJogador[2]));
    console.log(placarRodadaJogador);
    
     let terceiroLugarValor = placarRodadaJogador.indexOf(Math.min(placarRodadaJogador[0],placarRodadaJogador[1],placarRodadaJogador[2]));
    console.log(terceiroLugarValor);

    if ((primeiroLugar == 1) && (terceiroLugarValor == 2)) {
        var segundoLugar = 0;
    }
    else if ((primeiroLugar == 0) && (terceiroLugarValor == 1)) {
        var segundoLugar = 2;
    }
    else if ((primeiroLugar == 0) && (terceiroLugarValor == 2)) {
        var segundoLugar = 1;
    }
    

    
    console.log(segundoLugar);
   
    

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
    functionsList[tipoDaCorida]();

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

    
    

    insirirHtml();

}






