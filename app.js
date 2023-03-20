const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", function(req, res){
    var nome = "Jhon Doe";
    var showTheMsg = false;

    var product = [
        {name: "Milk", price: 1.99},
        {name: "Biscuit", price: 3.85},
        {name: "Meat", price: 99.55},
        {name: "kniff", price: 0.96},
    ]
    
    res.render("index", {
        nome: nome,
        data: 20032023,
        showTheMsg,
        product,
    });
});

app.listen(3000, ()=>{console.log("You started the server on http:localhost:3000");});
