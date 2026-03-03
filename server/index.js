require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// ensure DB connects (db.js runs connect on require)
require('./db');

app.use(cors());
app.use(express.json());

const productsRoute = require('./routes/products');
app.use('/api/products', productsRoute);

app.get('/', (req, res) => res.send('FitMart server running'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
