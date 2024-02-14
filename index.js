'use strict';

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.listen(process.env.port, () => {
    console.log(`Server is Running on port ${process.env.port}`)
});