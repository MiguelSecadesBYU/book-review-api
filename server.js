require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const swagger = require('./swagger');
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/passportConfig'); 
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

// Authentication middleware
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
}

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/users', ensureAuthenticated, require('./routes/userRoutes')); 
app.use('/api/categories', ensureAuthenticated, require('./routes/categoryRoutes')); 
app.use('/auth', require('./routes/authRoutes')); 

// Welcome Route
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Book Review API</h1>
    <p>This is an API for managing book reviews. You can use the endpoints documented at <a href="/api-docs">/api-docs</a> to interact with the API.</p>
    <ul>
      <li><a href="/auth/github">Login with GitHub</a></li>
      <li><a href="/profile">View Profile</a></li>
      <li><a href="/logout">Logout</a></li>
    </ul>
  `);
});

// Swagger setup
swagger(app);


// Profile route
app.get('/profile', ensureAuthenticated, (req, res) => {
  const user = req.user;
  res.send(`
    <h1>User Profile</h1>
    <p><strong>Name:</strong> ${user.displayName}</p>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Profile URL:</strong> <a href="${user.profileUrl}">${user.profileUrl}</a></p>
    <p><strong>Avatar:</strong> <img src="${user.photos[0].value}" alt="User Avatar" /></p>
    <p><a href="/">Go back to Home</a></p>
  `);
});

// Logout route
app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
