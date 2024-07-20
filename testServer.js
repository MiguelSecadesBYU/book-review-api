const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const swagger = require('./swagger');
const passport = require('passport');
const session = require('express-session');

const app = express();
connectDB();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Book Review API</h1><ul><li><a href="/auth/github">Login with GitHub</a></li><li><a href="/profile">Profile</a></li><li><a href="/logout">Logout</a></li></ul>');
});

swagger(app);

module.exports = app;
