const quizBD = require("../models/quizModels");

function salvarPontuacao(req, res) {
    const { idUsuario, idQuiz, pontuacaoFinal } = req.body;

    if (idUsuario == undefined || idQuiz == undefined || pontuacaoFinal == undefined) {
        return res.status(400).send("ERRO: Faltam dados necessários (idUsuario, idQuiz ou pontuacaoFinal).");
    }

    quizBD.salvarPontuacao(idUsuario, idQuiz, pontuacaoFinal)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.error(`ERRO ao salvar pontuação: ${erro.sqlMessage || erro}`);
            res.status(500).json(erro.sqlMessage || erro);
        });
}

function melhorResultado(req, res) {
    const idUsuario = req.params.idUsuario;
    const idQuiz = req.params.idQuiz;

    if (idUsuario == undefined || idQuiz == undefined) {
        return res.status(400).send("ERRO: Faltam IDs (Usuário ou Quiz) na URL.");
    }
    

    quizBD.melhorResultado(idUsuario, idQuiz) 
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado[0]); 
            } else {
                res.status(404).send("Nenhuma pontuação encontrada para este usuário e quiz.");
            }
        })
        .catch(erro => {
            console.error(`ERRO ao buscar melhor resultado: ${erro.sqlMessage || erro}`);
            res.status(500).json(erro.sqlMessage || erro);
        });
}

module.exports = {
    salvarPontuacao,
    melhorResultado 
};