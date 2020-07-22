require('dotenv').config();

require('./src/connect');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('price-checker-backend is working!');
});

require('./src/routes/products')(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
