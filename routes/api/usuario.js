const router = require("express").Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const Usuario = require("../../db/models").Usuario;
const Dentista = require("../../db/models").Dentista;

/**
 * Register a new user
 */
router.post("/register", (req, res) => {
  let userFields = {
    login: req.body.login,
    senha: req.body.senha
  };

  Usuario.findOrCreate({
    where: {
      login: userFields.login
    },
    defaults: userFields
  })
    .then(([usuario, created]) => {
      if (!created) {
        return res.status(400).send({
          error: {
            userExists: "Usuário já existe na base de dados"
          }
        });
      }

      return res.status(200).send({ success: true, usuario });
    })
    .catch(err => {
      console.log(err);
    });
});

/**
 * Login a user
 */
router.post("/login", (req, res) => {
  let loginFields = {
    login: req.body.login,
    senha: req.body.senha
  };

  Usuario.findOne({
    where: {
      login: loginFields.login
    },
    include: [Dentista]
  }).then(usuario => {
    if (!usuario) {
      return res
        .status(404)
        .send({ error: { noUser: "Nenhum usuario encontrado" } });
    }

    if (usuario.senha !== loginFields.senha) {
      return res
        .status(401)
        .send({ error: { password: "Senha não coincide" } });
    }

    const payload = {
      id: usuario.id,
      login: usuario.login,
      dentista: usuario.Dentista
    };

    jwt.sign(payload, keys.secretOrKey, { expiresIn: 43200 }, (err, token) => {
      if (err) {
        console.log(err);
      }

      return res.status(200).send({
        success: true,
        usuario,
        token: `Bearer ${token}`
      });
    });
  });
});

module.exports = router;
