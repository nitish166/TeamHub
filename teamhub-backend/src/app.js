const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const teamRoutes = require('./routes/team.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/team', teamRoutes); 

module.exports = app;