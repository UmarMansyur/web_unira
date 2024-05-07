const kegiatan = require('../controllers/kegiatan');

const router = require('express').Router();

router.get('/', kegiatan.showAll);
router.get('/:id', kegiatan.showById);
router.post('/', kegiatan.createKegiatan);
router.put('/:id', kegiatan.updateKegiatan);
router.delete('/:id', kegiatan.deleteKegiatan);

module.exports = router;