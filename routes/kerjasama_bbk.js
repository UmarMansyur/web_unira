const kerjasama_bbk = require('../controllers/kerjasama_bbk');

const router = require('express').Router();

router.get('/', kerjasama_bbk.showAll);
router.get('/:id', kerjasama_bbk.showById);
router.post('/', kerjasama_bbk.createKerjaSamaBBK);
router.put('/:id', kerjasama_bbk.updateKerjaSamaBBK);
router.delete('/:id', kerjasama_bbk.deleteKerjaSamaBBK);

module.exports = router;