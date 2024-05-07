const detil_galeri = require('../controllers/detil_galeri');
const router = require('express').Router();

router.get('/', detil_galeri.showAll);
router.get('/:id', detil_galeri.showById);
router.post('/', detil_galeri.createDetilGaleri);
router.put('/:id', detil_galeri.updateDetilGaleri);
router.delete('/:id', detil_galeri.deleteDetilGaleri);

module.exports = router;