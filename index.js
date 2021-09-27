var express = require('express')
var app = express()

//cofig database
var mongoose = require('mongoose')
var conexao = ()=>{
    var camninho = mongoose.connect('mongodb+srv://awesome:leon0708@fiap.tdbqu.mongodb.net/mongoatlas?retryWrites=true&w=majority')
}
var Schema = mongoose.Schema
var depoimentos = new Schema({
    nome:String,
    cargo:String,
    mensagem:String
})
var documentos = mongoose.model('depoimentos',depoimentos)
// fim das cofigurações


var porta = process.env.PORT || 2727
module.exports = {app, porta}

// configurações
app.set('view engine', 'ejs')
app.use(express.static('./'))

// rota para abrir o arquivo index.ejs
app.get('/',(req,res)=>{
    conexao()
    documentos.find().limit(3).sort({'_id':-1})
    .then((documentos)=>{
        console.log(documentos)  
        res.render('index',{documentos})
    })
})

// ligar o servidor
app.listen(porta)