const router = require('express').Router();
const fakultas = require('./fakultas');

router.get('/', (_, res) => {
  res.send('Hello, world!');
});

router.use('/fakultas', fakultas);

modulee.exports = router;