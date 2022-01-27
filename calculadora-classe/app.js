class Calculadora{
    constructor(){
        this.operand1 = undefined;
        this.operand2 = undefined;
        this.operation = undefined;
    }

    verifyIfIsNumber(number) {
        if(/^\d+(\.*\d+)*$/.test(number)){
            return true;
        }else{
            return false;
        }
    }

    isInt(number) {
        return number % 1 === 0;
     }

    err(type){
        if(type === 0){
            return 'erro 1 > operand NaN';
        }
        else if(type === 1){
            return 'erro 2 > operand null ';
        }
        else if(type === 2){
            return 'erro 3 > unknown';
        }
    }

    clearCalculator(){
        this.operand1 = null;
        this.operand2 = null;
        this.operation = null;
    }

    set setOperand1(_operand1){
        (this.verifyIfIsNumber(_operand1))? this.operand1 = parseFloat(_operand1) : this.err(0);
    }
    set setOperand2(_operand2){
        (this.verifyIfIsNumber(_operand2))? this.operand2 = parseFloat(_operand2) : this.err(0);
    }
    set setOperation(_operation){
        this.operation = ['plus','minus','product','division'].
        find(l => l===_operation);
    }

    get getResult(){
        const empty = ( 
        (this.operand1 === undefined || this.operand1 === null) ||
        (this.operand2 === undefined || this.operand2 === null) ||
        (this.operation === undefined || this.operation === null)
        );
        if(empty){
            return this.err(1);
        }else{
            let res;
            switch(this.operation){
                case 'plus':
                    res = this.operand1+this.operand2;
                    return this.isInt(res)? res:res.toFixed(2);
                case 'minus':
                    res = this.operand1-this.operand2;
                    return this.isInt(res)? res:res.toFixed(2);
                case 'product':
                    res = this.operand1*this.operand2;
                    return this.isInt(res)? res:res.toFixed(2);
                case 'division':
                    res = this.operand1/this.operand2;
                    return this.isInt(res)? res:res.toFixed(2);
                default:
                    return this.err(2);
            }
        }
    }
}
const calc = new Calculadora();


let boo1 = true;
let boo2 = false;
let result = null;
const screenNumber = document.getElementById('result');
const validateNumber = document.getElementById('inputResult');

const keyNumbers = document.getElementsByClassName('number');
for(let i of keyNumbers){
    i.addEventListener('click', ()=>{
        if(boo2){
            calc.setOperand1 = null;
            boo1 = true;
            boo2 = false;
        }
        screenNumber.textContent += i.textContent;
        validateNumber.value += i.value;
    });
}

const keyOperations = document.getElementsByClassName('operation');
for(let i of keyOperations){
    i.addEventListener('click', ()=>{
        if(boo1){
            (screenNumber.textContent === '')? 
            calc.setOperand1 = null
            :calc.setOperand1 = validateNumber.value;
            boo1 = false;
        }
        else if(boo2) boo2 = false;
        calc.operation = i.value;
        screenNumber.textContent = null;
        validateNumber.value = null;
    });
}

const keyEqual = document.querySelector('.equal');
keyEqual.addEventListener('click', ()=>{
    (screenNumber.textContent === '')?
    calc.setOperand2 = undefined
    :calc.setOperand2 = validateNumber.value;
    result = calc.getResult;
    screenNumber.textContent = result;
    calc.setOperand1 = result;
    validateNumber.value = null;
    result.includes('erro')? screenNumber.style.fontSize = '1.5em'
    :screenNumber.style.fontSize='3em';
});

const keyDel = document.querySelector('.delete');
keyDel.addEventListener('click',()=> {
    let newNumber = screenNumber.textContent;
    newNumber = newNumber.split('');
    newNumber.splice(0,1);
    newNumber = newNumber.join().replace(/,/g,'');
    console.log(newNumber);
    screenNumber.textContent = newNumber;
    validateNumber.value = newNumber;
});

const keyClear = document.querySelector('.clear');
keyClear.addEventListener('click', ()=>{
    calc.clearCalculator();
    screenNumber.textContent = null;
    validateNumber.value = null;
    boo2 = true;
})
