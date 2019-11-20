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
const tipo = require("./routes/api/tipo");
const clinica = require("./routes/api/clinica");
const faturamento = require("./routes/api/faturamento");
const consulta = require("./routes/api/consulta");

// Using Routes
app.use("/api/paciente", paciente);
app.use("/api/usuario", usuario);
app.use("/api/tipo", tipo);
app.use("/api/clinica", clinica);
app.use("/api/faturamento", faturamento);
app.use("/api/consulta", consulta);

app.post("/syncdb", (req, res) => {
  sequelize
    .sync({
      alter: true
    })
    .then(() => {
      res.status(200).send({ msg: "success" });
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at port ${port}`));
