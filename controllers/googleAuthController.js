

passport.serializeUser(function (user, cb) {
    cb(null, user);
});
passport.deserializeUser(function (user, cb){
    cb(null, user);
});

const googleLogin = (req, res) => {
    passport.authenticate('google')
}

const googleLogout = (req, res) => {

}

const googleRedirect = (req, res) => {

}