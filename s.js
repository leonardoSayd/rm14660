var mongoose = require('mongoose')
var conexao = ()=>{
    var camninho = mongoose.connect('mongodb+srv://awesome:leon0708@fiap.tdbqu.mongodb.net/mongoatlas?retryWrites=true&w=majority')
}