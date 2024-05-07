const express = require('express');
const routes = require('./routes');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(routes);


app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

