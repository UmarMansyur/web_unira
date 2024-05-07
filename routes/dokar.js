const dokar = require('../controllers/dokar');

const router = require('express').Router();

router.get('/', dokar.showAll);
router.get('/:id', dokar.showById);
router.post('/', dokar.createDokar);
router.put('/:id', dokar.updateDokar);
router.delete('/:id', dokar.deleteDokar);

module.exports = router;