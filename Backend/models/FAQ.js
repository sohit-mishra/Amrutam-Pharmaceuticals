const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
    enum: ['App', 'Web', 'Both']
  },
  addToHomepage: {
    type: Boolean,
    default: false
  },
  question: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: 'General'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('FAQ', faqSchema);