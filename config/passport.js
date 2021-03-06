const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const Usuario = require("../db/models").Usuario;
const Dentista = require("../db/models").Dentista;
const TipoDentista = require("../db/models").tipoDentista;
const Clinica = require("../db/models").Clinica;
const keys = require("./keys");

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey
};

module.exports = passport => {
  passport.use(
    "user",
    new JwtStrategy(opts, (jwt_payload, done) => {
      Usuario.findOne({
        where: {
          id: jwt_payload.id
        },
        include: [
          {
            model: Dentista,
            include: [Clinica, TipoDentista]
          }
        ]
      }).then(usuario => {
        if (usuario) {
          return done(null, usuario);
        }
        return done(null, false);
      });
    })
  );
};
