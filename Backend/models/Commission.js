const mongoose = require('mongoose');

const commissionSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  commissionPercentage: {
    type: Number,
    required: true
  },
  isDefaultDoctorCommission: {
    type: Boolean,
    default: false
  },
  isDefaultProductCommission: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Commission', commissionSchema);