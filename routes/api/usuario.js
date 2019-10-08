    
const router = require("express").Router();

router.post("/cadastro", (req, res) => {
  res.status(200).send({ msg: "Usuario route works" });
});

module.exports = router;
