const app = require("express")();
const bodyParser = require("body-parser");
const passport = require("passport");
const sequelize = require("./db/models").sequelize;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
require("./config/passport")(passport);

// Routes
const paciente = require("./routes/api/paciente");
const usuario = require("./routes/api/usuario");

// Using Routes
app.use("/api/paciente", paciente);
app.use("/api/usuario", usuario);

app.get("/migrate", (req, res) => {
  sequelize.sync({ force: true }).then(() => {
    res.status(200).send({ msg: "success" });
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at port ${port}`));
