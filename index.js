const express = require('express');
let ejs = require('ejs');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
PORT = 8080;

app.set('views','./views');
app.set("view engine", "ejs");

const path = require('path')


app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/login',(req,res)=>{
    const {useName,passord} = req.body;
    console.log(`Your Username ${useName} and Password is ${passord}`);
    if(useName=="admin" && passord==1234){
        res.redirect("/admin/index.html");
    }
    
    else if(useName=="user" && passord==12345){
        res.redirect("/ticket/newFerry.html");
    }
    else{
        res.send(x);
    }
});

app.get('/admin/index.html',(req,res)=>{
    res.render('adminindex');
});

app.get('/ticket/newFerry.html',(req,res)=>{
    res.render('newFerry');
});


app.listen(PORT);