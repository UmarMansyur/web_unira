const testimoni = require('../controllers/testimoni');

const router = require('express').Router();

router.get('/', testimoni.showAll);
router.get('/:id', testimoni.showById);
router.post('/', testimoni.createTestimoni);
router.put('/:id', testimoni.updateTestimoni);
router.delete('/:id', testimoni.deleteTestimoni);

module.exports = router;