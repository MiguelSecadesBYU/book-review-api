require('dotenv').config(); 
const express = require('express');
const connectDB = require('./config/db');
const swagger = require('./swagger');

const app = express();
connectDB();

app.use(express.json());

// Routes
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));

// Swagger setup
swagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
