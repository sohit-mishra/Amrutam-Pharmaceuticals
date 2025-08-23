const express = require('express');
const router = express.Router();

router.use('/doctors', require('./doctors'));
router.use('/products', require('./products'));
router.use('/commissions', require('./commissions'));
router.use('/coupons', require('./coupons'));
router.use('/payments', require('./payments'));
router.use('/faqs', require('./faqs'));

module.exports = router;