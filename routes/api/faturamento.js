const router = require("express").Router();
const passport = require("passport");
const Faturamento = require("../../db/models").Faturamento;
const Clinica = require("../../db/models").Clinica;
const Dentista = require("../../db/models").Dentista;
const Op = require("sequelize").Op;

/**
 * Retorna o faturamento do dentista
 */
router.get(
  "/dentist",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    Faturamento.findAll({
      where: {
        dentista_id: req.user.id
      }
    }).then(faturamento => {
      if (!faturamento)
        return res
          .status(404)
          .send({ error: { noFatur: "Nenhum faturamento encontrado!" } });

      return res.status(200).send(faturamento);
    });
  }
);

/**
 * Retorna o faturamento da clinica
 */
router.get(
  "/clinic",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    Clinica.findOne({
      where: {
        id: req.user.Dentista[0].Clinicas[0].id
      },
      include: [Dentista]
    }).then(clinica => {
      let dentists_ids = clinica.Dentista.map(dentista => dentista.id);
      dentists_ids = [...new Set(dentists_ids)];

      return res.status(200).send(dentists_ids);
    });
  }
);

module.exports = router;
