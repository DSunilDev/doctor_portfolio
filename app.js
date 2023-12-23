const express=require('express')
const path=require('path')

const app=express();

app.use(express.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('js'));
app.use(express.static('fonts'));


app.get('/',function(req,res){
    res.render('index')
})

app.listen(500)