const router = require("express").Router();
const TipoDentista = require("../../db/models").tipoDentista;

/**
 * Cadastra um tipo de dentista
 */
router.post("/register", (req, res) => {
  TipoDentista.create({
    descricao: req.body.descricao
  }).then(tipoDentista => {
    if (tipoDentista) res.status(200).send({ success: true, tipoDentista });
  });
});

/**
 * Retorna todos os tipos de dentista
 */
router.get("/getall", (req, res) => {
  TipoDentista.findAll().then(tipoDentista => {
    res.status(200).send(tipoDentista);
  });
});

module.exports = router;
