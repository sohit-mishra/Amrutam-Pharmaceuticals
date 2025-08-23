const PaymentRequest = require('../models/PaymentRequest');
const Doctor = require('../models/Doctor');

const getAllPaymentRequestsPending = async (req, res) => {
  try {
    const { 
      search, 
      page = 1, 
      limit = 7 
    } = req.query;

    let query = { status: 'Pending' }; 
    
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
      } else {
        return res.json({
          paymentRequests: [],
          totalPages: 0,
          currentPage: Number(page),
          totalCount: 0,
          limit
        });
      }
    }

    const paymentRequests = await PaymentRequest.find(query)
      .populate('doctor', 'name email mobile image')
      .sort({ requestedDate: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const totalCount = await PaymentRequest.countDocuments(query);

    res.json({
      paymentRequests,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: Number(page),
      totalCount,
      limit
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPaymentRequestsPaidAndDecline = async (req, res) => {
  try {
    const { 
      search, 
      status, 
      page = 1, 
      limit = 7 
    } = req.query;

    let query = { status: { $in: ['Paid', 'Declined'] } }; 
    
    if (status && ['Paid', 'Declined'].includes(status)) {
      query.status = status; 
    }

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
      } else {
        return res.json({
          paymentRequests: [],
          totalPages: 0,
          currentPage: Number(page),
          totalCount: 0,
          limit
        });
      }
    }

    const paymentRequests = await PaymentRequest.find(query)
      .populate('doctor', 'name email mobile image')
      .sort({ requestedDate: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const totalCount = await PaymentRequest.countDocuments(query);

    res.json({
      paymentRequests,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: Number(page),
      totalCount,
      limit
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

module.exports = {
  getAllPaymentRequestsPending,
  getAllPaymentRequestsPaidAndDecline,
  updatePaymentRequestStatus,
};
