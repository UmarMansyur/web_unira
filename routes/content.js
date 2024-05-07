const content = require('../controllers/content');

const router = require('express').Router();

router.get('/', content.showAll);
router.get('/:id', content.showById);
router.post('/', content.createContent);
router.put('/:id', content.updateContent);
router.delete('/:id', content.deleteContent);

module.exports = router;