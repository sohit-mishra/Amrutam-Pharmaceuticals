const mongoose = require('mongoose');

const paymentRequestSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  amountWithdrawal: {
    type: Number,
    required: true
  },
  requestedDate: {
    type: Date,
    default: Date.now
  },
  walletAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Paid', 'Declined'],
    default: 'Pending'
  },
  approvalDate: {
    type: Date
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('PaymentRequest', paymentRequestSchema);