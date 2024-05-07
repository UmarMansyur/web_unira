const jenis_kerjasama = require('../controllers/jenis_kerjasama');
const router = require('express').Router();

router.get('/', jenis_kerjasama.showAll);
router.get('/:id', jenis_kerjasama.showById);
router.post('/', jenis_kerjasama.createJenisKerjasama);
router.put('/:id', jenis_kerjasama.updateJenisKerjasama);
router.delete('/:id', jenis_kerjasama.deleteJenisKerjasama);

module.exports = router;