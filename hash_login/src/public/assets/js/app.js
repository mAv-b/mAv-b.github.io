let state = true;

const aba_register = document.getElementById('register_aba');
const aba_login = document.getElementById('login_aba');
const btn = document.getElementById('submit');
const username_element = document.getElementById('username');
const password_element = document.getElementById('password');

aba_register.addEventListener('click',()=>{
    state = true;
    aba_register.style.backgroundColor = '#197dff';
    aba_login.style.backgroundColor = '#303030';
});
aba_login.addEventListener('click',()=>{
    state = false;
    aba_login.style.backgroundColor = '#197dff';
    aba_register.style.backgroundColor = '#303030';
});

btn.addEventListener('click', submit);

async function submit(){
    const type = (state)? './register':'./login';
    const username = username_element.value;
    const password = password_element.value;
    const q = {
        username,
        password
    }
    
    const request = await fetch(type,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accepts":"application/json"
        },
        body:JSON.stringify(q)
    });

    if(type !== './register'){
        if(request.status === 200){
            window.location.replace('./home');
        }else if(request.status === 201){
            document.getElementById('msg').textContent = 'Senha incorreta';
        }else{
            document.getElementById('msg').textContent = "Erro inesperado";
        }
    }
}