const express = require("express");
const app = expres();

app.set('viw engine', 'ejs');

app.get("/", function(req, res){
    res.send("Welcome to our web page");
});

app.listen(3000, ()=>{console.log("You started the server on http:localhost:3000");});
