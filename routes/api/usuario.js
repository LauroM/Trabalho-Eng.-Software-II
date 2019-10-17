const router = require("express").Router();
const Usuario = require("../../db/models").Usuario;

/**
 * Register a new user
 */
router.post("/register", (req, res) => {
  let userFields = {
    username: req.body.username,
    password: req.body.password
  };

  Usuario.findOrCreate({
    where: {
      username: userFields.username
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

module.exports = router;
