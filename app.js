const express = require('express');
const dotenv = require('dotenv');
const conectarBanco = require('./config/db');
const characterRoutes = require('./routes/characterRoutes');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/characters', characterRoutes);

conectarBanco();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sucessfully running on port ${PORT}`));