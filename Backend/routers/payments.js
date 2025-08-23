const express = require('express');
const router = express.Router();
const {
  getAllPaymentRequests,
  updatePaymentRequestStatus,
  bulkUpdatePaymentRequests,
} = require('../controllers/paymentController');


router.get('/', getAllPaymentRequests);
router.patch('/:id/status', updatePaymentRequestStatus);
router.patch('/bulk-status', bulkUpdatePaymentRequests);

module.exports = router;