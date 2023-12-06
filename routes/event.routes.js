const express = require('express');
const { getAll, create, getSearch } = require('../controllers/event.controller');
const router = express.Router();

router.get('/', getAll);
router.get('/search', getSearch);
router.post('/', create);

module.exports = router;