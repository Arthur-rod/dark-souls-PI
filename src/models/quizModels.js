const database = require('../database/config');

function salvarPontuacao(idUsuario, idQuiz, pontuacaoFinal) {
    console.log("salvando a pontuação...");

    let BuscarTentativa = `
        SELECT COUNT(numTentativa) + 1 AS proximaTentativa FROM PontosQuiz WHERE fkUsuario = ${idUsuario} AND fkQuiz = ${idQuiz};
    `;

    return database.executar(BuscarTentativa)
        .then(resultadoBusca => {

            let proximaTentativa = resultadoBusca[0].proximaTentativa;
            
            console.log(`Próxima tentativa do usuário ${idUsuario} no Quiz ${idQuiz}: ${proximaTentativa}`);
            
            let InserirPontos = `
                INSERT INTO PontosQuiz (fkUsuario, fkQuiz, numTentativa, Pontos) VALUES (${idUsuario}, ${idQuiz}, ${proximaTentativa}, ${pontuacaoFinal});
            `;

            return database.executar(InserirPontos);

        })
        .catch(erro => {
            console.error("ERRO no quiz:", erro);
            return Promise.reject(erro); 
        });
}

function melhorResultado(idUsuario, idQuiz) {
    const buscaMelhorPontuacao = `
        SELECT MAX(Pontos) AS melhor_pontuacao FROM PontosQuiz WHERE fkUsuario = ${idUsuario} AND fkQuiz = ${idQuiz};
    `;

    return database.executar(buscaMelhorPontuacao);
}


module.exports = {
    salvarPontuacao,
    melhorResultado
};