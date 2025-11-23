var campeaoFavModel = require("../models/campeaoFavModel");

function listar(req, res){
    campeaoFavModel.listar().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage)
    })
}

function cadastrar(req, res) {
    var champ = req.body.champ;

    if (nome == undefined) {
        res.status(400).send("tem coisa undefined!");
    }

    carroModel.cadastrar(champ).then(function(resposta){
        res.status(200).send("Sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function mostrarDadosGerais(req, res){

    console.log('Recuperando as quantidades de usuarios que selecionaram cada campeao');

    campeaoFavModel.mostrarDadosGerais().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    listar,
    mostrarDadosGerais,
    cadastrar
}