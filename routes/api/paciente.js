const router = require("express").Router();
const passport = require("passport");
const Paciente = require("../../db/models").Paciente;

router.get("/", (req, res) => {
  res.status(200).send({ msg: "Paciente route works" });
});

/**
 * Get a list of pacients
 */
router.get(
  "/getall",
  passport.authenticate("user", { session: false }),
  (req, res) => {}
);

module.exports = router;
