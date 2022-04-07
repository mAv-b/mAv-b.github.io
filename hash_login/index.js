const express = require('express');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const port = 3000;

const app = express();
app.use(cookieParser());

const public = path.join(__dirname, "/src/public");
app.use(express.static(public));
app.use(express.json());

app.post('/register',(req,res)=>{
    try{
        console.log(123)
        const {username,password} = req.body;
        bcrypt.hash(password, 10).then((hash)=>{
            const users_Buffer = fs.readFileSync('./src/database/users.json');
            const users_JSON = JSON.parse(users_Buffer);
            users_JSON.push({username, password:hash});
            const data = JSON.stringify(users_JSON);
            fs.writeFileSync('./src/database/users.json', data);
            res.status(200);
            return res.send("OK");
        });
    }catch{
        res.status(404);
        return res.send('Error');
    }

});

app.post('/login',(req,res)=>{
    try{
        const {username,password} = req.body;
        const users_Buffer = fs.readFileSync('./src/database/users.json');
        const users_JSON = JSON.parse(users_Buffer);
        const match_users = users_JSON.filter(k => k.username === username);
        let index;
        match_users.forEach(item =>{
            if(!bcrypt.compareSync(password, item.password)){
                return;
            }else{
                index = users_JSON.indexOf(item);
            };
        });
        if(index !== undefined){
            const cookiesOptions = {
                expires : new Date(Date.now() + 5*60000),
                sameSite : 'strict'
            };
            const hash = users_JSON[index].password
            res.cookie('token', hash, cookiesOptions);
             return res.status(200).send('OK');
        }else{
            return res.status(201).send('Error201');
        }
    }catch{
        return res.status(404).send('Error404');
    }
});

app.post('/checkSession', (req,res)=>{
    const cookiesOptions = {
        expires : new Date(Date.now() + 5*60000),
    };
    if(req.cookies === {}){
        return res.status(201).json({session:'closed'});
    }else{
        const token = req.cookies.token;
        const users_Buffer = fs.readFileSync('./src/database/users.json');
        const users_JSON = JSON.parse(users_Buffer);

        const user = users_JSON.find(item => item.password === token);
        if(!user){
            return res.status(404).send({result:"Not Found",session:"open"});
        }else{
            res.cookie('token', token, cookiesOptions);
            return res.status(200).send({result:user.username,session:"open"});
        }
    }
});

app.get('/*',(req,res)=>{
    res.send("<h1>404 error page</h1><p>Pagina não encontrada.</p>");
});

app.listen(port, ()=>{
    console.log(`
    Server is running in ${port}
    `);
})