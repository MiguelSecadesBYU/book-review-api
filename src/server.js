require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const swagger = require('./src/swagger');

const app = express();
connectDB();

app.use(express.json());

// Routes
app.use('/api/books', require('./src/routes/bookRoutes'));
app.use('/api/reviews', require('./src/routes/reviewRoutes'));

// Swagger setup
swagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
