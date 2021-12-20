
let dados = new Array();
let tipo = ['nome', 'data', 'valor', 'juros'];
let dataOrig = new Date();
let index = 0;
let num = 0;

let info = document.querySelectorAll('input');

function dados$DosFormularios() {
    num++;
    let objeto = new Object();
    for (let i = 0; i < 3; i++) {
        objeto[tipo[i]] = info[i].value;
    }

    for (let i = 0; i < 3; i++) {
        info[i].value = '';
    }

    return objeto;

}


function inserirCedula() {    
    let objeto = dados$DosFormularios();

    let tabela = document.querySelector('table');

    let novaLinha = document.createElement('tr');
    novaLinha.className = 'removivel';
    tabela.appendChild(novaLinha);

    for (let i = 0; i < 3; i++) {
        let clausula = document.createElement('td');
        clausula.innerHTML = objeto[tipo[i]]
        novaLinha.appendChild(clausula);
    }
    let jurosVazio = document.createElement('td');
    jurosVazio.className = 'jurosAqui';
    novaLinha.appendChild(jurosVazio);
    dados.push(objeto);
}


function chamarJuros() {

    let arrMapping = new Array();
    let arrValores = new Array();
    for (let i in dados) {
        let dataParts = dados[i].data.split('-');
        let data = new Date(dataParts[0] + '/' + dataParts[1] + '/' + dataParts[2]);
        arrMapping.push(data.getTime());

        arrValores.push(dados[i].valor);
    }
    let index = 0;
    let listJuros = arrMapping.map(x => {
        if (x < dataOrig.getTime()) {
            index++;
            return parseFloat(arrValores[index - 1]) + parseFloat(arrValores[index - 1]) * (2 + 0.1 * ((dataOrig.getTime() - x) / (3600 * (10 ** 3) * 24))) / 100;
        }
        else {
            index++;
            return parseFloat(arrValores[index - 1]);
        }
    })
    let lista = document.querySelectorAll('.jurosAqui');
    let index2 = 0;
    //normalmente numeros em strings podem ser tratados como numeros, ou floats, mas note que quando voce esta usando uma string de um numero e não de um float, vai dar erro. Pois o codigo ira interpretar que a string é um numero e ira executar uma funçao p/float, normalmente daria certo, pois o interpretador iria considerar o numero como o float, mas como o interpretador ja teve que interpretar a string como numero, não deu pra interpretar num como float
    for (let i in dados) {
        lista[index2].innerHTML = 'R$' + parseFloat(listJuros[index2]).toFixed(2);
        dados[i]['juros'] = parseFloat(listJuros[index2]).toFixed(2);
        index2++;
    }
}

function ordenarNome() {
    let dicionario = new Set();
    let arr = dados.slice();
    let arrOrg = [];

    for (let i in arr) {
        dicionario.add(arr[i].nome);
    }
    let dic = dicionario.values();
    let listDic = [];
    for (let i = 0; i < dicionario.size; i++) {
        listDic.push(dic.next().value);
    }
    let index = 0;

    for (let index = 0; index < dicionario.size; index++) {
        let termo = arr.reduce((total, atual) => {
    
            if (atual.nome == listDic[index]) {
                if (!Array.isArray(total.data)) {
                    if (total.nome !== listDic[index]) {
                        total = { nome: atual.nome, data: [], valor: [], juros: [] }
                    }
                    else { total = { nome: total.nome, data: [total.data], valor: [total.valor], juros: [total.juros] } }
                }

                console.log('1');
                total.data.push(atual.data);
                total.valor.push(atual.valor);
                total.juros.push(atual.juros);
                return total;
            }
            else {
                return total;
            }
        })
        arrOrg.push(termo);
    }
    // if(arr.length == 1){
    //     console.log('o primeiro foi')
    //     arrOrg[0].data = [arrOrg[0].data];
    //     arrOrg[0].valor = [arrOrg[0].valor];
    //     arrOrg[0].juros = [arrOrg[0].juros];
    // }
    if( (!Array.isArray(arrOrg[0].valor)) ){
        arrOrg[0].data = [arrOrg[0].data];
        arrOrg[0].valor = [arrOrg[0].valor];
        arrOrg[0].juros = [arrOrg[0].juros];
    }
    showPart2(arrOrg, 0);
}

function ordenarVencimento() {
    let dicionario = new Set();
    let arr =  dados.slice();
    let arrOrg = [];
   

    for (let i in arr){
        dicionario.add(arr[i].data);
    }
    let dic = dicionario.values();
    let listDic = [];
    for (let i = 0; i < dicionario.size; i++ ){
        listDic.push(dic.next().value);
    }
    let index = 0;
    
    for (let index = 0 ; index < dicionario.size ; index++){
        let termo = arr.reduce( (total,atual) => {

            if (atual.data == listDic[index]){
                if(!Array.isArray(total.nome)) {
                    if (total.data !== listDic[index]) {
                        total = { nome: [], data: atual.data, valor : [], juros: []}
                    }
                    else {total = {nome: [total.nome], data: total.data, valor: [total.valor], juros: [total.juros] } }
                }

                total.nome.push(atual.nome);
                total.valor.push(atual.valor);
                total.juros.push(atual.juros);
                return total;
            }
            else{
                return total;
            }
        })
        arrOrg.push(termo);
    }
    // if(arr.length == 1){
    //     arrOrg[0].nome = [arrOrg[0].nome];
    //     arrOrg[0].valor = [arrOrg[0].valor];
    //     arrOrg[0].juros = [arrOrg[0].juros];
    // }
    if(!Array.isArray(arrOrg[0].valor)){
        arrOrg[0].nome = [arrOrg[0].nome];
        arrOrg[0].valor = [arrOrg[0].valor];
        arrOrg[0].juros = [arrOrg[0].juros];
    }
    showPart2(arrOrg, 1);
}


function showPart2(lista, tipo) {
    let option = ['nome','data'];
    let option2 = ['data','nome'];
    let part2 = document.getElementById('part2');
    part2.style.display = 'block';
    num = 1;
    let indicador = 0;
    for(let i of lista){
        let item = document.createElement('li');
        item.id = 'pasta' + num;
        item.innerHTML = '*' + i[option[tipo]];

        let itemContent = document.createElement('div');
        itemContent.className = 'infoPart2';

        let itemContentOne = document.createElement('p');
        itemContentOne.innerHTML = option2[tipo] + ': ';
        let itemContentTwo = document.createElement('p');
        itemContentTwo.innerHTML = 'Valores: ';
        let itemContentThree = document.createElement('p');
        itemContentThree.innerHTML = 'Juros: ';
        

        for (let index = 0; index < lista[indicador].valor.length; index++ ){

            itemContentOne.innerHTML += lista[indicador][option2[tipo]][index] + '/ ';
            itemContentTwo.innerHTML += lista[indicador].valor[index] + '/ ';
            itemContentThree.innerHTML += lista[indicador].juros[index] + '/ ';
        }
        
        let total = document.createElement('p');

        
        let soma = i.juros.reduce( (total,atual) => parseFloat(total)+parseFloat(atual) );
        total.innerHTML = 'Total: ' + parseFloat(soma).toFixed(2);

        indicador++;
        num++;
        part2.appendChild(item);
        part2.appendChild(itemContent);
        itemContent.appendChild(itemContentOne);
        itemContent.appendChild(itemContentTwo);
        itemContent.appendChild(itemContentThree);
        itemContent.appendChild(total);
    }
}

function filtrar() {
    let elementosFiltro = document.querySelectorAll('.filtros');
    let arrFiltro = dados.slice();
    let arr = [];
    console.log(arrFiltro);
    
    if (elementosFiltro[0].value !== ''){
        let dataPartsMinima = elementosFiltro[0].value.split('-');
        let dataMinima = new Date(dataPartsMinima[0] + '/' + dataPartsMinima[1] + '/' + dataPartsMinima[2]);
        let arrFiltrado = arrFiltro.filter(elementos => {
            let dataParts2 = elementos.data.split('-');
            let data2 = new Date(dataParts2[0] + '/' + dataParts2[1] + '/' + dataParts2[2]);
            
            return data2.getTime() > dataMinima.getTime();
                
        })
        arrFiltro = arrFiltrado;
    }
    console.log(arrFiltro);

    if (elementosFiltro[1].value !== ''){
        let dataPartsMaxima = elementosFiltro[1].value.split('-');
        let dataMaxima = new Date(dataPartsMaxima[0] + '/' + dataPartsMaxima[1] + '/' + dataPartsMaxima[2]);
        let arrFiltrado = arrFiltro.filter(elementos => {
            let dataParts3 = elementos.data.split('-');
            data3 = new Date( dataParts3[0] + '/' + dataParts3[1] + '/' + dataParts3[2] );
            return data3.getTime() < dataMaxima.getTime();
        })
        arrFiltro = arrFiltrado;
    }
    console.log(arrFiltro);

    if (elementosFiltro[2].value !==''){
        let valorMinimo = elementosFiltro[2].value;
        let arrFiltrado = arrFiltro.filter(elementos => {
            let valor = elementos.valor;
            return parseFloat(valor) > parseFloat(valorMinimo);
        })
        arrFiltro = arrFiltrado;
    }
    console.log(arrFiltro);
    
    if (elementosFiltro[3].value !== ''){
        let valorMaximo = elementosFiltro[3].value;
        let arrFiltrado = arrFiltro.filter(elementos => {
            let valor = elementos.valor;
            console.log(parseFloat(valor));
            console.log(parseFloat(valorMaximo));
            return parseFloat(valor) < parseFloat(valorMaximo);
        })
        arrFiltro = arrFiltrado;
    }
    console.log(arrFiltro);

    let linhas = document.querySelectorAll('.removivel');
    for (let i of linhas){
        i.remove();
    }

    
    let novaLinha = document.createElement('tr');
    novaLinha.className = 'removivel';
    tabela.appendChild(novaLinha);

    for(let j = 0; j < arrFiltro.length; j++){
        for (let i = 0; i <= 3; i++) {
            let clausula = document.createElement('td');
            clausula.innerHTML = arrFiltro[j][tipo[i]];
            novaLinha.appendChild(clausula);
        }
    }
}