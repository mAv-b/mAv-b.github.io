
let dados = new Array();
let tipo = ['nome','data','valor','valor+juros'];
let dataOrig = new Date();
let num = 0;

let info = document.querySelectorAll('input');

function dados$DosFormularios() {
    num++;
    let objeto = new Object();
    for (let i = 0; i<3; i++){
        objeto[tipo[i]] = info[i].value;
    }

    for(let i = 0; i<3; i++){
        info[i].value = '';
    }

    console.log(objeto);
    return objeto;

}


function inserirCedula() {
    let objeto = dados$DosFormularios();

    let tabela = document.querySelector('table');
    
    let novaLinha = document.createElement('tr');
    tabela.appendChild(novaLinha);

    for(let i = 0; i<3; i++) {
        let clausula = document.createElement('td');
        clausula.innerHTML = objeto[tipo[i]]
        novaLinha.appendChild(clausula);
    }
    let jurosVazio = document.createElement('td');
    jurosVazio.className = 'jurosAqui';
    novaLinha.appendChild(jurosVazio);
    dados['item' + num] = objeto;
    console.log(dados)
}
let index = 0;

function chamarJuros() {
    console.log(dados);
    let arrMapping = new Array();
    let arrValores = new Array();
    for (let i in dados){
        let dataParts = dados[i].data.split('-');
        let data = new Date(dataParts[0] + '/' + dataParts[1] + '/' + dataParts[2]);
        arrMapping.push(data.getTime());

        arrValores.push(dados[i].valor);
    }
    let index = 0;
    console.log(arrMapping);
    let listJuros = arrMapping.map(x => {
        if(x < dataOrig.getTime()){
            index++;
            console.log(index);
            return parseFloat(arrValores[index-1]) + parseFloat(arrValores[index-1])*(2+0.1*((dataOrig.getTime()-x)/(3600*(10**3)*24)))/100;
        }
        else{
            index++;
            return arrValores[index];
        }
    })
    console.log(listJuros);
    let lista = document.querySelectorAll('.jurosAqui');
    let index2 = 0;
    for (let i in dados){
        lista[index2].innerHTML = 'R$' + listJuros[index2].toFixed(2);
        index2++;
    }
    }
    