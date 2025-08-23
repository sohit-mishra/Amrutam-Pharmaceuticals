const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  usageLimit: {
    type: Number
  },
  discountPercentage: {
    type: Number,
    required: true
  },
  isDefaultDoctorCoupon: {
    type: Boolean,
    default: false
  },
  isDefaultCartDiscount: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Coupon', couponSchema);