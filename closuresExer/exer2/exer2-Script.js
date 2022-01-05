const fontSizingChange = (function (){
    let zoomFont = 1;
    return (function(option$size) {
        if(option$size == 'aumentar'){
            zoomFont+= zoomFont/5;
        }
        else if(option$size == 'diminuir'){
            zoomFont-= zoomFont/5;
        }
        document.getElementById('preElement').style.fontSize = zoomFont + 'rem';
    });
})();



function conto(numberId){
    console.log(1);
    let listaContos = [
        {
            titulo :  'O rei Barba de Tordo',
            texto : `Houve, uma vez, um rei que tinha uma filha extraordinariamente linda, mas tão soberba e orgulhosa que pretendente algum lhe parecia digno dela; repelia-os todos, um após outro e, ainda por cima, fazia troça deles.
            Certo dia, o rei organizou uma grande festa e convidou, das regiões vizinhas e distantes, todos os homens que desejassem casar. Foram colocados todos em fila, de acordo com as próprias categorias e nobreza: primeiro os reis, depois os duques, os príncipes, os condes, os barões e, por fim, os simples fidalgos. Em seguida, fizeram a princesa passar em revista a fila dos candidatos mas ela criticou um por um, em todos encontrando defeitos; um era muito gordo: - Que pipa! - dizia; o outro muito comprido: - Comprido e fino não dá destino! - o terceiro era muito pequeno: - Gordo e baixo graça não acho; - o quarto era pálido: - A morte pálida! - O quinto multo corado: - Peru de roda: - o sexto não era muito direito: - lenha verde secada atrás do forno; - e assim por diante. Punha defeitos em todos mas, especialmente, visou e divertiu-se a troçar de um bom rei que estava na primeira fila, o qual tinha o queixo um tanto recurvo.
            - Oh, - exclamou, rindo-se abertamente, - esse tem o queixo igual ao bico de um tordo.
            E daí por diante, o pobre rei ficou com o apelido de Barba de Tordo. Mas o velho rei, ao ver a filha caçoar do próximo e desprezar todos os pretendentes lá reunidos, encolerizou-se violentamente; e jurou que a obrigaria a casar-se com o primeiro mendigo que aparecesse à sua porta.
            Decorridos alguns dias, um músico-ambulante parou sob a janela, cantando para ganhar uma esmola. Ouvindo-o, o rei disse:
            - Mandai-o entrar.
            O músico-ambulante entrou, vestido de andrajos imundos; cantou na presença do rei e da filha e, quando terminou, pediu-lhes uma esmolinha. O rei disse-lhe:
            - Tua canção agradou-me tanto que vou dar-te minha filha em casamento.
            A princesa ficou horrorizada, mas o rei disse:
            - Jurei que te daria ao primeiro mendigo que aparecesse e cumprirei meu juramento.
            De nada valeram os protestos e as lágrimas. Foram chamar o padre e ela teve de casar-se com o musico. Depois do casamento, o rei disse-lhe:
            - Não é lógico que a mulher de um mendigo fique morando no palácio real; portanto, deves seguir teu marido.
            O mendigo saiu levando-a pela mão, e, assim, ela teve de caminhar a pé, ao lado dele. Chegaram a uma grande floresta e então ela perguntou:
            - A quem pertence esta bela floresta?
            Pertence ao rei Barba de Tordo;
            Se o tivesses querido, pertenceria a ti.
            Ah! como fui tola, meu bem,
            Porque não quis ao Rei
            Que a Barba de Tordo tem!
            Depois atravessaram um belo prado verde jante e ela novamente perguntou:
            - A quem pertence este belo prado?
            Pertence ao rei Barba de Tordo;
            Se o tivesses querido, pertenceria a ti.
            Ah! como fui tola, meu bem,
            Porque não quis ao Rei
            Que a Barba de Tordo tem!
            Mais tarde chegaram a uma grande cidade e ela perguntou mais uma vez:
            - A quem pertence esta grande e bela cidade?
            Pertence ao Rei Barba de Tordo;
            Se o tivesses querido, pertenceria a ti.
            Ah! como fui tola, meu bem,
            Porque não quis ao Rei
            Que a Barba de Tordo tem!
            
            O músico-ambulante, então, disse:
            - Não me agrada nada ouvir lamentares-te por não teres outro marido: achas que não sou digno de ti?
            Finalmente chegaram a uma pobre casinha pequenina e ela disse:
            - Ah! meu Deus. que casinha pequenina
            A quem pertence a pobrezinha?
            O músico respondeu:
            - É a minha casa e a tua; aqui residiremos juntos.
            A porta era tão baixa que, para entrar, a princesa teve de curvar-se.
            - Onde estão os criados? - perguntou ela.
            - Qual o que criados! - respondeu o mendigo; - o que há a fazer deves fazê-lo tu mesma. Acende logo o fogo e põe água a ferver para preparar a ceia! Eu estou muito cansado e quase morto de fome.
            Mas a princesa não sabia acender o fogo, e nem serviço algum de cozinha, e o mendigo teve de ajudá-la se queria ter algo para comer. Tenho engolido a mísera comida, foram deitar-se; na manhã seguinte, logo cedo, ele tirou-a da cama para que arrumasse a casa. E assim viveram, pobre e honestamente, diversos dias até se consumir a provisão que tinham. Então, o marido disse:
            - Mulher, não podemos continuar assim, comendo sem ganhar. Tu deves tecer cestos.
            Saiu a cortar juncos e trouxe-os para casa; ela pôs- se a tecê-los, mas os juncos muito duros feriam-lhe as mãos delicadas.
            - Vejo que isso não vai, - disse o homem, - é melhor que fies! Talvez consigas fazer algo.
            Ela sentou-se e tentou fiar, mas o fio duro cortou-lhe logo os dedos finos até escorrer sangue.
            - Vês, - disse o marido, - não sabes fazer coisa alguma; contigo fiz mau negócio. Vou tentar o comércio de panelas e potes de barro: tu poderás vendê-los no mercado.
            "Ah! - pensou ela, - se vier ao mercado alguém do reino de meu pai e me vir sentada lá a vender panelas, como irá escarnecer de mim!"
            Mas não tinha remédio, ela foi obrigada a ir, se não quisesse morrer de fome. Da primeira vez, tudo correu bem; porque era muito bonita, a gente que ia ao mercado comprava prazerosa a mercadoria e pagava o que exigia; muitos, aliás, davam-lhe o dinheiro e não levavam objeto algum. Com o lucro obtido, viveram até que se acabou, depois o homem adquiriu novo estoque de pratos; ela foi ao mercado, sentou-se num canto e expôs a mercadoria. De repente, porém, chegou desenfreadamente um soldado bêbado, atirando o cavalo no meio da louça e quebrando tudo em mil pedaços. Ela desatou a chorar e na sua aflição não sabia o que fazer.
            - Ah, que será de mim! - exclamava entre lágrimas; - que dirá meu marido?
            Correu para casa e contou-lhe o sucedido.
            - Mas, quem é que vai sentar-se no canto do mercado com louça de barro! - disse ele. - Deixa de choro, pois já vi que não serves para nada. Por isso estive no castelo do nosso rei e perguntei se não precisavam de uma criada para a cozinha; prometeram-me aceitar-te; em troca terás a comida.
            Assim a princesa tornou-se criada de cozinha; era obrigada a ajudar o cozinheiro e a fazer todo o trabalho mais rude. Em cada bolso, trazia uma panelinha para levar os restos de comida para casa e era com o que viviam.
            Ora, deu-se o caso que iam celebrar as bodas do filho primogênito do rei; a pobre mulher subiu pela escadaria e foi até a porta do salão para ver o casamento. Quando se acenderam as luzes e foram introduzidos os convidados, um era mais bonito que o outro; em meio a tanto luxo e esplendor ela pensava, tristemente, no seu destino e amaldiçoava a soberba e a arrogância que a haviam humilhado e lançado naquela miséria.
            De quando em quando os criados atiravam-lhe alguma migalha daqueles acepipes que iam levando de um lado para outro, e cujo perfume chegava às suas narinas; ela apanhava-as, guardava-as nas panelinhas a fim de levá-las para casa. De repente, entrou o príncipe, todo vestido de seda e veludo, com lindas cadeias de ouro em volta do pescoço. Quando viu a linda mulher aí parada na porta, pegou-lhe a mão querendo dançar com ela; mas ela recusou espantada, pois reconhecera nele o rei Barba de Tordo, o pretendente que havia repelido e escarnecido. Mas sua recusa foi inútil, ele atraiu-a para dentro da sala; nisso rompeu-se o cordel que prendia os bolsos e caíram todas as panelinhas, esparramando- se a sopa e os restos de comida pelo chão. A vista disso, caíram todos na gargalhada, zombando dela; ela sentiu tal vergonha que desejou estar a mil léguas de distância. Saiu correndo para a porta, tentando fugir daí, mas um homem alcançou-a na escadaria e fê-la voltar, novamente, para a sala. Ela olhou para ele e viu que era sempre o rei Barba de Tordo, o qual, gentilmente, lhe disse:
            - Nada temas, eu e o músico-ambulante que morava contigo no pequeno casebre, somos a mesma pessoa.
            Por amor a ti disfarcei-me assim, e sou, também, o soldado que quebrou a tua louça. Tudo isto sucedeu com o fim de dobrar o teu orgulho e punir a arrogância com que me desprezaste.
            Chorando, amargamente, ela disse:
            - Eu fui injusta e má, portanto não sou digna de ser sua esposa.
            Mas ele respondeu:
            - Consola-te, os maus dias já acabaram; agora vamos celebrar as nossas núpcias!
            Vieram, então, as camareiras e vestiram-na com os mais preciosos trajes; depois chegou o pai com toda a corte, a fim de apresentar-lhe congratulações pelo casamento com o rei Barba de Tordo e, só então, começou a verdadeira festa.
            - Ah! como gostaria de ter estado lá contigo nessas bodas!`
        },
        {
            titulo : 'Rumpelstilzinho',
            texto : `Houve, uma vez, um moleiro que era muito pobre e tinha uma filha muito bonita. Certa vez, aconteceu-lhe falar com o rei e, para dar-se importância, disse-lhe:
            - Eu tenho uma filha capaz de fiar e transformar em ouro a simples palha.
            O rei, arregalando os olhos, pensou consigo mesmo: "Esse é um negócio excelente para mim!," pois ele era um poço de ambição o nada lhe chegava. Então, disse ao moleiro:
            - Se tua filha é na realidade tão engenhosa como dizes, traze-a amanhã ao palácio; quero submetê-la a uma prova.
            No dia seguinte, a moça foi apresentada ao rei, o qual a conduziu a uma sala cheia de palha até ao forro, tendo lá uma roca de fiar num canto.
            - Senta-te aí ao pé dessa roca de fiar, - disse o rei; - já que sabes transformar a palha em ouro, põe-te a trabalhar e, se até amanhã cedo não me tiveres produzido todo esse ouro, serás condenada à morte.
            Trancou a sala e foi-se embora sem mais uma palavra. A pobrezinha ficou só, na maior aflição deste mundo, pois nunca imaginara que se pudesse transformar palha em ouro e, sua aflição aumentando cada vez mais, pôs-se a chorar desconsoladamente. Nisso a porta rangeu e apareceu um gnomo muito lampeiro, dizendo:
            - Boa noite, linda moleira; por quê estás chorando assim?
            - Ai de mim, - soluçou ela; - o rei mandou-me transformar toda esta palha em ouro e eu não sei fazê-lo.
            - Hum! - disse o gnomo sorrindo brejeiro; - que me dás se eu fiar tudo como o rei deseja?
            - Oh, meu amiguinho, - respondeu ela; - dou-te o meu colar.
            O gnomo tomou o colar, examinou-o detidamente, guardou-o no bolso e, em seguida, sentou-se à roca: frr, frr, frr, fazia a roda, que girou três vezes, enchendo o fuso de fios de ouro. Fez girar mais três vezes: frr, frr, frr, e este outro fuso também logo ficou cheio; e assim trabalhou até que, pela madrugada, tinha desaparecido a palha, só ficando os fusos cheios de fios de ouro.
            Quando, ao nascer do sol, o rei foi à sala ver se suas ordens haviam sido cumpridas, ficou extasiado ao ver todo aquele ouro. Mas não se contentou, de coração ávido e ambicioso, desejou possuir ainda mais. Levou a moça para outra sala, ainda maior, que estava cheia de palha até ao teto e tornou a ordenar-lhe que fiasse aquilo tudo durante a noite, se tinha amor à vida.
            A pobre moça não sabia para que santo apelar e desatou outra vez num choro amargurado; mas eis que novamente a porta rangeu e o gnomo tornou a aparecer, perguntando:
            - Mais palha para fiar? Que me dás agora se eu fizer o mesmo trabalho de ontem?
            - Dou-te este anel que trago no dedo, - disse ela, apresentando-lhe o anel.
            O gnomo tomou o anel, examinou bem e depois recomeçou o zumbido da roda; ao raiar do dia, toda aquela palha estava transformada em fios de ouro puro e brilhante.
            O rei, muito cedo, foi ver o trabalho e exultou de alegria vendo aquela pilha de ouro. Sua ambição, porém, era desmedida; levou a moça para uma terceira sala, maior que as outras, tão cheia de palha que só ficara um cantinho para a roca de fiar.
            - Aí tens a palha que deves fiar durante esta noite; se o conseguires, casar-me-ei contigo. - "Embora seja filha de um simples moleiro, - pensava consigo mesmo o rei, - uma esposa mais rica não encontrarei no mundo todo!"
            Assim que ficou só, a moça esperou que aparecesse o gnomo; este não tardou.
            - Hum! Temos mais serviço hoje? O que me dás se eu te fiar toda esta palha?
            - Nada mais possuo, - disse ela tristemente; - já te dei tudo quanto tinha comigo.
            - Nesse caso, promete-me que me darás teu primeiro filho quando fores rainha.
            A moça pensou: "Quem sabe lá se me tornarei rainha algum dia!" E, para sair-se daquele apuro, prometeu ao gnomo tudo o que ele quis. No mesmo instante, o gnomo se pôs a fiar e, em pouco tempo, transformou toda a palha em ouro.
            Quando pela manhã bem cedo o rei chegou e viu tudo executado conforme seu desejo, ficou radiante de alegria e, cumprindo o que prometera, casou-se com a filha do moleiro, que assim se tornou rainha.
            Decorrido um ano, a rainha teve um filho lindo como os amores; estava tão feliz que já não se lembrava da promessa feita ao gnomo; mas este não se esquecera, entrou no quarto da rainha e disse-lhe:
            - Por três vezes ajudei-te! Agora dá-me o que me prometeste.
            A rainha ficou apavorada e ofereceu-lhe todas as riquezas do reino para que lhe deixasse aquele amor de criança; mas o gnomo, implacável disse:,
            - Não, não. Prefiro uma criaturinha viva a todos os tesouros do mundo.
            Então a rainha desatou a chorar e a lastimar-se de causar dó. O gnomo, condoído de sua grande dor, disse-lhe:
            - Está bem! Concedo-te três dias de prazo; se antes de vencer este prazo conseguires adivinhar meu nome, poderás ficar com a criança.
            A rainha encheu-se de esperança; passou a noite inteira pensando em todos os nomes que conhecia ou que ouvira mencionar; além disso, expediu vários mensageiros que percorressem o reino todo e perguntassem os nomes de quantos existiam.
            No dia seguinte, o gnomo apareceu e ela foi dizendo os nomes que sabia, a começar por Gaspar, Melchior, Baltazar, Benjamim, Jeremias e todos os que lhe ocorria no momento, mas a cada um, o gnomo exclamava:
            - Não. Não é esse o meu nome.
            No segundo dia, a rainha mandou perguntar o nome de todos os cidadãos das circunvizinhanças e repetiu ao gnomo os nomes mais incomuns e extravagantes.
            - Chamas-te, acaso, Leite-de-Galinha, Costela-de- Carneiro, Unha-de-boi ou Osso-de-baleia?
            Mas a resposta do gnomo não variava:
            - Não. Não é esse o meu nome.
            No terceiro dia, chegou o mensageiro e disse-lhe:
            Percorri todo o reino e não descobri nenhum nome novo. Mas, passando ao pé de uma montanha, justamente na curva onde a raposa e a lebre se dizem boa-noite, avistei uma casinha muito pequenina; diante da casinha havia uma fogueira em volta da qual estava um gnomo muito grotesco a dançar e pular com uma perna só. Estava cantando:
            - Hoje faço o pão, amanhã a cerveja;
            a melhor é minha.
            Depois de amanhã ganho o filho da rainha.
            Que bom que ninguém sabe direitinho
            que meu nome é Rumpelstilzinho!
            Podeis bem imaginar a alegria da rainha ao ouvir essa história; decorou-a e quando, pouco depois, a porta rangeu e apareceu o gnomo a perguntar:
            - Então, minha Rainha, já descobriste o meu nome?
            A rainha para disfarçar, começou por dizer:
            - Chamas-te Conrado?
            - Não.
            - Chamas-te Henrique?
            - Não.
            - Não te chamas, por acaso, Rumpelstilzinho?
            Ao ouvir seu nome, o gnomo ficou assombrado; depois teve um acesso de cólera e berrou:
            - Foi o diabo quem te contou; foi o diabo quem te contou!
            E bateu o pé no chão com tanta força que rompeu o assoalho e afundou até à cintura. Ele, então, desesperado, agarrou o pé esquerdo com as duas mãos e puxou tanto que acabou rasgando-se ao meio.
            Desde esse dia, a rainha viveu tranquilamente com o seu filhinho.`
        },
        {
            titulo : 'O lobo e a raposa',
            texto : `Houve, uma vez, um lôbo que tinha em sua companhia a raposa; e a coitada da raposa tinha de fazer tudo o que êle queria, pois era mais fraca; por isso, ficaria muito alegre se pudesse livrar-se de tal patrão. Certo dia, em que estavam atravessando a floresta, o lôbo disse-lhe:
            - Pêlo ruivo, vê se me arranjas algo para comer, do contrário como-te.
            A raposa respondeu:
            - Conheço por aqui um sítio no qual há um casal de ovelhinhas; se desejas, podemos apanhar uma delas.
            O lôbo gostou da idéia e concordou. Foram até lá e a raposa furtou a ovelhinha, entregou-a ao lôbo e afastou- se. O lôbo devorou-a num abrir e fechar de olhos mas não se satisfez; queria comer também a outra e foi bus-
            cá-la. Mas foi tão desastrado que a mãe da ovelhinha percebeu-o e desandou a berrar e a balir tão fortemente, que os camponeses vieram correndo. Lá encontraram o lôbo e o espancaram, tão rudemente, que o pobre ficou reduzido a lastimável estado. Mancando e uivando, conseguiu arrastar-se para junto da raposa.
            - Pregaste-me uma boa peça! - disse éle - Eu quis apanhar o outro cordeirinho e vieram os camponeses, que me encheram de pancadas.
            - E tu, - respondeu a raposa - por que és tão guloso?
            No dia seguinte, voltaram ao campo e o lôbo disse:
            - Pêlo ruivo, vê se me arranjas qualquer coisa para comer, do contrário como-te.
            - Conheço um sitiozinho aqui por perto, cuja dona hoje à tarde vai fazer bolinhos; se quiseres podemos ir buscar alguns.
            Foram até lá e a raposa esgueirou-se em tôrno da casa, tanto espiou e farejou que conseguiu descobrir o prato, furtou seis bolinhos e levou-os ao lôbo.
            - Eis aqui o que comer! - disse, e afastou-se para os seus afazeres.
            O lôbo engoliu os seis bolinhos de uma vez, dizendo:
            - Chegam apenas para aumentar a vontade.
            Dirigiu-se à casa, puxou o prato logo de uma vez;
            éste caiu e ficou em mil pedaços, fazendo um barulhão dos diabos. A mulher correu pura ver o que acontecia e descobriu o lôbo; pôs-se a gritar chamando mais gente que, sem dó nem piedade, desandou a espancar o lôbo até mais nfio poder; ôste, muncundo das duas pernas, saiu gemendo e foi ter com a ruposu.
            - Que boa peça me pregaste! - gritou choramingando - os camponeses pegaram-me e curtiram-me a pele sem dó nem piedade!
            - Mas, - respondeu a raposa - por que és tão guloso?
            No terceiro dia, tendo saído juntos, o lôbo arrastava-se penosamente; assim mesmo disse:
            - Pelo ruivo, vê se me arranjas qualquer coisa para comer, do contrário como-te.
            A raposa respondeu:
            - Conheço por aqui um homem que matou uma vaca e guardou a carne salgada dentro de um barril, na adega; vamos buscá-la.
            - Sim, - disse o lôbo - mas eu quero ir junto contigo para que me ajudes, do contrário não poderei fugir.
            - Como quiseres! - disse a raposa.
            Foi mostrando-lhe o caminho e as passagens ocultas que por fim os levaram à adega. Havia lá grande quantidade de carne, e o lôbo, esfaimado, atirou-se imediatamente a ela, pensando: "Não largarei tão cedo!"
            A raposa também comia a valer, mas não deixava de olhar em volta, correndo de quando em quando para o buraco pelo qual haviam entrado a ver se estava ainda bastante delgada para passar por êle. O lôbo, intrigado, perguntou-lhe:
            - Explica-me, cara raposa, por que é que corres de cá para lá e pulas para dentro e para fora?
            - Tenho, naturalmente, de espiar se vem alguém! - respondeu a espertalhona. - Mas aconselho-te a não comer demais.
            - Ora, - disse o lôbo - não sairei daqui enquanto não esvaziar o barril.
            Nesse ponto, o camponês, que ouvira os saltos da raposa, desceu à adega; assim que o viu, a raposa deu um pulo para fora do buraco. O lôbo quis fazer o mesmo, mas tanto se empanturrara que seu ventre enorme não conseguiu passar pelo buraco e ficou lá entalado.
            Então o camponês pegou um pau e bateu-lhe tanto que o matou. A raposa, porém, fugiu para a floresta, muito feliz por ter-se livrado finalmente daquele glutão.
            `
        },
        {
            titulo : 'O lobo e as sete crianças',
            texto: `Era uma vez uma velha cabra que tinha sete cabritinhos e os amava, como uma boa mãe pode amar os filhos. Um dia, querendo ir ao bosque para as provisões do jantar, chamou os sete filhinhos e lhes disse:
            - Queridos pequenos, preciso ir ao bosque; cuidado com o lobo; se ele entrar aqui, come-vos todos com uma única abocanhada. Aquele patife costuma disfarçar-se, logo o reconhecereis, porém, pela voz rouca e pelas patas negras.
            Os cabritinhos responderam:
            - Podeis ir sossegada, querida mamãe, ficaremos bem atentos.
            Com um balido, a velha cabra afastou-se confiante. Pouco depois, alguém bateu à porta, gritando:
            - Abri, queridos pequenos; está aqui vossa mãezinha que trouxe um presente para cada um!
            Mas os cabritinhos perceberam, pela voz rouca, que era o lobo.
            - Não abrimos nada, - disseram - não é a nossa mamãe; a mamãe tem uma vozinha suave; a tua é rouca; tu és o lobo!
            Então o lobo foi a um negócio, comprou um grande pedaço de argila, comeu-o e assim a voz dele tornou-se mais suave. Em seguida, voltou a bater à porta, dizendo:
            - Abri, queridos pequenos; está aqui a vossa mãezinha que trouxe um presente para cada um!
            Mas havia apoiado a pata negra na janela; os pequenos viram-na e gritaram:
            - Não abrimos, nossa mamãe não tem as patas negras como tu; tu és o lobo.
            O lobo correu, então, até o padeiro e lhe disse:
            - Machuquei o pé, queres esparramar-lhe em cima um pouco de massa?
            Quando o padeiro lhe espargiu a massa na pata, correu até o moleiro e disse:
            - Espalha um pouco de farinha de trigo na minha pata.
            O moleiro pensou: "Este lobo está tentando enganar alguém" e recusou-se a atende-lo. O lobo, porém, ameaçou-o:
            - Se não o fizeres, devoro-te!
            O moleiro, então, se assustou e polvilhou-lhe a pata. Aliás, isso é comum entre os homens. O malandro foi, pela terceira vez, bater à porta dos cabritinhos, dizendo:
            - Abri, pequenos, vossa querida mãezinha voltou do bosque e trouxe um presente para cada um de vós!
            Os cabritinhos gritaram:
            - Mostra-nos primeiro a tua pata para que saibamos se és realmente nossa mamãezinha.
            O lobo não hesitou, colocou a pata sobre a janela e, quando viram que era branca, acreditaram no que dizia e abriram-lhe a porta. Mas foi o lobo que entrou. Os cabritinhos, amedrontados, trataram de se esconder. O primeiro escondeu-se debaixo da mesa, o segundo meteu-se embaixo da cama, o terceiro correu para dentro do forno, o quarto foi para a cozinha, o quinto fechou-se no armário, o sexto dentro da pia e o sétimo na caixa do relógio de parede. Mas o lobo encontrou-os todos e não fez cerimônias; engoliu-os um após o outro. O último, porém, que estava dentro da caixa do relógio, não foi descoberto. Uma vez satisfeito, o lobo saiu e foi deitar-se sob uma árvore, no gramado fresco do prado e não tardou a ferrar no sono. Não tardou muito e a velha cabra regressou do bosque.
            Ah, o que se lhe deparou! A porta da casa escancarada; mesa, cadeiras, bancos, tudo de pernas para o ar. A pia em pedaços, as cobertas, os travesseiros arrancados da cama. Procurou logo os filhinhos, não conseguindo encontrá-los em parte alguma. Chamou-os pelo nome, um após o outro, mas ninguém respondeu. Ao chamar, por fim, o menor de todos, uma vozinha sumida gritou:
            - Querida mamãezinha, estou aqui, dentro da caixa do relógio.
            Ela tirou-o de lá e o pequeno contou-lhe que viera o lobo e devorara todos os outros. Imaginem o quanto a cabra chorou pelos seus pequeninos! Saiu de casa desesperada, sem saber o que fazer; o cabritinho menor saiu-lhe atrás. Chegando ao prado, viram o lobo espichado debaixo da árvore, roncando de tal maneira que fazia estremecer os galhos. Observou-o atentamente, de um e de outro lado e notou que algo se mexia dentro de seu ventre enorme.
            - Ah! Deus meu, - suspirou ela - estarão ainda vivos os meus pobres pequenos que o lobo devorou?
            Mandou o cabritinho menor que fosse correndo em casa apanhar a tesoura, linha e agulha também. De posse delas, abriu a barriga do monstro; ao primeiro corte, um cabritinho pôs a cabeça de fora e, conforme ia cortando mais, um por um foram saltando para fora; todos os seis, vivos e perfeitamente sãos, pois o monstro, na sanha devoradora, os engolira inteiros, sem mastigar.
            Que alegria sentiram ao ver a mãezinha! Abraçaram-na, pinoteando felizes como nunca. Mas a velha cabra lhes disse:
            - Ide depressa procurar algumas pedras para encher a barriga deste danado antes que ele desperte.
            Os cabritinhos, então, saíram correndo e daí a pouco voltaram com as pedras, que meteram, tantas quantas couberam, na barriga ainda quente do lobo. A velha cabra, muito rapidamente, coseu-lhe a pele de modo que ele nem chegou a perceber.
            Finalmente, tendo dormido bastante, o lobo levantou-se e, como as pedras que tinha no estômago lhe provocassem uma grande sede, foi à fonte para beber; mas, ao andar e mexer-se, as pedras chocavam-se na barriga, fazendo um certo ruído. Ele então pôs-se a gritar:
            Dentro da pança,
            que é que salta e pula?
            Cabritos não são;
            parece pedra miúda!
            Chegando à fonte, debruçou-se para beber; entretanto, o peso das pedras arrastou-o para dentro da água, onde se acabou afogando miseravelmente. Vendo isso, os sete cabritinhos saíram correndo e gritando:
            - O lobo morreu! O lobo morreu!
            Então, juntamente com a mãezinha, dançaram alegremente em volta da fonte.`
        },
        {
            titulo : 'A história do jovem em busca de saber o que é o medo',
            texto  : `Um pai tinha dois filhos, o mais velho deles era sábio e sensato, e sabia fazer de tudo, mas o mais jovem era tolo, e não conseguia aprender nem entender nada, e quando as pessoas o viam, elas diziam:

            - "Este é um garoto que dará muito trabalho ao pai!"
            
            Quando algo precisava ser feito, era sempre o mais velho que fazia, mas se o seu pai pedia ao mais velho que fosse buscar qualquer coisa quando já era tarde, ou já estivesse escuro, e o caminho tivesse de passar perto do cemitério, ou de qualquer outro lugar assustador, ele respondia:
            
            - "Oh não, pai, eu não vou lá, isso me causa arrepios!" porque ele sempre tinha medo.
            
            Ou quando histórias em volta da fogueira eram contadas a noite, ele ficava todo arrepiado, e aqueles que estavam por perto sempre diziam:
            
            - "Oh não, estou ficando com medo!" O mais jovem ficava sentado no canto e escutava as histórias com o resto das pessoas, e não conseguia imaginar o que significava tudo aquilo.
            
            - "Eles estão sempre dizendo, "estou ficando com medo, estou ficando com medo!" Eu não estou ficando com medo," pensava ele. "Talvez essa fosse uma arte que eu precisava entender!"
            
            E então, aconteceu que seu pai um dia disse a ele:
            
            - "Ouça-me, garoto que está sentado aí no canto, você está ficando alto e forte, e você deve aprender alguma coisa com a qual possa ganhar a vida. Veja como o teu irmão trabalha, mas você não ganha nem sequer para comprar um quilo de sal."
            
            - "Bem, pai," respondeu ele, "eu tenho vontade de aprender alguma coisa, de verdade, e se isso pode ser ensinado, eu gostaria de aprender a ter medo. Eu não entendo nada disso."
            
            O irmão mais velho, riu ao ouvir isso, e pensou consigo mesmo:
            
            - "Bom Deus, como o meu irmão é tolo! Ele nunca vai prestar para nada enquanto viver! Para ser foice o metal desde cedo deve se dobrar aos imperativos do tempo."
            
            O pai suspirou e respondeu:
            
            - "Você logo aprenderá o que é ter medo, mas você não terá o teu sustento com isso."
            
            Pouco tempo depois um sacristão foi à casa dele para uma visita, e o pai desfilou um rosário de lamentações, e lhe contou como o seu filho mais jovem era tão refratário em todos os aspectos, que ele não sabia nada e não aprendia nada.
            
            - "Veja só," disse o pai, "quando eu perguntei a ele o que ele faria para ganhar a vida, ele me respondeu que queria aprender a ter medo."
            
            - "Se é isso mesmo o que ele quer," respondeu o sacristão, "eu posso ensinar isso a ele. Fale pra ele me procurar, eu vou deixá-lo afinadíssimo."
            
            O pai ficou contente, porque ele pensou:
            
            - "Vou fazer um teste com o garoto." Então, o sacristão o levou para casa, e ele precisava tocar o sino. Depois de um ou dois dias, o sacristão o acordou a meia noite, e disse a ele para que se levantasse e subisse até a torre da igreja para tocar o sino.
            
            - "Você logo aprenderá o que é ter medo," pensou o sacristão, e às ocultas foi na frente dele, e quando o garoto estava no alto da torre e se virou, e já ía segurar na corda do sino, ele viu uma figura de branco que estava de pé nas escadas de frente para a janela do sino.
            
            - "Quem está aí?" gritou o jovem, mas a figura não respondia, e não fazia nenhum movimento. "Responda-me," gritou ele mais uma vez, "ou vá embora daqui, você não tem nada que fazer aqui a esta hora da noite."
            
            No entanto, o sacristão ficou parado e não se movia para que o garoto pensasse que se tratasse de um fantasma. O garoto gritou pela segunda vez:
            
            - "O que você quer aqui? - fale se você for uma pessoa sincera, ou eu vou te jogar escada abaixo!"
            
            O sacristão pensou: - "ele não pode ser tão malvado como está dizendo," não fez nenhum barulho, e permaneceu parado como se fosse feito de pedra. Então, o garoto chamou pela terceira vez, e como isso também não adiantasse nada, ele correu em direção ao sacristão e empurrou o fantasma escada abaixo, que rolou dez degraus abaixo e permaneceu imóvel num canto.
            
            Depois ele tocou o sino, foi para casa, e sem dizer uma palavra se deitou, e dormiu. A esposa do sacristão esperou durante muito tempo pelo marido, que não voltava. Então, ela ficou preocupada, e acordou o garoto, e perguntou:
            
            - "Você não sabe onde o meu marido se encontra? Ele subiu a torre antes de você."
            
            - "Não, eu não sei," respondeu o garoto, "Alguém estava na escada de frente para a janela do sino, e como ele não queria responder, e nem ia embora, pensei, que era um ladrão, e o derrubei da escada, vá lá e veja se era ele. Lamento muito caso seja ele." A mulher saiu correndo e encontrou o marido dela, deitado e gemendo num canto, com a perna quebrada.
            
            Ela o carregou para casa e depois aos berros foi correndo até a casa do garoto.
            
            - "O seu garoto," disse ela, "é a causa de uma grande desgraça! Ele atirou meu marido escada abaixo e quebrou uma perna dele. Leve embora de nossa casa esse infeliz que não serve para nada."
            
            O pai ficou apavorado, e correu imediatamente para lá e repreendeu o garoto:
            
            - "Mas que maldade foi essa?" disse ele, "o Coisa Ruim deve ter colocado isso na tua cabeça."
            
            - "Pai," respondeu ele, "me escute, por favor. Eu sou totalmente inocente. Ele estava de pé lá à noite como alguém que estivesse para fazer alguma maldade. Eu não sabia quem era ele, e por três vezes eu insisti para que ele falasse ou fosse embora."
            
            - "Ah," disse o pai, " você só me traz infelicidade. Saia da minha frente. Não quero te ver nunca mais."
            
            - "Sim," pai, "te peço, espere pelo menos o dia clarear. Então, eu vou embora e aprenderei como ter medo, e de qualquer maneira entenderei uma arte que me servirá de suporte."
            
            - "Aprenda o que você quiser," falou o pai, "para mim é indiferente. Tome aqui as cinquenta moedas. Pegue-as e enfrente o mundo selvagem, e não diga a ninguém de onde você veio, e quem é o teu pai, porque eu tenho motivos para ter vergonha de você."
            
            - "Sim, pai, será como o senhor desejar. Se o senhor não deseja nada mais do que isto, vai ser fácil cumprir a tua vontade."
            
            Quando o dia amanheceu, portanto, o jovem colocou as cinquenta moedas no bolso, e foi embora por uma grande rodovia, e dizia sempre para si mesmo:
            
            - "Se eu pelo menos pudesse ter medo! Se eu pelo menos pudesse ter medo!" Então, um homem, que tinha ouvido o que o garoto falava, se aproximou e depois de andar mais um pouquinho, quando eles podiam ver um patíbulo, o homem disse a ele:
            
            - "Olhe, ali fica a árvore, onde sete jovens festejaram o casamento da filha do fabricante de cordas, e agora eles estão aprendendo a voar. Fique sentado ali, e espere quando a noite chegar, e você irá aprender a ter medo."
            
            - "Se for isso tudo que é necessário," respondeu o jovem, "isso é fácil de fazer, mas se eu aprender a ter medo tão rápido assim, você receberá cinquenta moedas. Volte aqui amanhã bem cedo." Então, o jovem foi até o patíbulo, se sentou debaixo dele, e ficou esperando até a noite chegar.
            
            Como estava com frio, ele se aqueceu perto de uma fogueira, mas a meia noite o vento soprava tão forte que apesar do fogo, ele não conseguia se aquecer. E como o vento fazia com que os homens que tinham sido enforcados ficassem batendo um contra o outro, e eles balançavam para a frente e para trás, ele pensou consigo mesmo:
            
            - "Eu fico tremendo aqui embaixo perto da fogueira, mas, como aqueles que estão lá em cima devem estar congelados e sofrendo!" E como ele sentiu piedade por eles, subiu a escada, e subiu até onde eles estavam, desamarrou todos eles um após o outro, e desceu todos os sete.
            
            Então, ele agitou o fogo, soprou, e colocou todos eles ao redor para se aquecerem. Mas eles ficavam sentados ali e não se mexiam, e o fogo começou a queimar a roupa deles. Então, ele disse:
            
            - "Tomem cuidado, ou eu vou enforcá-los novamente." Os homens que estavam mortos, todavia, não responderam, mas permaneceram em silêncio, e deixava que os seus farrapos continuassem queimando. Com isto ele ficou bravo, e disse:
            
            - "Se vocês não tomarem cuidado, eu não vou ajudá-los, eu não vou ser queimado com vocês," e ele pendurou de novo todos eles na forca. Depois ele voltou a se sentar perto do fogo e adormeceu, e na manhã seguinte o homem veio até ele e queria receber as cinquentas moedas, e disse:
            
            - "Bem, você já sabe o que é ter medo?"
            
            - "Não," respondeu ele, "como é que eu deveria saber? Aqueles caras lá em cima não abriram a boca, e eram tão tapados que eles deixaram os trapos estavam vestindo em seus corpos se queimassem." Então, o homem viu que ele não receberia as cinquenta moedas naquele dia, e foi embora dizendo:
            
            - "Nunca uma coisa como esta havia acontecido para mim antes."
            
            O jovem novamente pegou o seu caminho, e mais uma vez começou a resmungar consigo mesmo:
            
            - "Ah, se eu conseguisse ter medo! Ah, se eu conseguisse ter medo!"
            
            Um carroceiro que estava atrás dele, e ouviu o que ele dizia, perguntou:
            
            - "Quem é você?"
            
            - "Não sei," respondeu o jovem. Então, o carroceiro lhe disse:
            
            - "De onde você vem?"
            
            - "Não sei."
            
            - "Quem é teu pai?"
            
            - "Não posso lhe dizer isso."
            
            - "Porquê você não pára de resmungar entre os dentes?"
            
            - "Ah," respondeu o jovem, "eu tenho tanta vontade de saber como é ter medo, mas ninguém consegue me ensinar como fazer isso."
            
            - "Pare de falar bobagens," disse o carroceiro. "Venha comigo, e eu encontrarei um lugar para você." O jovem foi com o carroceiro, e à noitinha eles chegaram numa estalagem onde pretendiam passar a noite.
            
            Então, bem na entrada do quarto, o jovem novamente disse bem em voz alta:
            
            - "Ah se eu conseguisse ter medo! Ah se eu conseguisse ter medo!" O estalajadeiro, ao ouvir isto, riu muito e disse:
            
            - "Se é isso o que você deseja, deve haver uma boa oportunidade para você aqui."
            
            - "Escute, fique quieto," disse a esposa do estalajadeiro, "muitas pessoas curiosas já perderam suas vidas, seria uma pena e um pecado que olhos tão lindos como os teus não pudessem nunca mais ver o sol nascer."
            
            Mas o jovem disse: - "Por mais difícil que seja, eu quero saber, e foi para isto que eu viajei até aqui." Ele não dava descanso para o estalajadeiro, até que este lhe disse: "que não muito longe dali ficava um castelo assombrado onde qualquer pessoa poderia aprender facilmente o que era o medo, se ele simplesmente passasse três noites naquele castelo. O rei havia prometido que aquele que tivesse essa coragem receberia a sua filha como esposa, que era a garota mais linda que o sol já derramou os seus raios cintilantes.
            
            No castelo havia também grandes tesouros, os quais eram guardados pelos espíritos do mal, e estes tesouros seriam então, libertados, e tornariam rico o bastante qualquer pessoa miserável. Muitos homens já haviam ido até o castelo, mas nenhum deles conseguiu sair vivo de lá. Então, o jovem na manhã seguinte foi até o rei e disse que se lhe dessem permissão, ele ficaria três noites no castelo encantado.
            
            O rei olhou para ele, e como o garoto lhe fosse agradável, ele disse:
            
            - "Você pode pedir três coisas para levar com você para o castelo, mas devem ser coisas sem vida." Então, ele respondeu:
            
            - "Então, eu quero levar lenha para fazer fogo, um torno giratório e uma tábua de cortar com faca." O rei mandou que estas coisas fossem levadas ao castelo para ele durante o dia. Quando a noite estava chegando, o jovem foi e fez para ele um fogo bem alto em uma das salas do castelo, colocou a tábua de cortar com a faca perto do fogo, e se sentou perto do torno giratório.
            
            - "Ah se eu conseguisse ter medo!," dizia ele, "mas eu acho que não vou aprender isso aqui também." Por volta da meia noite, ele decidiu atiçar o fogo, e quando ele começou a soprar, de repente alguém gritou de algum lugar:
            
            - "Au, miau, como está frio aqui!"
            
            - "Seus idiotas!" gritou ele, "porque vocês estão gritando? Se vocês estão com frio, venham aqui para se aquecer perto do fogo." E quando ele disse isso, dois grandes gatos pretos se aproximaram dando um salto estupendo e se sentaram um de cada lado dele, e olhavam furiosos para ele com seus olhos ardentes.
            
            Passado algum tempo, depois que os gatos tinham se aquecido, eles disseram:
            
            - "Camarada, será que nós poderíamos jogar baralho?"
            
            - "Porque não," respondeu ele, "mas primeiro me mostrem as garras de vocês." Então, eles esticaram as suas garras.
            
            - "Oh," disse ele, "que unhas compridas que vocês têm! Espere, primeiro eu vou cortá-las um pouco para vocês."
            
            Então, ele pegou os gatos pelas gargantas, os colocou na tábua de cortar e rapidamente aparou as unhas deles.
            
            - "Eu olhei para os dedos de vocês," disse ele, "e minha vontade de jogar baralho foi embora," e ele matou os dois gatos e os jogou na água. Mas quando ele tinha se livrado daqueles dois, e ia se sentar novamente perto da fogueira, de todos os buracos e de todos os cantos saíam gatos negros e cachorros pretos com correntes incandescentes, e vinham cada vez mais até que ele não conseguia se mexer, e eles gritavam terrivelmente, pegaram o fogo, espalharam todo, e queriam apagá-lo.
            
            Ele olhou para eles durante algum tempo, mas depois eles começaram a cansá-lo, então, ele pegou a tábua de cortar, e gritou:
            
            - "Fora daqui, seus vermes," e começou a cortar todos eles impiedosamente. Parte deles fugiu, os outros ele matou, e atirou no riacho de peixes. Quando ele retornou ele soprou as brasas da fogueira novamente e voltou a se aquecer. E quando então, ele se sentou, seus olhos não conseguiam mais ficarem abertos, e ele sentiu vontade de dormir. Então, ele olhou ao redor e viu uma grande cama num canto.
            
            - "É disso que estou precisando," disse ele, e deitou nela. Quando ele ia fechar os olhos, todavia, a cama começou a andar sozinha, e percorreu todo o castelo.
            
            - "Muito bem," disse ele, "vamos rápido." Então, a cama continuava a deslizar como se seis cavalos estivessem atrelados a ela, pra cima e pra baixo, pelas soleiras e pelas escadas, mas de repente, hop, hop, ela virou de cabeça para baixo, e montou nele como se fosse uma montanha. Mas ele lançou colchas e travesseiros pelo ar, saiu e disse:
            
            - "Agora quem quiser, que dirija," e se deitou perto do fogo, e dormiu até quando o dia amanheceu. De manhã o rei chegou, e quando viu que o jovem estava deitado no chão, o rei pensou que os maus espíritos o haviam matado e ele estava morto. Então, ele disse:
            
            - "Que pena que ele morreu, afinal de contas ele era um rapaz bonito." O jovem ouviu isso, se levantou e disse:
            
            - "Ainda não é chegada a minha hora." Então, o rei ficou surpreso, mas muito contente, e perguntou como ele tinha passado a noite.
            
            - "Muito bem," respondeu ele, "se passei uma noite, as duas outras irão passar também." Então, ele foi até o estalajadeiro, que ficou de olhos arregalados, e disse:
            
            - "Eu jamais esperava vê-lo vivo novamente! Será que você já aprendeu a ter medo?" - "Não," disse ele, "não adiantou nada. Ah, se alguém pudesse me ensinar!"
            
            Na segunda noite ele voltou ao velho castelo, se sentou perto do fogo, e mais uma vez começou a sua velha ladainha:
            
            - "Ah se seu pudesse ter medo!" Quando chegou meia-noite, gritos e barulhos de coisas sendo derrubadas foram ouvidos, a princípio o barulho era baixo, mas ficava cada vez mais alto. De repente tudo ficou calmo por um instante, e finalmente ouviu-se um grito estridente, metade de um homem apareceu na chaminé e caiu na frente dele.
            
            - "Opa!," exclamou ele, "deve haver a outra metade. Isto é muito pouco!" Então, os gritos começaram novamente, ouviu-se rugidos e gemidos, e a outra metade caiu também.
            
            - "Espere," disse ele, "eu vou atiçar o fogo um pouco para você." E depois de fazer isso ele olhou em volta novamente, e as duas metades haviam se juntado, e um homem assustador estava sentado no seu banco.
            
            - "Isso não faz parte do nosso trato," disse o jovem, "o banco é meu."
            
            O homem quis empurrá-lo, o jovem, todavia, não permitiu, mas o empurrou com todas as suas forças, e se sentou novamente no banco. De repente, mais homens começaram a cair, um depois do outro, nove pernas de homens mortos e duas caveiras foram trazidas, foram arranjadas e começaram a brincar jogo de dos nove palitos com elas. O jovem também quis brincar e disse:
            
            - "Ouçam, será que eu também posso brincar?"
            
            - "Sim, se você tiver dinheiro."
            
            - "Bastante dinheiro," respondeu ele, "mas as bolas de vocês não são bem redondas." Então, ele pegou as caveiras e as colocou no torno e as girou até que estivessem redondas.
            
            - "Agora, sim, elas vão rolar melhor!" disse ele.
            
            - "Viva! agora vai ser legal!" Ele brincou com os visitantes e perdeu um pouco de dinheiro, mas quando bateu meia noite todos desapareceram diante dele.
            
            E le se deitou e tranquilamente caiu no sono. Na manhã seguinte o rei veio para ter notícias dele.
            
            - "Como é que você passou a noite desta vez?" perguntou ele.
            
            - "Fiquei brincando a noite inteira o jogo dos nove palitos," respondeu ele, "e perdi alguns centavos."
            
            - "Então, você sentiu medo?"
            
            - "Sentiu o quê?" disse ele, "eu fiquei é feliz. Ah se seu soubesse o que é ter medo!"
            
            Na terceira noite ele se sentou novamente em seu banco e disse muito triste:
            
            - "Ah se seu soubesse o que é ter medo!." Quando ficou tarde, apareceram seis homens altos e trouxeram um caixão. Então, ele disse:
            
            - "Ra, ra, esse aí deve ser o meu primo, que morreu alguns dias atrás," fez um gesto convidativo e exclamou:
            
            - "Venha, priminho, venha." Eles colocaram a caixa mortuária no chão, mas o jovem foi até ela e levantou a tampa, e no caixão havia um defunto.
            
            Ele passou a mão na cara do defunto, mas ele estava frio como gelo.
            
            - "Espere," disse ele, "eu vou aquecer você um pouquinho," e foi até a fogueira, esquentou a sua mão, e a colocou no rosto do cadáver, mas ele permanecia frio. Então, ele o tirou para fora, se sentou perto do fogo, e o colocou de bruços e esfregou os seus braços para que o sangue pudesse circular novamente. Como isso não deu resultado, ele pensou consigo mesmo:
            
            - "Quando duas pessoas se deitam juntas na cama, elas aquecem uma a outra," e o carregou para a cama, cobriu o cadáver, e se deitou ao lado dele. Depois de algum tempo o cadáver começou a se aquecer também, e começou a se mexer. Então, o jovem disse:
            
            - "Veja, priminho, viu como eu te aqueci?" O defunto, todavia, se levantou e gritou:
            
            - "Agora eu vou te estrangular."
            
            - "O quê!" disse ele, "é assim que você me agradece? Entre imediatamente no teu caixão agora mesmo," e ele pegou o cadáver, o colocou dentro do caixão, e fechou a tampa. Então, apareceram seis homens e o levaram embora novamente.
            
            - "Eu não consigo saber o que é ter medo," disse ele, "acho que nunca vou saber o que é isso enquanto viver."
            
            Então, um homem que era mais alto que os outros entrou, e tinha um aspecto assustador. Ele era velho, e todavia, tinha uma barba longa e branca.
            
            - "Seu desgraçado," gritou ele, "agora você vai saber o que é ter medo, porque você irá morrer."
            
            - "Vai devagar," respondeu o jovem.
            
            - "Se eu tenho de morrer, eu tenho que me preparar para isso."
            
            - "Eu vou te pegar," disse o fantasma.
            
            - "Calma, calma, não queira aparecer. Eu sou tão forte quanto você, e talvez até mais forte."
            
            - "Veremos," disse o velho. "se você é mais forte, te deixo ir - venha, vamos fazer um teste." Então, o velho o levou por corredores escuros até a fornalha de um ferreiro, pegou um machado, e num só golpe enterrou a bigorna no chão.
            
            - "Posso fazer melhor ainda," disse o jovem, e foi até a outra bigorna. O velho ficou perto e queria ver, e sua barba longa e branca ficava pendurada.
            
            Então, o jovem pegou o machado, partiu em dois a bigorna e ao mesmo tempo cortou a barba do velho.
            
            - "Agora eu te peguei," disse o jovem. "Agora é você que tem de morrer." Então, ele pegou uma barra de ferro e golpeou o velho até ele gemer e pedir pra parar, prometendo muitas riquezas para o jovem. Este puxou o machado e o soltou. O velho o levou de volta para o castelo, e numa sala haviam três caixas cheias de ouro.
            
            - "Destas," disse ele, "uma parte é para os pobres, a outra é para o rei, e a terceira é para ti."
            
            E nesse instante bateu meia noite, e o espírito desapareceu, e o jovem ficou na escuridão.
            
            - "Eu ainda saberei encontrar a minha saída," disse ele, e tateando, ele encontrou o caminho até a sala, e lá dormiu perto do fogo. Na manhã seguinte o rei apareceu e disse:
            
            - "Agora deve ter aprendido o que é ter medo?"
            
            - "Não," respondeu ele, "o que será isso? Meu primo que morreu apareceu aqui, e um homem barbudo veio e me mostrou um monte de dinheiro lá embaixo, mas nenhum deles me disse o que é ter medo."
            
            - "Então," disse o rei, "você libertou o castelo, e deverá se casar com a minha filha."
            
            - "Tudo está certo," disse ele, "mas eu ainda não sei o que é ter medo!"
            
            Então, o ouro foi trazido e o casamento foi celebrado, mas o jovem rei, por mais que ele amasse a sua esposa, e por mais feliz que se sentisse, ele ainda dizia sempre:
            
            - "Ah, se eu conseguisse ter medo - Ah, se eu conseguisse ter medo." Até que a sua esposa começou a ficar irritada com isso. A dama de companhia dela disse:
            
            - "Eu tenho uma solução para isso, ele logo vai saber o que é ter medo." Ela foi até o riacho que passava pelo jardim, e mandou que um balde cheio de peixes gobiões fosse trazido até ela.
            
            A noite quando o jovem rei estivesse dormindo, sua esposa devia tirar as roupas dele e esvaziar o balde de água fria com os gobiões em cima dele, de modo que os peixinhos ficando pulando em torno dele. Quando ela fez isto, ele acordou e gritou:
            
            - "Oh, o que me faz sentir tanto medo assim? - o que me faz sentir tanto medo assim, minha querida esposa? Ah, agora eu sei o que é ter medo!"`
        },
        {
            titulo : 'Os sete corvos',
            texto  : `Um homem tinha sete filhos e nunca tinha uma filha, por mais que desejasse. Até que, finalmente, sua mulher lhe deu esperanças de novo e, quando a criança veio ao mundo, era uma menina. A alegria foi enorme, mas a criança era franzina e miúda e, por causa dessa fraqueza, foi preciso que lhe dessem logo os sacramentos. O pai mandou um dos filhos ir correndo até a fonte, buscar água para o batismo. Os outros seis foram atrás do irmão e, como cada um queria ser o primeiro a puxar a água para cima, acabaram deixando o balde cair no fundo do poço. Aí eles ficaram assustados, sem saber o que deviam fazer, e nenhum dos sete tinha coragem de voltar para casa. Foram ficando por lá, sem sair do lugar.

            Como estavam demorando muito, o pai foi ficando cada vez mais impaciente e disse: - Na certa ficaram brincando e se esqueceram de voltar, aqueles moleques levados...
            
            Começou a ficar com medo de que a menininha morresse sem ser batizada e, com raiva, gritou:
            
            - Tomara que eles todos virem corvos!
            
            Mal o pai acabou de dizer essas palavras, ouviu um barulho de asas batendo no ar, por cima da cabeça. Levantou os olhos e viu sete corvos negros como carvão. voando de um lado para outro.
            
            Os pais ficaram tristíssimos, mas não conseguiram fazer nada para quebrar o encanto.
            
            Felizmente, puderam se consolar um pouco com sua filhinha querida, que logo recuperou as forças e cada dia ia ficando mais bonita. Durante muito tempo, ela ficou sem saber que tinha tido irmãos, porque os pais tinham o maior cuidado de nunca falar nisso. Mas um dia, ela ouviu por acaso umas pessoas comentando que era uma pena que uma menina assim tão bonita como ela fosse a responsável pela infelicidade dos irmãos.
            
            A menina ficou muito aflita e foi logo perguntar aos pais se era verdade que ela já tinha tido irmãos, e o que tinha acontecido com eles. Os pais não puderam continuar guardando segredo. Mas explicaram que o que aconteceu tinha sido um desígnio do céu, e que o nascimento dela não tinha culpa de nada. Só que a menina começou a ter remorsos todos os dias e resolveu que precisava dar um jeito de livrar os irmãos do encanto. Não sossegou enquanto não saiu escondida, tentando encontrar algum sinal deles em algum lugar, custasse o que custasse. Não levou quase nada: só um anelzinho como lembrança dos pais, uma garrafinha d'água para matar a sede e uma cadeirinha para descansar.
            
            Andou, andou, andou, cada vez para mais longe, até o fim do mundo. Aí, ela chegou junto do sol. Mas ele era quente demais e muito terrível, porque comia os próprios filhos. Ela saiu correndo, fugindo, para bem longe, até que chegou junto da lua. Mas a lua era fria demais e muito malvada e cruel. Assim que viu a menina, disse:
            - Huuummm sinto cheiro de carne humana...
            
            A menina saiu correndo bem depressa, fugindo para bem longe, até que chegou junto das estrelas.
            
            As estrelas foram muito amáveis e boazinhas com ela, cada uma sentada em uma cadeirinha separada. Então, a estrela da manhã se levantou, deu um ossinho de galinha à menina e disse:
            
            - Sem este ossinho, você não vai conseguir abrir a montanha de vidro. E é na montanha de vidro que estão os seus irmãos.
            
            A menina pegou no ossinho, embrulhou-o com todo cuidado num lenço e continuou seu caminho, até que chegou à montanha de vidro. A porta estava bem fechada, trancada com chave, e ela resolveu pegar o ossinho de galinha que estava guardado no lenço. Mas quando desembrulhou, viu que não tinha nada dentro do pano e que ela tinha perdido o presente que as boas estrelas tinham dado. Ficou sem saber o que fazer. Queria muito salvar os irmãos, mas não tinha mais a chave da montanha de vidro. Então, a boa irmãzinha pegou uma faca, cortou um dedo mindinho, enfiou na fechadura e deu um jeito de abrir a porta. Assim que entrou, um gnomo veio ao seu encontro e lhe perguntou:
            
            - Minha filha, o que é que você está procurando?
            
            - Procuro meus irmãos, os sete corvos - respondeu ela. O gnomo então disse:
            
            - Os senhores Corvos não estão em casa, mas se quiser esperar até que eles cheguem, entre e fique à vontade.
            
            Lá em cima, o gnomo pôs a mesa para o jantar dos corvos, com sete pratinhos e sete copinhos. A irmã então comeu um pouco da comida de cada prato e bebeu um gole de cada copo. Mas no último, deixou cair o anelzinho que tinha trazido.
            
            De repente, ouviu-se nos ares um barulho de gritos e batidas de asas. Então o gnomo disse:
            
            - São os senhores Corvos que estão chegando.
            
            Eram eles mesmos, com fome e com sede. Foram logo em direção aos pratos e copos. E, um por um, foram gritando:
            
            - Quem comeu no meu prato? Quem bebeu no meu copo? Foi boca de gente, foi boca de gente...
            
            Mas quando o sétimo corvo acabou de esvaziar seu copo, o anel caiu lá de dentro. Ele olhou bem e reconheceu que era um anel do pai e da mãe deles, e disse:
            
            - Quem dera que fosse a nossa irmãzinha, porque aí a gente ficava livre.
            
            Quando a menina, que estava escondida atrás da porta, ouviu esse desejo, apareceu de repente e todos os corvos viraram gente outra vez. Começaram todos a se abraçar e se beijar e a se fazer mil carinhos e depois voltaram para casa muito felizes.`
        }
    ]

    document.querySelector('main').innerHTML = `<div>
    <button onclick="fontSizingChange('aumentar')">
        <img src="Assets/images/zoom_in_black_24dp.svg" />
    </button>
    <button onclick="fontSizingChange('diminuir')">
        <img src="Assets/images/zoom_out_black_24dp.svg" />
    </button>
</div>`;
    let pagina = document.createElement('section');
    pagina.innerHTML = '<h2>' + listaContos[numberId].titulo + '</h2>' + '<pre id="preElement">' + listaContos[numberId].texto + '</pre>';
    document.querySelector('main').appendChild(pagina);
}