const router = require("express").Router();
const Clinica = require("../../db/models").Clinica;
const Dentista = require("../../db/models").Dentista;
const Usuario = require("../../db/models").Usuario;

/**
 * Cadastra uma clinica em conjunto com o dentista
 */
router.post("/register", (req, res) => {
  let clinicaFields = {
    nome: req.body.cli_nome
  };

  let dentistaFields = {
    nome: req.body.den_nome,
    registro_cro: req.body.registro_cro,
    cpf: req.body.cpf,
    rg: req.body.rg,
    tipoDentista_id: req.body.tipoDentista_id
  };

  let userFields = {
    login: req.body.login,
    senha: req.body.senha
  };

  Clinica.create(clinicaFields).then(clinica => {
    Usuario.findOrCreate({
      where: {
        login: userFields.login
      },
      defaults: userFields
    }).then(([usuario, created]) => {
      if (!created)
        return res
          .status(400)
          .send({ error: { exists: "Usuário já existente no sistema" } });

      dentistaFields["usuario_id"] = usuario.id;

      Dentista.create(dentistaFields).then(dentista => {
        clinica.addDentista(dentista).then(() => {
          res.status(200).send({ success: true, clinica, usuario, dentista });
        });
      });
    });
  });
});

module.exports = router;
