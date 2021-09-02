//servidor 
var express = require('express')
var app = express()

var porta = process.env.porta || 3030 

// configurações 
app.set("view engine",'ejs')
app.use(express.static('./'))

//rota para abrir o arquivo index.ejs
app.get('/',(req,res)=>{
    res.render('index')
})

//ligar o servidr 
app.listen(porta)
  
