const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send({ msg: "Clients route works" });
});

module.exports = router;
