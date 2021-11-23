const header = document.querySelector('header');
const section1 = document.getElementById('sectionOne');
const section2 = document.getElementById('sectionTwo');
headerInfoContent = ['Raposas','(vulpes)', 'Mamíferos da familia Canidae que estão presentes por todo o mundo, são animais onivoros, que se adaptam muito bem ao ambiente.']
section1Content_ListEspecies = ['Algumas Especies:', 'red fox', 'Rüppell\'s fox', 'corsac fox', 'Bengal fox', 'Arctic fox', 'Blanford\'s fox', 'Cape fox', 'fennec fox'];
section2ContentInfo = ['Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush). Twelve species belong to the monophyletic "true foxes" group of genus Vulpes. Approximately another 25 current or extinct species are always or sometimes called foxes; these foxes are either part of the paraphyletic group of the South American foxes, or of the outlying group, which consists of the bat-eared fox, gray fox, and island fox.    Foxes live on every continent except Antarctica. The most common and widespread species of fox is the red fox (Vulpes vulpes) with about 47 recognized subspecies.[2] The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world. The hunting of foxes with packs of hounds, long an established pursuit in Europe, especially in the British Isles, was exported by European settlers to various parts of the New World.'];
section2ContentLiks =  [];

fillHeader();
fillSection1();
fillSection2();
console.log('teste');

function fillHeader() {
    let headerInfo = document.createElement('div');
    header.appendChild(headerInfo);
    let headerInfo_h1 = document.createElement('h1');
    let headerInfo_h3 = document.createElement('h3'); 
    let headerInfo_p = document.createElement('p');
    
    const list = [headerInfo_h1, headerInfo_h3 , headerInfo_p];
    for (var i = 0; i < 3; i++) {
        list[i].innerText = headerInfoContent[i];
        headerInfo.appendChild(list[i]);
    }

    let headerImg = document.createElement('img');
    headerImg.src = "JSanimal-Exer/1.jpg";
    header.appendChild(headerImg);
 
    
}

function fillSection1() {
    let section1Div = document.createElement('div');
    section1.appendChild(section1Div)
    let titleList = document.createElement('h2');
    titleList.innerText = section1Content_ListEspecies[0];
    section1Div.appendChild(titleList);
    let section1List = document.createElement('ul');
    section1Div.appendChild(section1List);

    let section1List_Item1 = document.createElement('li');
    let section1List_Item2 = document.createElement('li');
    let section1List_Item3 = document.createElement('li');
    let section1List_Item4 = document.createElement('li');
    let section1List_Item5 = document.createElement('li');
    let section1List_Item6 = document.createElement('li');
    let section1List_Item7 = document.createElement('li');
    let section1List_Item8 = document.createElement('li');

    section1List_Item1.innerText = section1Content_ListEspecies[1];
    section1List_Item2.innerText = section1Content_ListEspecies[2];
    section1List_Item3.innerText = section1Content_ListEspecies[3];
    section1List_Item4.innerText = section1Content_ListEspecies[4];
    section1List_Item5.innerText = section1Content_ListEspecies[5];
    section1List_Item6.innerText = section1Content_ListEspecies[6];
    section1List_Item7.innerText = section1Content_ListEspecies[7];
    section1List_Item8.innerText = section1Content_ListEspecies[8];

    section1List.appendChild(section1List_Item1);
    section1List.appendChild(section1List_Item2);
    section1List.appendChild(section1List_Item3);
    section1List.appendChild(section1List_Item4);
    section1List.appendChild(section1List_Item5);
    section1List.appendChild(section1List_Item6);
    section1List.appendChild(section1List_Item7);
    section1List.appendChild(section1List_Item8);

    let section1Img = document.createElement('img');
    section1Img.src = "JSanimal-Exer/2.jpg";
    section1.appendChild(section1Img);
}

function fillSection2() {
    let section2Title = document.createElement('h2');
    section2Title.innerText = 'Info';
    section2.appendChild(section2Title);
    let section2InfoDiv = document.createElement('div');
    section2InfoDiv.innerText = section2ContentInfo[0];
    section2.appendChild(section2InfoDiv);
}
