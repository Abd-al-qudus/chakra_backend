const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');

dotenv.config();


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.SECRET_ID,
    callbackURL: process.env.REDIRECT_URL,
    scope: ['email', 'profile'],
    }, async (accessToken, refreshToken, profile, done) => {
        const userData = {
            username: profile.displayName,
            email: profile.emails[0].value,
            accessToken,
            refreshToken
        };
        console.log(profile);
        console.log('accesstoken--', accessToken);
        console.log('refreshtoken--', refreshToken);
        return done(null, userData);
}));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});
passport.deserializeUser(function (user, cb){
    cb(null, user);
});
