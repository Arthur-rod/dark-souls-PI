var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT campeaoFav, count(*) as Soma from Usuario GROUP BY campeaoFav ORDER BY Soma DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar() {
    var instrucao = `
        UPDATE Usuario SET campeaoFav = '${champ}' WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarDadosGerais(){
    var instrucao = `
        SELECT campeaoFav, count(*) as Soma from Usuario GROUP BY campeaoFav ORDER BY Soma DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    mostrarDadosGerais,
    listar
};