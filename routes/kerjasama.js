const kerjasama = require('../controllers/kerjasama');

const router = require('express').Router();

router.get('/', kerjasama.showAll);
router.get('/:id', kerjasama.showById);
router.post('/', kerjasama.createkerjasama);
router.put('/:id', kerjasama.updatekerjasama);
router.delete('/:id', kerjasama.deletekerjasama);

module.exports = router;