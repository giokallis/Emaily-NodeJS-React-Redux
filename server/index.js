const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

/**
 * Connect to Mongo
 */
mongoose.connect(keys.mongoURI);

/**
 * Initialize Express
 */
const app = express();

/**
 * Cookies Session
 */
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

/**
 * Mounting routes
 */
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  45;

  res.send('Emaily API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
