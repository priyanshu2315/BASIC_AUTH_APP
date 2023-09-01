const passport =  require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');
const crypto = require('crypto');

passport.use(new GoogleStrategy({
    clientID: '1030864330892-jcr277t24gs8gsmluegube7m713v6tql.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL:  "http://localhost:3000/user/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({email: profile.emails[0].value}).exec(function(err , user){
        if(err){
            console.log('error from google auth '  , err);
            return;
        }
        if(user){
            return done(null , user)
        }
        else{
            User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString('hex')
            }, function(err , user){
                if(err){
                    console.log('error in creating error');
                }
                return done(null , user);
            })
          }
    }) 

  }
));



module.exports = passport;