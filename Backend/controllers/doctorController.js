const Doctor = require('../models/Doctor');

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().select('_id name'); 
    res.status(200).json(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllDoctors,
};