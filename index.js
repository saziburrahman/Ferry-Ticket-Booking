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
let x=0;

app.get('/',(req,res)=>{
    res.render('index',{title: x});
});


app.post('/login',(req,res)=>{
    const {useName,passord} = req.body;
    if(useName=="admin" && passord==1234){
        res.redirect("/admin/index.html");
        x=0;
    }
    
    else if(useName=="user" && passord==12345){
        res.redirect("/ticket/newFerry.html");
        x=0;
    }
    else{
        
        res.redirect('/');
        x=1;
    }
});


app.get('/admin/index.html',(req,res)=>{
    res.render('adminindex');
});


app.get('/ticket/newFerry.html',(req,res)=>{
    res.render('newFerry');
});


app.listen(PORT);



