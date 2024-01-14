const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const passport = require('passport');
const cookieSession = require('cookie-session');
const { Strategy } = require('passport-google-oauth20');
const PORT = 3000;

const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2
}
passport.use(new Strategy({
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    callbackURL: 'https://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
    done(null, profile);
}));
passport.serializeUser((user, done) => {
    done(null, user);
}
);
passport.deserializeUser((user, done) => {
    done(null, user);
}
);
const app = express();
app.use(helmet());
app.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2]
}))

app.use(passport.initialize());
app.use(passport.session());



function checkLoggedIN(req, res, next) {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        res.status(401).json({
            error: 'you must be logged in to access this resource'
        })
    }
    next();
}
app.get('/auth/google', passport.authenticate('google', {
    scope: ['email', 'profile']

}));
app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failure',
        successRedirect: '/',
        session: true,
    }),
    (req, res) => {
        console.log('Google called us back!');
    }
);
app.get('/auth/logout', (req, res) => {

});
app.get('/secret', checkLoggedIN, (req, res) => {
    res.send('your personal secret value is 42');
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}
);

app.get('/failure', (req, res) => {
    res.send('you failed to log in');
})

https.createServer(
    {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')

    }, app
).listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})