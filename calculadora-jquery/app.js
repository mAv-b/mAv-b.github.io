class Calculator{
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
        this.operation = ['+','-','x','/'].
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
                case '+':
                    res = this.operand1+this.operand2;
                    return this.isInt(res)? res:res.toFixed(2);
                case '-':
                    res = this.operand1-this.operand2;
                    return this.isInt(res)? res:res.toFixed(2);
                case 'x':
                    res = this.operand1*this.operand2;
                    return this.isInt(res)? res:res.toFixed(2);
                case '/':
                    res = this.operand1/this.operand2;
                    return this.isInt(res)? res:res.toFixed(2);
                default:
                    return this.err(2);
            }
        }
    }
}
const calc = new Calculator();


const $numbers = $('.number');
const $operations = $('.operation');
const $equal = $('.equal');
const $clear = $('.clear');
const $del = $('.delete');
const $dot = $('.dot');
const $scrDisplay = $('#screen-display');
const $scrInput = $('#screen-input');

let checkOne = true;
let checkTwo = false;
let historyCheck = false;

$numbers.on('click', function(){
    if(checkTwo){
        $scrDisplay.text('');
        $scrInput.val('');
        checkTwo = false;
    }
    const that = $(this);
    $scrDisplay.append(that.val());
    $scrInput.val(function(){
        return this.value + that.val();
    })
})

$operations.on('click', function(){
    if(checkOne){
        calc.setOperand1 = $scrInput.val();
        $scrInput.val('');
        checkOne = false;
    }
    $scrDisplay.text('');
    calc.setOperation = this.value;
    
});

$equal.on('click', function(){
    calc.setOperand2 = $scrInput.val();
    $scrDisplay.text(calc.getResult);
    $scrInput.val(calc.getResult);

    checkTwo = true;
    checkOne = true;

    $history.append(
        `<div class='item-history'>
            ${calc.operand1} ${calc.operation} ${calc.operand2} \= ${calc.getResult}
        </div>`
    )

    $('.item-history').on('click', function(e){
        e.stopPropagation();
        // console.log(this.textContent.split('='));
        const arr = this.textContent.replace(/\n/g,'').split('=');
        $scrDisplay.text(arr[1].trim());
        $scrInput.val(arr[1].trim());
        checkOne = true;
        checkTwo = true;
    })

    if(historyCheck){
        $('.item-history').show();
    }else{
        $('.item-history').hide();
    }

    calc.clearCalculator();
});

$clear.on('click', function(){
    calc.clearCalculator();
    $scrDisplay.text('');
    $scrInput.val('');
});

$del.on('click', function(){
    $scrDisplay.text(function(){
        let arr = this.textContent.split('');
        arr.splice(arr.length-1,1);
        return arr.join('');
    })
})

$dot.on('click', function(){
    const checkDot = $scrDisplay.text().split('').find(k=>k==='.');
    if(checkDot !== undefined){
        return;
    }else{
        $scrDisplay.append('.');
    }
})

const $history= $('#history');

$history.on('click', function(){
    $('body > div').css('width','60%');
    $('main').css('width','60%');
    historyCheck = true;

    const elementExit = $('<span>');
    elementExit.text('X').addClass('close-history');
    $history.append(elementExit);

    $('.close-history').on('click', function(e){
        e.stopPropagation();

        $history.css({"width": "1%"});
        $('body > div').css('width','36%');
        $('main').css('width','100%');
        $('.item-history').hide();
        $('.close-history').remove();
        historyCheck = false;
    })

    $history.css({"width": "100%"});
    $('.item-history').show();
});