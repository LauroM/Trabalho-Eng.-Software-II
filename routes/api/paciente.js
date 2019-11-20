const router = require("express").Router();
const passport = require("passport");
const Paciente = require("../../db/models").Paciente;
const Clinica = require("../../db/models").Clinica;

router.get("/", (req, res) => {
  res.status(200).send({ msg: "Paciente route works" });
});

/**
 * Get a list of pacients
 */
router.get(
  "/getall",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    Clinica.findOne({
      where: {
        id: req.user.Dentista[0].Clinicas[0].id
      },
      include: [Paciente]
    }).then(clinica => {
      return res.status(200).send(clinica.Pacientes);
    });
  }
);

/**
 * Cadastro de paciente
 */
router.post(
  "/register",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    let pacienteFields = {
      nome: req.body.nome,
      cpf: req.body.cpf,
      rg: req.body.rg
    };

    Clinica.findOne({
      where: {
        id: req.user.Dentista[0].Clinicas[0].id
      }
    }).then(clinica => {
      Paciente.create(pacienteFields).then(paciente => {
        clinica.addPaciente(paciente).then(() => {
          return res
            .status(200)
            .send({ msg: "Paciente adicionado com sucesso" });
        });
      });
    });
  }
);

module.exports = router;
