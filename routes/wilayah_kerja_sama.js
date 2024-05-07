const wilayah_kerjasama = require('../controllers/wilayah_kerja_sama');

const router = require('express').Router();

router.get('/', wilayah_kerjasama.showAll);
router.get('/:id', wilayah_kerjasama.showById);
router.post('/', wilayah_kerjasama.createWilayahKerjasama);
router.put('/:id', wilayah_kerjasama.updateWilayahKerjasama);
router.delete('/:id', wilayah_kerjasama.deleteWilayahKerjasama);

module.exports = router;