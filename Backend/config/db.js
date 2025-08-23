const mongoose = require('mongoose');
const env = require('./env');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); 
    }
};

module.exports = connectToDatabase;
