const router = require("express").Router();
const passport = require("passport");
const Consulta = require("../../db/models").Consulta;
const Paciente = require("../../db/models").Paciente;
const Dentista = require("../../db/models").Dentista;
const Faturamento = require("../../db/models").Faturamento;

/**
 * Retorna as consultas
 */
router.get(
  "/getall",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    Consulta.findAll({
      where: {
        dentista_id: req.user.Dentista[0].id
      },
      include: [Paciente]
    }).then(consulta => {
      return res.status(200).send(consulta);
    });
  }
);

/**
 * Cadastra consulta
 */
router.post(
  "/register",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    let valor = req.body.valor;

    let consulta = {
      descricao: req.body.descricao,
      dataHora: new Date(req.body.dataHora),
      dentista_id: req.user.Dentista[0].id,
      paciente_id: req.body.paciente_id
    };

    Faturamento.findOrCreate({
      where: {
        mes: consulta.dataHora.getMonth().toString()
      },
      defaults: {
        mes: consulta.dataHora.getMonth().toString(),
        valor: 0,
        dentista_id: req.user.Dentista[0].id
      }
    }).then(([consulta, created]) => {
      consulta.increment("valor", {
        by: valor
      });
    });

    Consulta.create(consulta).then(consulta => {
      res.status(200).send(consulta);
    });
  }
);

module.exports = router;
