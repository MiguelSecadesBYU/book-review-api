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

// Routes
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/auth', require('./routes/authRoutes')); 

// Welcome Route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Book Review API</h1><p>This is an API for managing book reviews. You can use the endpoints documented at <a href="/api-docs">/api-docs</a> to interact with the API.</p>');
});

// Swagger setup
swagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
