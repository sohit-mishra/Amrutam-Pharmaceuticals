const PaymentRequest = require('../models/PaymentRequest');
const Doctor = require('../models/Doctor');

// Get all payment requests with filtering and pagination
const getAllPaymentRequests = async (req, res) => {
  try {
    const { 
      search, 
      status, 
      page = 1, 
      limit = 7 
    } = req.query;

    // Build search query
    let query = {};
    
    if (search) {
      const doctors = await Doctor.find({
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
          { mobile: { $regex: search, $options: 'i' } }
        ]
      });
      
      if (doctors.length > 0) {
        query.doctor = { $in: doctors.map(d => d._id) };
      }
    }
    
    if (status && status !== 'All') {
      query.status = status;
    }

    // Execute query with pagination
    const paymentRequests = await PaymentRequest.find(query)
      .populate('doctor', 'name email mobile image')
      .sort({ requestedDate: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    // Get total count for pagination
    const totalCount = await PaymentRequest.countDocuments(query);

    res.json({
      paymentRequests,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      totalCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single payment request by ID
const getPaymentRequestById = async (req, res) => {
  try {
    const paymentRequest = await PaymentRequest.findById(req.params.id)
      .populate('doctor');
    
    if (!paymentRequest) {
      return res.status(404).json({ message: 'Payment request not found' });
    }
    
    res.json(paymentRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new payment request
const createPaymentRequest = async (req, res) => {
  try {
    const { doctorId, amountWithdrawal, walletAmount, details } = req.body;
    
    // Check if doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    
    // Check if wallet has sufficient balance
    if (amountWithdrawal > walletAmount) {
      return res.status(400).json({ message: 'Insufficient wallet balance' });
    }
    
    const paymentRequest = new PaymentRequest({
      doctor: doctorId,
      amountWithdrawal,
      walletAmount,
      details,
      status: 'Pending'
    });
    
    const savedRequest = await paymentRequest.save();
    await savedRequest.populate('doctor', 'name email mobile');
    
    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update payment request status (Approve/Decline)
const updatePaymentRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!['Paid', 'Declined'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    
    const paymentRequest = await PaymentRequest.findByIdAndUpdate(
      id,
      { 
        status,
        approvalDate: status === 'Paid' ? new Date() : null
      },
      { new: true, runValidators: true }
    ).populate('doctor', 'name email mobile');
    
    if (!paymentRequest) {
      return res.status(404).json({ message: 'Payment request not found' });
    }
    
    // If approved, deduct from doctor's wallet
    if (status === 'Paid') {
      await Doctor.findByIdAndUpdate(
        paymentRequest.doctor._id,
        { $inc: { walletAmount: -paymentRequest.amountWithdrawal } }
      );
    }
    
    res.json(paymentRequest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Bulk update payment requests (for multiple selections)
const bulkUpdatePaymentRequests = async (req, res) => {
  try {
    const { ids, status } = req.body;
    
    if (!['Paid', 'Declined'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    
    const updateData = {
      status,
      approvalDate: status === 'Paid' ? new Date() : null
    };
    
    const result = await PaymentRequest.updateMany(
      { _id: { $in: ids } },
      updateData
    );
    
    // Update doctor wallets for approved payments
    if (status === 'Paid') {
      const approvedRequests = await PaymentRequest.find({ _id: { $in: ids } });
      
      for (const request of approvedRequests) {
        await Doctor.findByIdAndUpdate(
          request.doctor,
          { $inc: { walletAmount: -request.amountWithdrawal } }
        );
      }
    }
    
    res.json({ 
      message: `${result.modifiedCount} payment requests updated successfully` 
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get payment request statistics
const getPaymentStatistics = async (req, res) => {
  try {
    const totalPending = await PaymentRequest.countDocuments({ status: 'Pending' });
    const totalPaid = await PaymentRequest.countDocuments({ status: 'Paid' });
    const totalDeclined = await PaymentRequest.countDocuments({ status: 'Declined' });
    const totalAmountPaid = await PaymentRequest.aggregate([
      { $match: { status: 'Paid' } },
      { $group: { _id: null, total: { $sum: '$amountWithdrawal' } } }
    ]);
    
    res.json({
      totalPending,
      totalPaid,
      totalDeclined,
      totalAmountPaid: totalAmountPaid[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPaymentRequests,
  updatePaymentRequestStatus,
  bulkUpdatePaymentRequests,
};