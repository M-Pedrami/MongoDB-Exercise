const express = require('express');
const app = express();
require("dotenv/config");
const mongoose = require('./Database/db')
const usersRoutes = require('./routes/usersRoutes')
const PORT = process.env.PORT || 3001

//Middlewares
app.use(express.json());

//db entrypoint
app.use('/users', usersRoutes)

app.listen(PORT, ()=>console.log(`server listening on http://localhost:${PORT}`))