const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collection.controller');

router.get('/api/collections', collectionController.getAllCollections);
router.post('/api/collections', collectionController.addCollection);
router.delete('/api/collections/:id', collectionController.deleteCollection);

module.exports = router;
