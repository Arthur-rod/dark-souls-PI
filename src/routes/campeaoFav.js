var express = require("express");
var router = express.Router();

var campeaoFavController = require("../controllers/campeaoFavController");

router.post("/cadastrar", function (req, res) {
    campeaoFavController.cadastrar(req, res);
});

router.get("/listar", function (req, res){
    campeaoFavController.listar(req, res);
});

router.get("/mostrarDadosGerais", function(req, res){
    campeaoFavController.mostrarDadosGerais(req, res);
})

module.exports = router;