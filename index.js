'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json({type: 'application/json'}));
routes.routes(app);

app.listen(process.env.port, () => {
    console.log(`Server is Running on port ${process.env.port}`)
});