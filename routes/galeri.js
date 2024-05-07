const galeri = require('../controllers/galeri');
const router = require('express').Router();

router.get('/', galeri.showAll);
router.get('/:id', galeri.showById);
router.post('/', galeri.createGaleri);
router.put('/:id', galeri.updateGaleri);
router.delete('/:id', galeri.deleteGaleri);

module.exports = router;