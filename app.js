const express = require('express');
const dotenv = require('dotenv');
const employeeRoutes = require('./routes/employeeRoutes');
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db');
const seedDB = require('./config/seed')

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Register routes
app.use('/api/v1/emp', employeeRoutes);
app.use('/api/v1/user', userRoutes);

const startServer = async () => {
  await seedDB();
  await connectDB()
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();