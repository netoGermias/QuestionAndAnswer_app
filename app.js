const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const connectdb = require('./database/database');
const modelQuestion = require('./database/modelQuestion'); 
const question = require("./database/modelQuestion");

// database connectdb
connectdb
    .authenticate()
    .then(() => {
        console.log("Db connected!!");
    })
    .catch((msgError) => {
        console.log(msgError);
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));

// body-parser setting
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/questions", (req, res)=>{
    
    res.render("questions");
});

app.get("/", function(req, res){
    question.findAll({raw:true})
        .then(questiondid => {
            console.log(questiondid);
            res.render("index", {questiondid: questiondid});
        })
});

app.post("/questiondid", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    
    question.create({
        title: titulo,
        description: descricao,
    }).then(() => {
        res.redirect("/")
    })
    
    // console.log("It's stated");
    // res.send("A sua pergunta" + titulo + " e a descricao " + descricao);
});
app.listen(3000, ()=>{console.log("You started the server on http:localhost:3000");});
