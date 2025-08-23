const mongoose = require("mongoose");

const commissionSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    ProductCommission: {
      type: Number,
      required: true,
    },
    DoctorCommission: {
      type: Number,
      required: true,
    },
    isDefaultProductCommission: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Commission", commissionSchema);
