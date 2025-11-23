var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");

router.post("/salvarPontuacao", function (req, res) {
    quizController.salvarPontuacao(req, res);
});

router.get("/melhorResultado/:idUsuario/:idQuiz", function (req, res) {
    quizController.melhorResultado(req, res);
});


module.exports = router;