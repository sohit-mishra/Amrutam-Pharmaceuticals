const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true
  },
  specialties: [{
    type: String
  }],
  walletAmount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
   image: {
    type: String, 
    default: "" 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Doctor', doctorSchema);