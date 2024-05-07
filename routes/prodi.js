const prodi = require('../controllers/prodi');

const router = require('express').Router();

router.get('/', prodi.showAll);
router.get('/:id', prodi.showById);
router.post('/', prodi.createProdi);
router.put('/:id', prodi.updateProdi);
router.delete('/:id', prodi.deleteProdi);

module.exports = router;