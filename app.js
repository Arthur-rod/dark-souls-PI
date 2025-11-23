// var ambiente_processo = 'producao';
var ambiente_processo = 'producao';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios"); 
var campeaoFavRouter = require("./src/routes/campeaoFav"); 
var quizRouter = require("./src/routes/quiz");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/campeaoFav", campeaoFavRouter);
app.use("/quiz", quizRouter)

app.listen(PORTA_APP, function () {
    console.log(`
8888888b.         d8888 8888888b.  888    d8P       .d8888b.   .d88888b.  888     888 888       .d8888b.
888  "Y88b       d88888 888   Y88b 888   d8P       d88P  Y88b d88P" "Y88b 888     888 888      d88P  Y88b
888    888      d88P888 888    888 888  d8P        Y88b.      888     888 888     888 888      Y88b.
888    888     d88P 888 888   d88P 888d88K          "Y888b.   888     888 888     888 888       "Y888b.
888    888    d88P  888 8888888P"  8888888b            "Y88b. 888     888 888     888 888          "Y88b.
888    888   d88P   888 888 T88b   888  Y88b             "888 888     888 888     888 888            "888
888  .d88P  d8888888888 888  T88b  888   Y88b      Y88b  d88P Y88b. .d88P Y88b. .d88P 888      Y88b  d88P
8888888P"  d88P     888 888   T88b 888    Y88b      "Y8888P"   "Y88888P"   "Y88888P"  88888888  "Y8888P"

8888888b.                   d8b                       888    888                    .d8888b.  888     888 888b    888
888   Y88b                  Y8P                       888    888                   d88P  Y88b 888     888 8888b   888
888    888                                            888    888                   Y88b.      888     888 88888b  888
888   d88P 888d888  8888b.  888 .d8888b   .d88b.      888888 88888b.   .d88b.       "Y888b.   888     888 888Y88b 888
8888888P"  888P"       "88b 888 88K      d8P  Y8b     888    888 "88b d8P  Y8b         "Y88b. 888     888 888 Y88b888
888        888     .d888888 888 "Y8888b. 88888888     888    888  888 88888888           "888 888     888 888  Y88888
888        888     888  888 888      X88 Y8b.         Y88b.  888  888 Y8b.         Y88b  d88P Y88b. .d88P 888   Y8888
888        888     "Y888888 888  88888P'  "Y8888       "Y888 888  888  "Y8888       "Y8888P"   "Y88888P"  888    Y888




    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});
