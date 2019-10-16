const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const Usuario = require("../db/models").Usuario;
const keys = require("./keys");

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
  secretOrKey: keys.secretOrKey
};

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Usuario.findOne({
        where: {
          id: jwt_payload.id
        }
      }).then(usuario => {
        if (usuario) {
          return done(null, usuario);
        }
        return done(null, false);
      });
    })
  );
};
