

document.querySelector('input').addEventListener('click', function(){scriptFunction()});

let itemsList = document.querySelectorAll('select');
console.log(itemsList);
itemsList[0].addEventListener('change', function(){changingItem()});
itemsList[1].addEventListener('change', function(){changingItem()});
itemsList[2].addEventListener('change', function(){changingItem()});
itemsList[3].addEventListener('change', function(){changingItem()});

let listBreads = ["Pão Francês", "Pão Australiano", "Pão de Brioche"];
let listMeats = ["hamPicanha", "hamCostela", "hamVegano"];
let listSalads = ["alface", "tomate", "semSalada"];
let listCheeses = ["mussarela", "prato", "cheddar"];

function changingItem() {
    let sumResult = document.getElementById('resultado');
    
    let breadItem = document.getElementById('bread').value;
    let meatItem = document.getElementById('meat').value;
    let saladItem = document.getElementById('salad').value;
    let cheeseItem = document.getElementById('cheese').value;

    var breadValue;
    var meatValue;
    var saladValue;
    var cheeseValue;

    if (breadItem == listBreads[0]) {
        breadValue = 3.00;
    }
    else if (breadItem == listBreads[1]) {
        breadValue = 8.00;
    }
    else if (breadItem == listBreads[2]) {
        breadValue = 6.00;
    }
    else {
        breadValue = 0;
    }

    if (meatItem == listMeats[0]) {
       meatValue = 13.00; 
    }
    else if (meatItem == listMeats[1]) {
        meatValue = 10.00;
    }
    else if (meatItem == listMeats[2]) {
        meatValue = 12.00;
    }
    else {
        meatValue = 0;
    }

    if ((saladItem == listSalads[0]) || (saladItem == listSalads[1])) {
        saladValue = 1.50;
    }
    else {
        saladValue = 0;
    }

    if ( (cheeseItem == listCheeses[0]) || (cheeseItem == listCheeses[1]) ) {
        cheeseValue = 3.00;
    }
    else if (cheeseItem == listCheeses[2]) {
        cheeseValue = 5.00;
    }
    else {
        cheeseValue = 0;
    }

    sumResult.innerHTML = 'R$' + " " + (breadValue + meatValue + saladValue + cheeseValue).toFixed(2);
    
}

 function scriptFunction() {
    let breadItem = document.getElementById('bread').value;
    let meatItem = document.getElementById('meat').value;
    let saladItem = document.getElementById('salad').value;
    let cheeseItem = document.getElementById('cheese').value;

    let totalItem = document.getElementById('resultado').value;
    document.getElementById('fichaTotal').innerHTML = totalItem;
    document.getElementById('fichaTotal').style.display = 'block';

    let displayShowImg = document.querySelectorAll(".fichaItemBurguerSVG");
    displayShowImg[0].style.display = "inline";
    displayShowImg[1].style.display = "inline";
    displayShowImg[2].style.display = "inline";
    displayShowImg[3].style.display = "inline";
    displayShowImg[4].style.display = "inline";
    document.getElementById('nameFicha').style.display = "inline";
    document.querySelector('hr').style.display = "inline";

    document.getElementById('ficha').style.backgroundImage = "none";

    if (breadItem == listBreads[0]) {
        document.getElementById('fichaBread').innerHTML = "Pão Francês";
        document.getElementById('fichaBread').style.display = "inline";
    }
    else if (breadItem == listBreads[1]) {
        document.getElementById('fichaBread').innerHTML = "Pão Australiano";
        document.getElementById('fichaBread').style.display = "inline";
    }
    else if (breadItem == listBreads[2]) {
        document.getElementById('fichaBread').innerHTML = "Pão de Brioche";
        document.getElementById('fichaBread').style.display = "inline";
    }
    else {
        document.getElementById('fichaBread').innerHTML = "Nada";
        document.getElementById('fichaBread').style.display = "inline";
    }

    if (meatItem == listMeats[0]) {
        document.getElementById('fichaMeat').innerHTML = "Hambúrguer de Picanha";
        document.getElementById('fichaMeat').style.display = "inline";
    }
    else if (meatItem == listMeats[1]) {
        document.getElementById('fichaMeat').innerHTML ="Hambúrguer de Costela";
        document.getElementById('fichaMeat').style.display = "inline";
    }
    else if (meatItem == listMeats[2]) {
        document.getElementById('fichaMeat').innerHTML = "Hambúrguer Vegano";
        document.getElementById('fichaMeat').style.display = "inline";
    }
    else {
        document.getElementById('fichaMeat').innerHTML = "Nada";
        document.getElementById('fichaMeat').style.display = "inline";
    }

    if (saladItem == listSalads[0]) {
        document.getElementById('fichaSalad').innerHTML = "Alface";
        document.getElementById('fichaSalad').style.display = "inline";
    }
    else if (saladItem == listSalads[1]) {
        document.getElementById('fichaSalad').innerHTML = "Tomate";
        document.getElementById('fichaSalad').style.display = "inline";
    }
    else if (saladItem == listSalads[2]) {
        document.getElementById('fichaSalad').innerHTML ="Sem Salada";
        document.getElementById('fichaSalad').style.display = "inline";
    }
    else {
        document.getElementById('fichaSalad').innerHTML ="Nada";
        document.getElementById('fichaSalad').style.display = "inline";
    }

    if (cheeseItem == listCheeses[0]) {
        document.getElementById('fichaCheese').innerHTML = "Mussarela";
        document.getElementById('fichaCheese').style.display = "inline";
    }
    else if (cheeseItem == listCheeses[1]) {
        document.getElementById('fichaCheese').innerHTML = "Prato";
        document.getElementById('fichaCheese').style.display = "inline";
    }
    else if (cheeseItem == listCheeses[2]) {
        document.getElementById('fichaCheese').innerHTML = "Cheedar";
        document.getElementById('fichaCheese').style.display = "inline";
    }
    else {
        document.getElementById('fichaCheese').innerHTML = "Nada";
        document.getElementById('fichaCheese').style.display = "inline";
    }


 }