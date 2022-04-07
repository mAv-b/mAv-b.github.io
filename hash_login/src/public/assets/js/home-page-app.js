document.addEventListener('DOMContentLoaded', function(){
    actualTime(displayActualTime);
});

document.getElementById('logout').addEventListener('click',  function(){
    document.cookie = 'token=;path=/;max-age=-1';
    window.location.replace('../');
});

function actualTime(callback){
    setInterval(()=>{
        const dateNow = new Date().toLocaleTimeString();
        callback(dateNow);
    },1000);
    const dateNow = new Date().toLocaleTimeString();
    const hours24 = Number(dateNow.split(':')[0]);
    const param = (hours24 > 12)? ((hours24 > 18)? 'Boa noite':'Boa tarde'):'Bom dia';
    return determineGretting(param);
};
function displayActualTime(time){
    const element = document.getElementById('actual-time');
    element.textContent = time;
    return;
}

function determineGretting(msg){
    const element = document.getElementById('greeting');
    element.textContent = msg;
    return username();
}

async function username(){
    const myHeader = new Headers({
        "Content-type": "application/json",
        "Accepts":"application/json",
        "Set-Cookie":`${document.cookie}`,
    });
    const myRequest = new Request('../checkSession',{
        method:'POST',
        credentials: "include",
        headers: myHeader,
        body:JSON.stringify({"status":"OK"})
    });
    const request = await fetch(myRequest.url,myRequest);
    if(request.status === 200){
        const bodyResponse = await request.json();
        return insertName(bodyResponse.result);
    }else if(request.status === 201){
        window.alert('A sessão foi encerrada, relogue');
    }else{
        window.alert('Ocorreu um erro inesperado');
        window.location.replace('../');
    }
}

function insertName(name){
    const element = document.getElementById('username-greeting');
    element.textContent = name +'!';
    return;
}
