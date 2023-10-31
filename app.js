const express = require('express');
const app = express();
//const path = require('path');
//require('dotenv').config();

const PORT = 3001;

app.listen(PORT, ()=> console.log(`server corriendo en ${PORT}!`));

app.use(express.static('public'));




