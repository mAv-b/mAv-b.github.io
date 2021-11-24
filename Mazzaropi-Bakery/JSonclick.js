

const headerPage = document.querySelector('header');
const articlePage = document.querySelector('article');
const stylePage = document.createElement('style');

let contactInfo = ['tel : XXXX-XXXX', 'Endereço: xxxxxxxxxxxx', 'Horario: xx:xx - xx:xx'];

fillHeader();
fillarticle();
console.log('teste');

function fillHeader() {

    headerPage.style.backgroundImage = 'url("background-Baker.jpg")';

    let headerMask = document.createElement('div');
    headerMask.style.width = '100%';
    headerMask.style.height = '100%';
    headerMask.style.backgroundColor = 'rgba(36, 36, 36, 0.503)';
    headerMask.style.display = "flex";
    headerMask.style.flexFlow = 'column nowrap';
    headerMask.style.alignItems = 'center';
    headerMask.style.justifyContent = 'center';
    headerPage.appendChild(headerMask);

    let titlePage = document.createElement('h1');
    titlePage.innerText = "Mazzaropi's Bakery";
    titlePage.style.position = 'absolute';
    titlePage.style.top = '0';
    titlePage.style.left = '-15px';
    titlePage.style.writingMode = 'vertical-rl';
    titlePage.style.color = '#fff';
    titlePage.style.fontSize = '70px';
    headerPage.appendChild(titlePage);

    let imageBread = document.createElement('img');
    imageBread.src = "bread.png";
    imageBread.style.width = "100px";
    imageBread.style.height = "100px";
    headerMask.appendChild(imageBread);

    let infoTelBread = document.createElement('h3');
    infoTelBread.innerText = contactInfo[0];
    infoTelBread.style.color = '#fff';
    infoTelBread.style.marginBottom = '15px';
    headerMask.appendChild(infoTelBread);

    let infoStreetBread = document.createElement('h3');
    infoStreetBread.innerText = contactInfo[1];
    infoStreetBread.style.color = '#fff';
    infoStreetBread.style.marginBottom = "15px";
    headerMask.appendChild(infoStreetBread);

    let infoTimeBread = document.createElement('h3');
    infoTimeBread.innerText = contactInfo[2];
    infoTimeBread.style.color = '#fff';
    infoTimeBread.style.marginBottom = "15px";
    headerMask.appendChild(infoTimeBread);
}

function fillarticle() {

    let titleArticle = document.createElement('h2');
    titleArticle.innerText = "Avaliações";
    titleArticle.style.color = "#404040";
    titleArticle.style.marginLeft = "25px";
    titleArticle.style.marginTop = "15px";
    titleArticle.style.fontSize = "70px";
    articlePage.appendChild(titleArticle);

    let sectionArticle = document.createElement('section');
    sectionArticle.style.display = "flex";
    sectionArticle.style.flexFlow = "row nowrap";
    sectionArticle.style.justifyContent = "center";
    sectionArticle.style.alignItems = "flex-start";
    sectionArticle.style.height = "80vh";
    articlePage.appendChild(sectionArticle);

    let divInfoSubmit = document.createElement('div');
    divInfoSubmit.style.width = "100%";
    divInfoSubmit.style.height = "100%";
    divInfoSubmit.style.padding = "10px";
    sectionArticle.appendChild(divInfoSubmit);

    let divReadSubmit = document.createElement('div');
    divReadSubmit.id = 'divreadsubmit'
    divReadSubmit.style.width = "100%";
    divReadSubmit.style.height = "100%";
    divReadSubmit.style.overflow = 'scroll';
    divReadSubmit.style.border = "1px solid rgb(182,182,182)";
    sectionArticle.appendChild(divReadSubmit);

    let formsInfo = document.createElement('form');
    formsInfo.action = '';
    formsInfo.method = 'get';
    divInfoSubmit.appendChild(formsInfo);

    let formsInputNameLabel = document.createElement('label');
    formsInputNameLabel.for = "formsName";
    formsInputNameLabel.innerText = "Nome:";
    formsInputNameLabel.style.fontSize = "25px";
    formsInputNameLabel.style.color = "#404040";
    formsInputNameLabel.style.paddingLeft = "5px";
    formsInfo.appendChild(formsInputNameLabel);

    let formsInputName = document.createElement('input');
    formsInputName.type = 'name';
    formsInputName.id="formsName";
    formsInputName.placeholder = "Insire seu nome aqui...";
    formsInputName.style.width = "350px";
    formsInputName.style.height = "40px";
    formsInputName.style.border = "1px solid #b6b6b6";
    formsInputName.style.outline = "none";
    formsInputName.style.color = "#b6b6b6";
    formsInputName.style.fontSize = "20px";
    formsInputName.style.borderRadius = "5px";
    formsInputName.style.marginBottom = "20px";
    formsInfo.appendChild(formsInputName);

    let textFormsAvalOne = document.createElement('span');
    textFormsAvalOne.innerText = "Avalie:"
    textFormsAvalOne.style.paddingLeft = "5px";
    textFormsAvalOne.style.fontSize = "25px";
    textFormsAvalOne.style.color = "#404040";
    formsInfo.appendChild(textFormsAvalOne);

    let divAval = document.createElement('div');
    divAval.id = "avalList";
    divAval.style.display = "inline-block";
    divAval.style.direction = "rtl";
    formsInfo.appendChild(divAval);

    let formsInputAvalOne = document.createElement('input');
    formsInputAvalOne.type = "radio";
    formsInputAvalOne.id = "avalOne";
    formsInputAvalOne.addEventListener("click" , function(){avalActive(5    )});
    formsInputAvalOne.style.display = "none";
    divAval.appendChild(formsInputAvalOne);
    
    let formsLabelAvalOne = document.createElement('label');
    formsLabelAvalOne.htmlFor = "avalOne";
    formsLabelAvalOne.style.opacity = "0.4";
    formsLabelAvalOne.onclick = 'avalActive(1)';
    divAval.appendChild(formsLabelAvalOne);

    let imgOne = document.createElement('img');
    imgOne.src = "Avaliate.bread.png";
    imgOne.style.width = "55px";
    imgOne.style.height = "55px";
    imgOne.style.marginBottom = "-5px";
    imgOne.style. marginLeft = "5px";
    formsLabelAvalOne.appendChild(imgOne);

    let formsInputAvalTwo = document.createElement('input');
    formsInputAvalTwo.type = "radio";
    formsInputAvalTwo.id = "avalTwo";
    formsInputAvalTwo.addEventListener("click" , function(){avalActive(4)});
    formsInputAvalTwo.style.display = "none";
    divAval.appendChild(formsInputAvalTwo);

    let formsLabelAvalTwo = document.createElement('label');
    formsLabelAvalTwo.htmlFor = "avalTwo";
    formsLabelAvalTwo.style.opacity = "0.4";
    formsLabelAvalTwo.onclick = 'avalActive(2)';
    divAval.appendChild(formsLabelAvalTwo);

    let imgTwo = document.createElement('img');
    imgTwo.src = "Avaliate.bread.png";
    imgTwo.style.width = "55px";
    imgTwo.style.height = "55px";
    imgTwo.style.marginBottom = "-5px";
    imgTwo.style. marginLeft = "5px";
    formsLabelAvalTwo.appendChild(imgTwo);

    let formsInputAvalThree = document.createElement('input');
    formsInputAvalThree.type = "radio";
    formsInputAvalThree.id = "avalThree";
    formsInputAvalThree.addEventListener("click" , function(){avalActive(3)});
    formsInputAvalThree.style.display = "none";
    divAval.appendChild(formsInputAvalThree);

    let formsLabelAvalThree = document.createElement('label');
    formsLabelAvalThree.htmlFor = "avalThree";
    formsLabelAvalThree.style.opacity = "0.4";
    formsLabelAvalThree.onclick = 'avalActive(3)';
    divAval.appendChild(formsLabelAvalThree);

    let imgThree = document.createElement('img');
    imgThree.src = "Avaliate.bread.png";
    imgThree.style.width = "55px";
    imgThree.style.height = "55px";
    imgThree.style.marginBottom = "-5px";
    imgThree.style. marginLeft = "5px";
    formsLabelAvalThree.appendChild(imgThree);

    let formsInputAvalFour = document.createElement('input');
    formsInputAvalFour.type = "radio";
    formsInputAvalFour.id = "avalFour"
    formsInputAvalFour.name = "AvalFour"
    formsInputAvalFour.addEventListener("click" , function(){avalActive(2)});
    formsInputAvalFour.style.display = "none";
    divAval.appendChild(formsInputAvalFour);

    let formsLabelAvalFour = document.createElement('label');
    formsLabelAvalFour.htmlFor = "avalFour";
    formsLabelAvalFour.style.opacity = "0.4";
    formsLabelAvalFour.onclick = 'avalActive(4)';
    divAval.appendChild(formsLabelAvalFour);

    let imgFour = document.createElement('img');
    imgFour.src = "Avaliate.bread.png";
    imgFour.style.width = "55px";
    imgFour.style.height = "55px";
    imgFour.style.marginBottom = "-5px";
    imgFour.style. marginLeft = "5px";
    formsLabelAvalFour.appendChild(imgFour);

    let formsInputAvalFive = document.createElement('input');
    formsInputAvalFive.type = "radio";
    formsInputAvalFive.addEventListener("click" , function(){avalActive(1)});
    formsInputAvalFive.id = "avalFive";
    formsInputAvalFive.style.display = "none";
    divAval.appendChild(formsInputAvalFive);

    let formsLabelAvalFive = document.createElement('label');
    formsLabelAvalFive.htmlFor = "avalFive";
    formsLabelAvalFive.style.opacity = "0.4";
    formsLabelAvalFive.onclick = 'avalActive(5)';
    divAval.appendChild(formsLabelAvalFive);

    let imgFive = document.createElement('img');
    imgFive.src = "Avaliate.bread.png";
    imgFive.style.width = "55px";
    imgFive.style.height = "55px";
    imgFive.style.marginBottom = "-5px";
    imgFive.style. marginLeft = "15px";
    
    formsLabelAvalFive.appendChild(imgFive);

    document.head.appendChild(stylePage);
    stylePage.sheet.insertRule('label:hover {opacity:1 !important;}');
    stylePage.sheet.insertRule('label:hover ~ label {opacity:1 !important;}');

    let formsInputComments = document.createElement('textarea');
    formsInputComments.id = "commentsUser"
    formsInputComments.rows = "7";
    formsInputComments.cols = "47";
    formsInputComments.innerText = "Comente aqui...";
    formsInputComments.style.fontSize = "20px";
    formsInputComments.style.marginTop = "30px";
    formsInputComments.style.color = "rgb(182,182,182)";
    formsInputComments.style.border = "1px solid rgb(182,182,182)";
    formsInfo.appendChild(formsInputComments);

    let buttonSubmit = document.createElement('button');
    buttonSubmit.innerText = "Enviar";
    buttonSubmit.addEventListener("click", function(){funEnviar()});
    buttonSubmit.style.backgroundColor = "#404040";
    buttonSubmit.style.padding = "10px";
    buttonSubmit.style.border =  "none";
    buttonSubmit.style.color = "#fff";
    buttonSubmit.style.width = "300px";
    divInfoSubmit.appendChild(buttonSubmit);

}

let formsInputComments = document.querySelector('textarea')
formsInputComments.addEventListener('focusin' , focusEnable);
formsInputComments.addEventListener('focusout' , focusDisable);
function focusEnable() {
    formsInputComments.innerText = '';
}
function focusDisable() {
    formsInputComments.innerText = "Comente aqui...";
}

let avalOptions = document.querySelectorAll('label');

console.log(document.querySelectorAll('label'));

function avalActive(numberCheckBox) {
    for (var i=1; i < avalOptions.length ; i++) {
        if (i <= numberCheckBox) {
            avalOptions[6-i].style.opacity = "1"; 
        }
        else {
            avalOptions[6-i].style.opacity = '0.4';
        }
    }
    
}

function funEnviar() {
    console.log(document.querySelector('input[name="AvalFour"]').checked);


    let avalUser = document.getElementById('avalList');
    let avalUserValues = avalUser.cloneNode(true);
    

    let divReadSubmit = document.getElementById('divreadsubmit');
    let nameUser = document.getElementById('formsName');
    let nameUserValue = nameUser.cloneNode(true);
    let CommentUser = document.getElementById('commentsUser');
    let CommentUserValue = CommentUser.cloneNode(true);
    divReadSubmit.appendChild(nameUserValue);
    divReadSubmit.appendChild(CommentUserValue);
    divReadSubmit.appendChild(avalUserValues);
}

