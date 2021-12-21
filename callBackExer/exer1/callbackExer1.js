const button = document.querySelector('button');
button.addEventListener('click', function() {
    let inputValue = document.querySelector('input').value;
    callback(inputValue);
})

function callback(argument){
    console.log(argument);
    document.getElementById('quadro').innerHTML += argument + '<br />'
}