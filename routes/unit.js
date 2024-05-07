const unit = require('../controllers/unit');

const router = require('express').Router();

router.get('/', unit.showAll);
router.get('/:id', unit.showById);
router.post('/', unit.createUnit);
router.put('/:id', unit.updateUnit);
router.delete('/:id', unit.deleteUnit);

module.exports = router;