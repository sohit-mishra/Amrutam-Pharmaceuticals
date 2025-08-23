const express = require('express');
const router = express.Router();
const {
  getAllPaymentRequestsPending,
  getAllPaymentRequestsPaidAndDecline,
  updatePaymentRequestStatus,
} = require('../controllers/paymentController');

router.get('/', getAllPaymentRequestsPending);
router.get('/history', getAllPaymentRequestsPaidAndDecline);
router.patch('/:id/status', updatePaymentRequestStatus);

module.exports = router;
