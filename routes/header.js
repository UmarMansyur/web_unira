const header = require('../controllers/header');
const router = require('express').Router();

router.get('/', header.showAll);
router.get('/:id', header.showById);
router.post('/', header.createHeader);
router.put('/:id', header.updateHeader);
router.delete('/:id', header.deleteHeader);

module.exports = router;