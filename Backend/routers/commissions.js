const express = require('express');
const { createCommission } = require('../controllers/commissionController');

const router = express.Router();

router.post('/', createCommission);

module.exports = router;
