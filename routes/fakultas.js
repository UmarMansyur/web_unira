const fakultas = require('../controllers/fakultas');

const router = require('express').Router();

router.get('/', fakultas.showAll);
router.get('/:id', fakultas.showById);
router.post('/', fakultas.createFakultas);
router.put('/:id', fakultas.updateFakultas);
router.delete('/:id', fakultas.deleteFakultas);

module.exports = router;