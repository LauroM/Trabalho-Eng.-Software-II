const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../db/models").User;
const keys = require("./keys");

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
  secretOrKey: keys.secretOrKey
};

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findOne({
        where: {
          id: jwt_payload.id
        }
      }).then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
    })
  );
};
