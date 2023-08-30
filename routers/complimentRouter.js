const express = require('express');
const router = express.Router();
const complimentController = require('../controllers/complimentController');

router.get('/', complimentController.generateCompliment);

module.exports = router;
