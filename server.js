const express = require('express');
require('dotenv').config();

connectDB();
const app = express();
app.use(express.json());

const users = require('./routes/userApi');

app.use('/api/v1/auth', users);

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
