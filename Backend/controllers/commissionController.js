const Commission = require("../models/Commission");

const createCommission = async (req, res) => {
  try {
    const {
      doctor,
      product,
      ProductCommission,
      DoctorCommission,
    } = req.body;

    if (!doctor || !product ) {
      return res.status(400).json({
        success: false,
        message: "Doctor, Product, and Commission Percentage are required.",
      });
    }

    const commission = new Commission({
      doctor,
      product,
      ProductCommission: ProductCommission || 0,
      DoctorCommission: DoctorCommission || 0,
    });

    const savedCommission = await commission.save();

    res.status(201).json({
      success: true,
      data: savedCommission,
    });
  } catch (error) {
    console.error("Error creating commission:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createCommission };
