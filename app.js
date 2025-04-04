const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");
const router = require('../Backend/router/router');

const app = express();

app.use(cors());
app.use(bodyParser.json());
router(app);

const port = process.env.PORT || 3001

app.listen(port, () => console.log('Server has started on port: ' + port))

module.exports = app;